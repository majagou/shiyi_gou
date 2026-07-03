import thermalVRCover from '../assets/ThermalVR/ThermalVRCover.png'
import thermalHotImg from '../assets/ThermalVR/ThermalHot.png'
import thermalColdImg from '../assets/ThermalVR/ThermalCold.png'
import thermalNeutralImg from '../assets/ThermalVR/ThermalNeutral.png'

import infoVisCover from '../assets/InfoVis/density.png'
import infoVisDensityImg from '../assets/InfoVis/timeline.png'
import infoVisClusterImg from '../assets/InfoVis/network.png'

import theHiddensCover from '../assets/TheHiddens/theHiddensCover.PNG'
import theHiddensOpeningScene from '../assets/TheHiddens/opening_scene.PNG'
import theHiddensText from '../assets/TheHiddens/Text.PNG'
import theHiddensPuzzle from '../assets/TheHiddens/Puzzle.PNG'
import theHiddensPortal from '../assets/TheHiddens/Portal.PNG'
import theHiddensLRZ from '../assets/TheHiddens/LRZ.jpg'

import hriCover from '../assets/HRI/hri-cover.jpeg'
import hriConcept from '../assets/HRI/concept.png'
import hriPointingToTarget from '../assets/HRI/pointing-to-target.gif'
import hriTargetSelected from '../assets/HRI/target-selected.gif'
import hriTargetReached from '../assets/HRI/target-reached.gif'
import hriWipe from '../assets/HRI/wipe.gif'
import hriPickUp from '../assets/HRI/pick-up.gif'
import hriPauseHeard from '../assets/HRI/pause-heard.gif'

import cocoCover from '../assets/coco/cover.jpeg'
import cocoKeychain from '../assets/coco/keychain.jpg'
import cocoTeddy from '../assets/coco/teddy.webp'
import cocoCover1 from '../assets/coco/Cover1.webp'
import cocoCover2 from '../assets/coco/Cover2.webp'

import waterCover from '../assets/water/water-cover.png'
import waterHero from '../assets/water/water-hero.png'
import waterInitialWaveSetup from '../assets/water/initial_wave_setup.png'
import waterEnhancedTexturalEffect from '../assets/water/enhanced_textural_effect.png'
import waterInitialCaustics from '../assets/water/initial_caustics.png'
import waterEnhancedCaustics from '../assets/water/enhanced_caustics.png'
import waterFoamSimulationEffect from '../assets/water/foam_simulation_effect.png'
import waterUnderwaterEffect from '../assets/water/underwater_effect.png'
import waterlineEffect from '../assets/water/waterline_effect.png'

import safetyBuddyCover from '../assets/safetybuddy/safety-buddy-cover.jpg'
import safetyBuddyRobotHand from '../assets/safetybuddy/safety-buddy-robot-hand.png'
import safetyBuddyAppWireframe from '../assets/safetybuddy/safety-buddy-app-wireframe.png'
import safetyBuddyWordCrosser from '../assets/safetybuddy/safety-buddy-word-crosser.png'
import safetyBuddyFillWords from '../assets/safetybuddy/safety-buddy-fill-words.png'
import safetyBuddyMascot from '../assets/safetybuddy/safety-buddy-mascot.png'
import safetyBuddyAccessibility from '../assets/safetybuddy/safety-buddy-accessibility.png'
import safetyBuddyScamBlocker from '../assets/safetybuddy/safety-buddy-scam-blocker.png'


