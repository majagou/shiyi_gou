import { promises as fs } from 'fs'
import path from 'path'
import { execFile } from 'child_process'
import { promisify } from 'util'

const execFileAsync = promisify(execFile)

const ASSETS_DIR = path.resolve(import.meta.dirname, '../src/assets')
const BACKUP_DIR = path.resolve(import.meta.dirname, '../src/assets-original-backup')
const TARGET_MAX_BYTES = 2 * 1024 * 1024

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (path.resolve(full) === BACKUP_DIR) continue
      files.push(...(await walk(full)))
    } else if (path.extname(entry.name).toLowerCase() === '.gif') {
      files.push(full)
    }
  }
  return files
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

async function backupFiles(files) {
  console.log(`\n--- Backing up ${files.length} original GIFs to ${path.relative(process.cwd(), BACKUP_DIR)} ---`)
  for (const file of files) {
    const relative = path.relative(ASSETS_DIR, file)
    const backupPath = path.join(BACKUP_DIR, relative)
    await fs.mkdir(path.dirname(backupPath), { recursive: true })
    await fs.copyFile(file, backupPath)
  }
}

async function verifyBackup(files) {
  console.log('--- Verifying backup integrity before touching originals ---')
  for (const file of files) {
    const relative = path.relative(ASSETS_DIR, file)
    const backupPath = path.join(BACKUP_DIR, relative)
    const [originalStat, backupStat] = await Promise.all([fs.stat(file), fs.stat(backupPath)])
    if (backupStat.size !== originalStat.size) {
      throw new Error(
        `Backup verification FAILED for ${relative}: original ${originalStat.size} bytes, backup ${backupStat.size} bytes. Aborting before any deletion.`,
      )
    }
  }
  console.log(`Backup verified OK: all ${files.length} files match original sizes.\n`)
}

async function encodeAtCrf(file, outputPath, crf) {
  await execFileAsync('ffmpeg', [
    '-y',
    '-i', file,
    '-movflags', 'faststart',
    '-pix_fmt', 'yuv420p',
    '-vf', "scale=trunc(iw/2)*2:trunc(ih/2)*2",
    '-c:v', 'libx264',
    '-crf', String(crf),
    '-an',
    outputPath,
  ])
  return (await fs.stat(outputPath)).size
}

async function convertFile(file) {
  const dir = path.dirname(file)
  const base = path.basename(file, path.extname(file))
  const outputPath = path.join(dir, `${base}.mp4`)

  const beforeSize = (await fs.stat(file)).size

  // Start at CRF 28 (good quality/size balance); step up if still over target.
  let crf = 28
  let afterSize = await encodeAtCrf(file, outputPath, crf)
  while (afterSize > TARGET_MAX_BYTES && crf < 40) {
    crf += 4
    afterSize = await encodeAtCrf(file, outputPath, crf)
  }

  if (!afterSize) {
    throw new Error(`Conversion produced an empty file for ${file}, aborting deletion of original.`)
  }

  await fs.unlink(file)

  return { file, outputPath, beforeSize, afterSize, finalCrf: crf, underTarget: afterSize <= TARGET_MAX_BYTES }
}

async function main() {
  const files = await walk(ASSETS_DIR)
  if (files.length === 0) {
    console.log('No .gif files found under src/assets. Nothing to do.')
    return
  }

  await backupFiles(files)
  await verifyBackup(files)

  console.log(`--- Converting ${files.length} GIFs to MP4 (H.264, target < 2MB each) ---\n`)

  let totalBefore = 0
  let totalAfter = 0
  const results = []

  for (const file of files) {
    const relative = path.relative(ASSETS_DIR, file)
    try {
      const result = await convertFile(file)
      totalBefore += result.beforeSize
      totalAfter += result.afterSize
      results.push(result)
      const pct = (100 * (1 - result.afterSize / result.beforeSize)).toFixed(1)
      const warn = result.underTarget ? '' : '  ⚠ still over 2MB target'
      console.log(
        `${relative}: ${formatBytes(result.beforeSize)} -> ${formatBytes(result.afterSize)} (-${pct}%, CRF ${result.finalCrf})${warn}`,
      )
    } catch (err) {
      console.error(`FAILED converting ${relative}: ${err.message}`)
    }
  }

  const totalPct = (100 * (1 - totalAfter / totalBefore)).toFixed(1)
  console.log(`\n=== Summary ===`)
  console.log(`Files converted: ${results.length} / ${files.length}`)
  console.log(`Total before: ${formatBytes(totalBefore)}`)
  console.log(`Total after:  ${formatBytes(totalAfter)}`)
  console.log(`Reduction:    ${formatBytes(totalBefore - totalAfter)} (-${totalPct}%)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
