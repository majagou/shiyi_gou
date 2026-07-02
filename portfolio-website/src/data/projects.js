import thermalVRCover from '../assets/ThermalVR/ThermalVRCover.png'
import thermalHotImg from '../assets/ThermalVR/ThermalHot.png'
import thermalColdImg from '../assets/ThermalVR/ThermalCold.png'
import thermalNeutralImg from '../assets/ThermalVR/ThermalNeutral.png'

import infoVisCover from '../assets/InfoVis/density.png'
import infoVisDensityImg from '../assets/InfoVis/timeline.png'
import infoVisClusterImg from '../assets/InfoVis/network.png'

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
    githubUrl: [
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
    id: '3',
    coverImage: cover3,
    tags: ['JavaScript', 'REST API', 'Chart.js'],
    title: {
      en: 'Weather Glass',
      zh: 'Weather Glass 天气面板',
    },
    content: [
      {
        type: 'text',
        en: 'A weather dashboard with a clean glassmorphism-inspired UI, built on a public weather API with live data visualization. Charts rendered with Chart.js update in real time as new readings arrive, and the layout adapts from a dense multi-city view down to a single focused card on mobile.',
        zh: '基于公共天气 API 打造的天气仪表盘，采用玻璃拟态风格界面，支持实时数据可视化。使用 Chart.js 渲染的图表会随着新数据到来实时更新，页面布局也能从桌面端的多城市密集视图自适应为移动端的单卡片聚焦视图。',
      },
      { type: 'image', src: cover3 },
      { type: 'video', src: '/media/project-3-demo.mp4' },
    ],
  },
]