export const projects = [
  {
    id: "thermal-visuals-vr",
    coverImage: thermalVRCover,
    tags: ["Empirical Research", "VR/XR", "Unreal Engine"],
    title: {
      en: "Thermal Visuals in VR — M.Sc. Thesis",
      zh: "VR 中的热感知视觉研究 — 硕士论文"
    },
    githubUrls: [
      { label: "CAVE Version", url: "https://github.com/majagou/ThermalPerception_CAVE" },
      { label: "HMD Version", url: "https://github.com/majagou/ThermalPercpetionHMD" }
    ],
    content: [
      {
        type: "text",
        en: "Can what you see change how warm or cold you feel — even when the room temperature never actually changes? That question became my master's thesis, and I built a full VR experiment to test it.",
        zh: "看到的画面，能不能改变你感受到的冷暖——哪怕室温其实一直没变？这个问题成了我的硕士论文选题，我为此搭建了一整套 VR 实验来验证它。"
      },
      {
        type: "text",
        en: "I designed three environments — hot, cold, and neutral — using only visual cues: sky color and brightness, terrain material (sand vs. snow vs. stone), fog and steam, and lighting. No physical temperature was ever changed. I built all scenes myself in Unreal Engine 5, then adapted the experience for two very different setups: a large-scale LRZ CAVE installation and a Meta Quest 3 headset, to see whether the effect held across immersion levels.",
        zh: "我设计了三种场景——热、冷、中性——完全依靠视觉线索来营造：天空色彩与亮度、地面材质（沙地 vs 雪地 vs 岩石）、雾气与蒸汽、光照氛围。物理温度全程没有任何变化。所有场景都由我在 Unreal Engine 5 中独立搭建，并分别适配了两种截然不同的设备：LRZ 的大型 CAVE 沉浸式装置，以及 Meta Quest 3 头显，用来验证这个效果在不同沉浸程度下是否依然成立。"
      },
      { type: "image", src: thermalHotImg, caption: { en: "Hot scene — warm light, sand terrain, heat haze", zh: "热场景 — 暖色光照、沙地地形、太阳眩光效果" } },
      { type: "image", src: thermalColdImg, caption: { en: "Cold scene — blue tones, snow terrain, crisp lighting", zh: "冷场景 — 蓝色调、雪地地形、清冷光照" } },
      {
        type: "text",
        en: "To actually measure the effect, I ran a controlled study with 23 participants in a 2×3 within-subjects design, then analyzed the results using ANOVA and linear mixed models. The visual manipulations produced a measurable shift in how warm or cold people reported feeling — confirming that scene design alone can meaningfully influence perception, independent of physical temperature.",
        zh: "为了真正量化这个效果，我招募了 23 名被试进行了一次 2×3 被试内实验设计的正式研究，并用方差分析（ANOVA）和线性混合模型对数据进行了分析。结果显示，视觉设计确实能显著改变被试报告的冷暖感受——证明场景设计本身就能有效影响知觉体验，与实际物理温度无关。"
      },
      { type: "image", src: thermalNeutralImg, caption: { en: "Neutral scene — used as the experiment's baseline condition", zh: "中性场景 — 用作实验的基准对照条件" } },
      {
        type: "text",
        en: "This project pulled together everything from real-time rendering and shader work to experimental design and statistical analysis — and it's a good example of how I like to work: define a clear hypothesis, build something people can actually experience, then let the data tell you whether you were right.",
        zh: "这个项目串联了从实时渲染、材质与光影设计，到实验设计与数据分析的完整链条——也很能代表我做事的方式：先提出一个清晰的假设，做出用户能真实体验到的东西，再让数据来验证判断是否成立。"
      }
    ]
  },
  {
    id: "infovis-munich",
    coverImage: infoVisCover,
    tags: ["Data Visualization", "D3.js", "Product Design"],
    title: {
      en: "InfoVis Munich — Public Transport Network Visualization",
      zh: "InfoVis Munich — 慕尼黑公共交通网络可视化"
    },
    githubUrls: [
      {label: "View on GitHub", url: "https://github.com/majagou/InfoVis-Munich"},
      {label: "View Live", url: "https://majagou.github.io/InfoVis-Munich/"}
    ],
    content: [
      {
        type: "text",
        en: "For an Information Visualization course project at LMU, our team of four set out to answer a simple question: how does Munich's public transport network actually relate to where people live? We planned the project across five milestones, with tasks assigned to each team member, aiming to build a full interactive website exploring that relationship.",
        zh: "在 LMU 信息可视化课程的项目中，我们四人小组想回答一个看似简单的问题：慕尼黑的公共交通网络，到底和人口分布之间是什么关系？我们把项目拆分成五个里程碑，为每位成员分配了具体任务，目标是做一个完整的交互式网站来探索这个问题。"
      },
      {
        type: "text",
        en: "Partway through, two teammates dropped out without notice, leaving their assigned tasks unfinished. With deadlines unchanged, my remaining teammate and I had to move fast: we re-evaluated the full scope, cut it down to a clearly defined MVP, and redistributed the essential work between the two of us to make sure the core experience still shipped on time.",
        zh: "项目进行到一半，两位组员在没有提前告知的情况下临时退出，各自负责的任务都还没完成。截止时间没有变化，我和剩下的一位同学必须立刻做出反应：重新评估整体范围，收缩到一个清晰的 MVP，把关键任务重新分配到我们两人身上，确保核心体验依然能按时交付。"
      },
      {
        type: "text",
        en: "We pulled together several open datasets — city district boundaries, transit stop locations, public facility data (WCs, markets), and ten years of population density figures (2012–2022) — into one interactive Bavarian choropleth map, built with D3.js.",
        zh: "我们整合了多个开放数据集——城市行政区边界、交通站点位置、公共设施数据（公厕、市场），以及 2012 到 2022 十年间的人口密度数据——用 D3.js 汇总成一张交互式的巴伐利亚分区统计地图。"
      },
      { type: "image", src: infoVisDensityImg, caption: { en: "Population density map layered with transit network data", zh: "叠加交通网络数据的人口密度地图" } },
      {
        type: "text",
        en: "The final MVP kept the features that mattered most: an onboarding flow for first-time visitors, a timeline slider to watch population change unfold year by year, and checkbox filters to toggle transit stops, markets, and public facilities. Everything non-essential got cut — a hard but necessary call under the circumstances.",
        zh: "最终的 MVP 保留了最核心的功能：面向新用户的引导流程、可逐年查看人口变化的时间轴滑块，以及可切换交通站点、市场、公共设施的筛选器。其余非核心功能全部砍掉——在当时的情况下，这是一个艰难但必要的决定。"
      },
      { type: "image", src: infoVisClusterImg, caption: { en: "Interactive filtering and clustering view", zh: "交互式筛选与聚类视图" } },
      {
        type: "text",
        en: "Despite losing half the team mid-project, we delivered a working, polished product on the original deadline — a reminder that scope discipline and fast re-planning matter just as much as the build itself.",
        zh: "尽管项目进行到一半就损失了一半的团队，我们依然在原定截止日期前交付了一个完整可用、体验良好的产品——这也让我更深刻地体会到，范围把控和快速重新规划，和实际开发本身同样重要。"
      }
    ]
  },
  {
    id: "the-hiddens",
    coverImage: theHiddensCover,
    tags: ["VR/XR", "Unreal Engine", "Game Design"],
    title: {
      en: "The Hiddens — VR Escape Room",
      zh: "The Hiddens — VR 密室逃脱"
    },
    githubUrl: "https://github.com/majagou/The_Hiddens_CAVE",
    content: [
      {
        type: "text",
        en: "As team lead, I directed a three-person team to build a horror escape room for the LED CAVE at the Leibniz Supercomputing Centre (LRZ) — a large-scale, projection-based immersive space very different from a standard VR headset setup. Inspired by the eerie corporate atmosphere of Severance, we set out to combine environmental storytelling with puzzle-based interaction.",
        zh: "作为团队负责人，我带领一个三人小组为 LRZ（莱布尼茨超算中心）的 LED CAVE 打造了一个恐怖密室逃脱项目——这是一个大型投影式沉浸空间，与普通 VR 头显设备的开发方式很不一样。灵感来自《人生切割术》（Severance）中那种诡异的企业氛围，我们的目标是把环境叙事和解谜互动结合在一起。"
      },
      {
        type: "text",
        en: "The story casts players as an investigator searching for a missing scientist, Dr. Elisabeth Shaw, who disappeared after uncovering a disturbing secret inside a parallel-dimension corporate facility. Players explore a crime-scene-like apartment, piece together clues, and solve environmental puzzles to reveal what happened to her.",
        zh: "游戏故事设定玩家扮演一名调查员，追查失踪科学家 Elisabeth Shaw 博士的下落——她在发现一个位于平行维度企业设施中的可怕秘密后失踪。玩家需要在一个如犯罪现场般的公寓中探索，拼凑线索，通过解开环境谜题揭开真相。"
      },
      { type: "image", src: theHiddensOpeningScene, caption: { en: "Opening scene of the apartment environment", zh: "公寓场景开场画面" } },
      { type: "image", src: theHiddensText, caption: { en: "Players can grab and carry physics-enabled objects as part of the puzzle flow.", zh: "玩家可以抓取和携带具有物理特性的对象作为解谜流程的一部分。" } },
      {
        type: "text",
        en: "I owned the core Unreal Engine systems: a physics-based pickup mechanic using controller line-tracing, overlap-based puzzle validation logic, a procedural portal VFX built from animated noise textures, and a highlight/outline system to guide players' attention in the dark. I also built a jumpscare sequence using AI-driven character navigation, timed to trigger as players cross specific zones.",
        zh: "我负责了核心的 Unreal Engine 系统开发：基于手柄射线检测的物理拾取交互、基于重叠检测的解谜校验逻辑、由动态噪声贴图构建的程序化传送门特效，以及在暗场景中引导玩家注意力的高亮描边系统。此外还实现了基于 AI 角色寻路的 jump scare 惊吓触发序列，在玩家进入特定区域时精确触发。"
      },
      { type: "image", src: theHiddensPuzzle, caption: { en: "Overlap-based puzzle validation in action", zh: "基于重叠检测的解谜验证效果" } },
      { type: "image", src: theHiddensPortal, caption: { en: "Procedural portal VFX", zh: "程序化传送门特效" } },
      {
        type: "embed",
        src: "https://www.youtube.com/embed/25tzcKgVytU",
        caption: { en: "Concept demo",
          zh: "概念演示"
        }
      },
      {
        type: "embed",
        src: "https://www.youtube.com/embed/MLnuCygSu2c",
        caption: { en: "CAVE version gameplay demo",
          zh: "CAVE 版本的游戏演示"
        }
      },
      {
        type: "text",
        en: "The project was showcased hands-on at LRZ's Open Lab Day 2024, where visitors experienced the full CAVE installation. Leading a small team through a hardware setup none of us had built for before meant constant coordination between environmental art, technical implementation, and narrative pacing — and seeing visitors genuinely startled by the jumpscare on demo day was a pretty good sign it worked.",
        zh: "项目在 LRZ 2024 年 Open Lab Day 上进行了现场体验展示，访客们亲身体验了完整的 CAVE 装置。带领一个小团队开发一个我们都没有经验的硬件平台，意味着需要在环境美术、技术实现和叙事节奏之间持续协调——在展示当天看到访客真的被 jump scare 吓到，也算是对效果的一个不错的验证。"
      },
      { type: "image", src: theHiddensLRZ, caption: { en: "LRZ showcase", zh: "LRZ 展示现场" } },
    ]
  },
  {
    id: "hri-shared-workspace",
    coverImage: hriCover,
    tags: ["Robotics", "ROS2", "Human-Robot Interaction"],
    title: {
      en: "Shared-Workspace Awareness — Human-Robot Interaction",
      zh: "共享工作空间感知系统 — 人机交互"
    },
    githubUrl: "https://github.com/ChristophPoelt/Shared-Workspace-Awareness",
    content: [
      {
        type: "text",
        en: "In a cluttered kitchen, a robot arm moving without warning is unsettling — even dangerous. This project imagined a smart-kitchen assistant: a human gives voice commands via Whisper speech recognition, and a Kinova Gen3 arm responds — but always signals its intent through gesture before it moves, so its human partner knows what's coming.",
        zh: "在一个杂乱的厨房环境里，机械臂如果毫无预警地移动，是很让人不安的——甚至有风险。这个项目设想了一个智能厨房助手场景：用户通过 Whisper 语音识别下达指令，Kinova Gen3 机械臂做出响应——但在真正移动之前，会先用手势表明自己的意图，让协作者始终心里有数。"
      },
      { type: "image", src: hriConcept, caption: { en: "Concept sketch: voice-commanded kitchen assistant", zh: "概念草图：语音指令驱动的厨房助手" } },
      {
        type: "text",
        en: "I designed the full gesture taxonomy the system relies on and built the overall ROS2 architecture connecting voice input, target logic, and motion execution. My teammate handled the Whisper integration and the angle calculations for moving toward a selected target — a natural split between the interaction design/systems side and the perception/motion-math side.",
        zh: "我负责了整套手势分类体系的设计，以及连接语音输入、目标逻辑与动作执行的整体 ROS2 架构开发。我的队友负责了 Whisper 的语音识别集成，以及选定目标后的角度计算——这是交互设计与系统架构、和感知与运动计算之间比较自然的分工。"
      },
      {
        type: "text",
        en: "The gesture system covers three categories. Directional gestures show where the arm is headed:",
        zh: "手势系统分为三类。首先是方向性手势，表明机械臂即将前往的位置："
      },
      { type: "image", src: hriPointingToTarget,caption: { en: "Directional gesture: pointing to target", zh: "方向性手势：指向目标" }, size: "half" },
      {
        type: "text",
        en: "State gestures confirm what the system currently understands — that a target has been selected, or that it's been reached:",
        zh: "状态性手势用于确认系统当前的理解状态——目标已被选定，或已经到达目标："
      },
      { type: "image", src: hriTargetSelected,caption: { en: "State gesture: target selected", zh: "状态性手势：目标已选定" }, size: "half" },
      { type: "image", src: hriTargetReached, caption: { en: "State gesture: target reached", zh: "状态性手势：目标已到达" }, size: "half" },
      {
        type: "text",
        en: "Behavioral gestures make the intended action itself unmistakable before it happens — a distinct wipe motion versus a pickup motion:",
        zh: "行为性手势让即将执行的具体动作在发生前就一目了然——擦拭动作与拾取动作有着明显不同的姿态："
      },
      { type: "image", src: hriWipe,caption: { en: "Behavioral gesture: wipe", zh: "行为性手势：擦拭" }, size: "half" },
      { type: "image", src: hriPickUp, caption: { en: "Behavioral gesture: pickup", zh: "行为性手势：拾取" }, size: "half" },
      {
        type: "text",
        en: "Getting these to actually read clearly took iteration — an early version of the directional gesture was ambiguous, so I refined it into a clearer motion. I also built an interruption-control gesture so the arm visibly acknowledges a stop command rather than just halting silently:",
        zh: "要让这些手势真正清晰易懂，经过了不少迭代——早期版本的方向手势含义比较模糊，我后来把它优化成了更清晰的动作。我还设计了一个中断控制手势，让机械臂在收到停止指令时会有明确的响应动作，而不是悄无声息地直接停下："
      },
      { type: "image", src: hriPauseHeard, caption: { en: "Behavioral gesture: pause heard", zh: "行为性手势：已听到暂停指令" }, size: "half" },
      {
        type: "text",
        en: "On the architecture side, I built strict gating logic so the arm only moves when it's genuinely safe to (target selected, arm armed, joint states available), an emergency-stop mechanism with proper pause/abort/continue behavior, and validated communication across a VM and remote server setup via CycloneDDS — plus a demo mode and real-robot mode sharing identical gesture logic, so testing never diverged from real hardware behavior.",
        zh: "在架构层面，我实现了严格的门控逻辑，确保机械臂只有在真正安全的条件下才会移动（目标已选定、机械臂已激活、关节状态数据可用），搭建了带有暂停/中止/继续行为的紧急停止机制，并通过 CycloneDDS 验证了跨虚拟机与远程服务器环境下的通信可靠性——同时提供了共享同一套手势逻辑的演示模式与真实机器人模式，确保测试环境与真实硬件行为始终一致。"
      },
      {
        type: "text",
        en: "The core lesson: safety in human-robot collaboration isn't just about stopping a robot when something goes wrong — it's about making its intentions legible enough that things rarely go wrong in the first place.",
        zh: "这个项目最核心的收获是：人机协作中的安全性，不仅仅在于出问题时能及时停止机器人，更在于让机器人的意图足够清晰易懂，从一开始就尽量减少出问题的可能。"
      }
    ]
  },
  {
    id: "coco",
    coverImage: cocoCover,
    tags: ["Product Design", "Prototyping", "Arduino"],
    title: {
      en: "CoCo — The Communication Companion",
      zh: "CoCo — 传递爱的陪伴玩偶"
    },
    githubUrls: [
      { label: "View on Blog", url: "https://blockpraktikumexperiencedesign.wordpress.com/2025/03/18/coco-the-communication-companion/" }
    ],
    content: [
      {
        type: "text",
        en: "Parents and children share a bond built on closeness — but there are moments when a parent can't be right there: still commuting home when it's already bedtime, or a child feeling homesick during a sleepover at grandma's. As part of a four-person team, I helped design CoCo, a connected cuddle toy that lets parents send their voice — a lullaby, a bedtime story, a few encouraging words — straight into their child's hands, no screen involved.",
        zh: "父母和孩子之间的亲密感，常常会在一些特定时刻受到考验：还在下班路上赶回家，孩子却已经到了睡觉时间；或者孩子在爷爷奶奶家过夜，突然开始想家。作为四人小组的一员，我参与设计了 CoCo——一个能让父母把自己的声音（一首摇篮曲、一个睡前故事、几句鼓励的话）直接传递到孩子手中的联网玩偶，全程不需要任何屏幕。"
      },
      {
        type: "text",
        en: "The concept has two connected parts: a small keychain teddy for the parent, with a heart-shaped button that records a personal voice message and sends it with one press — and a cuddle teddy for the child, whose LED heart glows softly when a new message arrives. A hug activates playback, turning a simple embrace into the moment the message plays.",
        zh: "整个概念由两个相连的部分组成：一个给父母随身携带的钥匙扣小熊，胸前有一个心形按钮，按一下就能录制并发送一条语音消息；以及给孩子的大玩偶熊，收到新消息时，它的 LED 心形灯会缓缓亮起。孩子只需给它一个拥抱，就会触发语音播放，让拥抱本身成为收到消息的那个瞬间。"
      },
      { type: "image", src: cocoKeychain, caption: { en: "From sketch to working prototype: the parent's keychain teddy", zh: "从草图到实体原型：父母的钥匙扣小熊" } },
      { type: "image", src: cocoTeddy, caption: { en: "From sketch to plush: the child's cuddle teddy", zh: "从草图到毛绒玩偶：孩子的大玩偶熊" } },
      {
        type: "text",
        en: "I led the product concept and owned the physical prototype: building and programming the Arduino-based LED heart circuit, wiring it into the plush toy, and 3D-printing a heart-shaped enclosure to house the electronics cleanly inside. Getting a functioning LED circuit to sit invisibly inside a soft, huggable toy — without exposed wires poking through fabric — took a few iterations of the enclosure design before it felt safe and natural for a child to hold.",
        zh: "我主导了产品概念设计，并负责了物理原型的搭建：基于 Arduino 搭建并编程了 LED 心形灯电路，将其接入毛绒玩偶内部，并 3D 打印了一个心形外壳来整洁地容纳电子元件。要让一个能正常工作的 LED 电路，不露痕迹地藏进一个柔软、适合拥抱的玩偶里——不能有电线戳出布料——外壳设计经过了几轮迭代，才最终达到让孩子安全自然地抱在怀里的效果。"
      },
      { type: "image", src: cocoCover1 },
      { type: "image", src: cocoCover2 },
      {
        type: "embed",
        src: "https://www.youtube.com/embed/OiywJXhyFyo"
      },
      {
        type: "text",
        en: "We mapped out real use cases — a parent still commuting home, a child's first day at kindergarten, a sleepover at relatives' — and storyboarded the emotional arc from sending a message to the child falling asleep comforted. It was a good reminder that a product concept only really proves itself once you've built the thing and it works in someone's hands, not just on paper.",
        zh: "我们梳理了几个真实使用场景——父母还在下班路上、孩子第一天上幼儿园、在亲戚家过夜——并绘制了从发送消息到孩子安心入睡的完整情感故事板。这个项目也提醒了我：一个产品概念只有真正做出来、放进使用者手里能正常运作，才算是真正被验证过，而不只是停留在纸面上。"
      }
    ]
  },
  {
    id: "realistic-water-shader",
    coverImage: waterCover,
    tags: ["Unreal Engine", "Shader/Material", "Computer Graphics"],
    title: {
      en: "Realistic Water Shader",
      zh: "写实水体材质开发"
    },
    githubUrl: "https://github.com/majagou/RealisticWaterBuildUp",
    content: [
      {
        type: "text",
        en: "Water is one of the hardest things to fake convincingly in real-time graphics — it needs to move, catch light, distort what's behind it, and behave differently above and below the surface, all without tanking performance. This solo project builds a full real-time water system in Unreal Engine 5.4, combining procedural waves, depth-based shading, foam, caustics, and an underwater camera transition into one working material.",
        zh: "水体是实时图形渲染中最难做到以假乱真的效果之一——它需要有动态、能反射光线、能扭曲背后的景物，并且在水上和水下要呈现完全不同的视觉效果，同时还不能拖慢渲染性能。这是一个独立完成的项目，在 Unreal Engine 5.4 中搭建了一套完整的实时水体系统，把程序化波浪、基于深度的着色、泡沫、水面焦散光斑，以及水上水下的镜头过渡效果，全部整合进一套可用的材质系统。"
      },
      { type: "image", src: waterHero, caption: { en: "Final water shader in a small test scene", zh: "小场景中的最终水体材质效果" } },
      {
        type: "text",
        en: "The wave motion started with Gerstner waves for large-scale surface movement. But an early version of the wave setup didn't deform convincingly — the mesh simply didn't have enough resolution for the displacement to read smoothly.",
        zh: "波浪运动最初基于 Gerstner 波形算法实现大尺度的水面起伏。但早期版本的波浪效果并不理想——网格精度不够，导致位移形变无法平滑呈现。"
      },
      { type: "image", src: waterInitialWaveSetup, caption: { en: "Initial wave setup — visible mesh limitations under displacement", zh: "早期波浪设置 — 网格精度不足导致的形变问题" } },
      {
        type: "text",
        en: "I traced the issue to insufficient mesh density and rebuilt the base mesh at higher resolution in 3ds Max, then layered in normal maps for fine ripple detail and refined the surface texture — the difference in how convincingly light and motion read across the surface was immediate.",
        zh: "我追查发现问题出在网格密度不足，于是在 3ds Max 中重新制作了更高精度的基础网格，并叠加法线贴图来呈现细小的涟漪细节，进一步优化了表面纹理——水面上光影与动态的可信度立刻有了明显提升。"
      },
      { type: "image", src: waterEnhancedTexturalEffect, caption: { en: "Enhanced surface texture and ripple detail", zh: "优化后的表面纹理与涟漪细节" } },
      {
        type: "text",
        en: "Caustics — the shifting light patterns water casts on surfaces below it — went through the same kind of iteration. The first version was flat and static; refining the animation and light response made it feel like real projected light rather than a painted-on texture.",
        zh: "焦散光斑效果（水面在水下物体表面投射出的动态光斑）也经历了类似的迭代过程。最初的版本比较平淡、缺乏动态感；通过优化动画节奏和光照响应，最终呈现出更接近真实投影光线的效果，而不是一张贴上去的静态纹理。"
      },
      { type: "image", src: waterInitialCaustics, caption: { en: "Initial caustics — flat, static light pattern", zh: "早期焦散效果 — 光斑较为平淡、缺乏动态" } },
      { type: "image", src: waterEnhancedCaustics, caption: { en: "Enhanced caustics — dynamic, more convincing light projection", zh: "优化后的焦散效果 — 动态感更强、光影更真实" } },
      {
        type: "text",
        en: "Foam needed to appear automatically wherever geometry intersected the water surface, without manual placement — a procedural mask driven by depth and intersection detection handles this in real time.",
        zh: "泡沫效果需要在任何物体与水面相交的地方自动生成，而不需要手动摆放——通过基于深度与相交检测驱动的程序化遮罩，实现了实时生成效果。"
      },
      { type: "image", src: waterFoamSimulationEffect, caption: { en: "Procedural foam masking around intersecting geometry", zh: "基于相交检测的程序化泡沫效果" } },
      {
        type: "text",
        en: "Getting the underwater effect right was its own debugging exercise. I built a stencil mask to separate above-water and underwater rendering, but the water surface kept darkening incorrectly. After digging into the render settings, I found two culprits — Render in Depth Pass and Affect Dynamic Indirect Lighting — that were interfering with the mask. Turning both off resolved it, and I added a waterline split-view effect for smooth camera transitions between the two states.",
        zh: "水下效果的调试也花了一番功夫。我搭建了一个 Stencil 遮罩来区分水上与水下的渲染，但水面却一直出现不正常的变暗问题。深入排查渲染设置后，发现是两个选项在干扰遮罩效果——Render in Depth Pass 和 Affect Dynamic Indirect Lighting，关闭这两项后问题解决。此外还加入了水位线分屏效果，让镜头在水上水下两种状态之间可以平滑过渡。"
      },
      { type: "image", src: waterUnderwaterEffect, caption: { en: "Underwater post-process haze effect", zh: "水下后处理雾化效果" } },
      { type: "image", src: waterlineEffect, caption: { en: "Waterline split-view transition", zh: "水位线分屏过渡效果" } },
      {
        type: "text",
        en: "This project was really an exercise in the kind of work Technical Artists do every day: bridging an artistic goal (water that just looks and feels right) with hard engine constraints (mesh resolution, render passes, shader cost) — and being systematic enough about debugging to actually find the real cause instead of guessing.",
        zh: "这个项目其实很好地体现了 Technical Artist 日常的工作方式：在艺术目标（让水看起来、感觉起来是对的）和引擎的实际限制（网格精度、渲染通道、材质开销）之间找到平衡——并且在调试问题时保持足够系统化，真正定位到根本原因，而不是靠猜。"
      }
    ]
  },
  {
    id: "safety-buddy",
    coverImage: safetyBuddyCover,
    tags: ["UX Research", "Accessibility", "Product Design"],
    title: {
      en: "Safety Buddy — Anti-Fraud App for Seniors",
      zh: "Safety Buddy — 老年人防诈骗应用"
    },
    content: [
      {
        type: "text",
        en: "The design challenge was open-ended: create a learning experience for seniors navigating a digital world full of fast-moving change. Rather than guessing at the problem, our team went straight to the source — direct interviews with seniors revealed their single biggest pain point was spam and scam attempts, and the anxiety that came with not knowing how to spot them.",
        zh: "这是一个开放式的设计课题：为在快速变化的数字世界中摸索的老年人，设计一段学习体验。我们没有直接猜测问题所在，而是直接找到用户本人——通过与老年人的直接访谈，发现他们最大的困扰是垃圾邮件和诈骗信息，以及不知道如何识别这些骗局所带来的焦虑感。"
      },
      { type: "image", src: safetyBuddyRobotHand, caption: { en: "Iteration 1: robotic hand prototype for gesture-based, punctual help", zh: "第一次迭代：手势交互式机械手原型，提供即时帮助" } },
      {
        type: "text",
        en: "Our first direction was a physical solution: a gesture-controlled robotic hand offering direct, on-demand help. I built and tested this prototype myself. After running it past users, the team concluded a physical device wasn't the right fit for how seniors actually wanted support in the moment, and we pivoted toward a software-based approach instead — one that could reach people through devices they already used daily.",
        zh: "最初的方向是一个物理解决方案：手势控制的机械手，提供即时的按需帮助。我亲自搭建并测试了这个原型。在用户测试之后，团队判断物理设备并不符合老年人实际期望获得帮助的方式，于是转向了基于软件的方案——通过他们日常已经在使用的设备来触达用户。"
      },
      { type: "image", src: safetyBuddyAppWireframe, caption: { en: "Iteration 2: early app wireframes — high contrast, minimalistic, game-based learning", zh: "第二次迭代：早期 App 线框图 — 高对比度、极简风格、游戏化学习" } },
      {
        type: "text",
        en: "The app direction centered on high contrast, minimalism, and game-based learning — accessible by default, not as an afterthought. I focused on the gamification layer, designing word-based mini-games (a word-search puzzle and a fill-in-the-blank crossword) that teach key terms like phishing, spam, and scam through play rather than a wall of text.",
        zh: "App 方向的核心是高对比度、极简设计与游戏化学习——无障碍设计从一开始就是核心考量，而不是事后补充。我主要负责了游戏化部分的设计，设计了以文字为核心的小游戏（字谜搜索与填字游戏），通过互动的方式教会用户识别 phishing、spam、scam 等关键术语，而不是让用户面对一大段文字说明。"
      },
      { type: "image", src: safetyBuddyWordCrosser, caption: { en: "Word-search game teaching key security terms", zh: "教授安全相关术语的字谜搜索游戏" } },
      { type: "image", src: safetyBuddyFillWords, caption: { en: "Fill-in-the-blank crossword game", zh: "填字游戏" } },
      {
        type: "text",
        en: "The final concept combined two things in one app: a scam blocker that detects and flags spam or scam content in emails and text messages, and a learning platform that walks users through why something was flagged. A mascot named Buddy accompanies users through the whole experience, giving a sense of guidance and protection rather than leaving people to figure it out alone.",
        zh: "最终概念将两个功能整合进一个 App：一个能识别并标记邮件与短信中诈骗内容的拦截功能，以及一个解释“为什么这条信息被标记”的学习平台。一个名叫 Buddy 的吉祥物贯穿整个使用体验，给用户一种被陪伴、被保护的感觉，而不是让他们独自摸索。"
      },
      { type: "image", src: safetyBuddyMascot, caption: { en: "Buddy — the mascot guiding users through the app", zh: "Buddy — 陪伴用户使用 App 的吉祥物" } },
      {
        type: "text",
        en: "Accessibility was designed in from the ground up: an ivory background with dark gray text for high contrast, a color palette checked against red-green color blindness, adjustable text size and volume, a read-aloud function for every explanation, and an onboarding video to walk first-time users through the app before they're on their own.",
        zh: "无障碍设计从一开始就融入了整体方案：象牙白背景搭配深灰色文字以保证高对比度，配色方案经过红绿色盲适配验证，可调节的文字大小与音量，每个说明文本都配有朗读功能，以及一个引导视频，帮助新用户在独立使用前先熟悉整个 App。"
      },
      { type: "image", src: safetyBuddyAccessibility, caption: { en: "Accessibility settings and onboarding flow", zh: "无障碍设置与新手引导流程" } },
      {
        type: "text",
        en: "The scam blocker flags suspicious emails directly, explaining in plain language why a message looks like a scam and what to do next. The learning app walks users through unfamiliar terms with Buddy's help, then tests that understanding through a spam-email simulation where users practice spotting red flags themselves.",
        zh: "拦截功能会直接标记可疑邮件，用通俗易懂的语言解释这条信息为什么像是诈骗，以及接下来应该怎么做。学习模块则由 Buddy 陪伴用户逐一解释陌生术语，再通过一个垃圾邮件模拟练习，让用户自己动手识别可疑信号，检验学习成果。"
      },
      { type: "image", src: safetyBuddyScamBlocker, caption: { en: "Scam blocker prototype flagging a suspicious email", zh: "拦截功能原型 — 标记可疑邮件" }, size: "half" },
      {
        type: "text",
        en: "I also ran user testing throughout, going back to the same senior interviewees to validate whether the app direction actually addressed the anxiety they'd described early on — and refining the design based on what came back. The whole process was a reminder that the first idea, however well-intentioned, isn't always the right one — being willing to test, listen, and pivot mattered more than getting it right on the first try.",
        zh: "我还全程参与了用户测试，回访了最初访谈过的老年用户，验证 App 方向是否真正缓解了他们最初提到的那种焦虑感，并根据反馈不断优化设计。整个过程也让我深刻体会到：第一个想法，哪怕出发点再好，也不一定是最终答案——愿意去测试、倾听、并及时调整方向，比第一次就做对更重要。"
      }
    ]
  }
]
