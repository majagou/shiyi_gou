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

import cover2 from '../assets/project-2-cover.jpg'
import cover3 from '../assets/project-3-cover.jpg'

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
    tags: ["VR/XR", "Unreal Engine", "Team Lead"],
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
  
]
