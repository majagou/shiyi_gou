import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

const ASSETS_DIR = path.resolve(import.meta.dirname, '../src/assets')
const BACKUP_DIR = path.resolve(import.meta.dirname, '../src/assets-original-backup')
const MAX_WIDTH = 1600
const WEBP_QUALITY = 80
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg'])

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (path.resolve(full) === BACKUP_DIR) continue
      files.push(...(await walk(full)))
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full)
    }
  }
  return files
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`
}

async function backupFiles(files) {
  console.log(`\n--- Backing up ${files.length} original files to ${path.relative(process.cwd(), BACKUP_DIR)} ---`)
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

async function convertFile(file) {
  const dir = path.dirname(file)
  const base = path.basename(file, path.extname(file))
  const outputPath = path.join(dir, `${base}.webp`)

  const beforeSize = (await fs.stat(file)).size
  const image = sharp(file)
  const metadata = await image.metadata()

  let pipeline = image
  if (metadata.width && metadata.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH })
  }
  pipeline = pipeline.webp({ quality: WEBP_QUALITY })

  await pipeline.toFile(outputPath)

  const afterStat = await fs.stat(outputPath)
  if (!afterStat.size) {
    throw new Error(`Conversion produced an empty file for ${file}, aborting deletion of original.`)
  }

  await fs.unlink(file)

  return { file, outputPath, beforeSize, afterSize: afterStat.size, resized: metadata.width > MAX_WIDTH }
}

async function main() {
  const files = await walk(ASSETS_DIR)
  if (files.length === 0) {
    console.log('No .png/.jpg/.jpeg files found under src/assets. Nothing to do.')
    return
  }

  await backupFiles(files)
  await verifyBackup(files)

  console.log(`--- Converting ${files.length} files to WebP (quality ${WEBP_QUALITY}, max width ${MAX_WIDTH}px) ---\n`)

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
      const resizedNote = result.resized ? ' (resized)' : ''
      console.log(
        `${relative}: ${formatBytes(result.beforeSize)} -> ${formatBytes(result.afterSize)} (-${pct}%)${resizedNote}`,
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
