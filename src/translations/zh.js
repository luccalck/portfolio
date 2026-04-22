const zh = {
  nav: { home: "主页", about: "关于我", services: "服务项目", projects: "开发项目", contact: "联系方式" },
  home: {
    greeting: "你好，我是 Lucca",
    roles: ["计算机科学系学生", "全栈开发人员", "人工智能与自动化爱好者"],
    bio: "专注于 Python 和 AI 驱动解决方案的全栈开发人员，目前正在攻读计算机科学和系统分析与开发学位。",
    resume: "个人简历",
  },
  about: {
    title: "关于我", subTitle: "简短介绍",
    bio: "我是一名全栈开发人员，也是一名攻读系统分析与开发的计算机科学学生。我利用 React、Node.js 以及 Python (FastAPI) 等现代技术栈构建以用户为中心的 Web 应用程序。我对人工智能和流程自动化充满热情，乐于将复杂的问题转化为简洁、高效且可维护的解决方案——从最初的概念到最终的产品上线。",
    techTitle: "技术与工具",
    techDesc: "我从事全栈开发——将可靠的后端技术与现代前端框架相结合，交付高性能、可扩展的应用程序。",
  },
  services: {
    title: "服务项目", subTitle: "我提供的服务",
    items: [
      { name: "Web 开发", desc: "构建响应式、高性能的 Web 应用程序，从前端界面到完全集成的全栈解决方案——专注于简洁的架构和用户体验。" },
      { name: "后端开发", desc: "使用 Python (FastAPI) 和 Node.js 设计并实现 RESTful API 和服务器端逻辑——重点关注可扩展性、安全性和可维护的代码。" },
      { name: "人工智能与自动化", desc: "将人工智能功能和流程自动化集成到实际应用中——从智能数据管道到由大语言模型（LLM）驱动的工具，旨在简化工作流程并减少手动工作。" },
    ],
  },
  projects: {
    title: "开发项目", subTitle: "我的作品集",
    viewAll: "在 GitHub 上查看全部", viewProject: "在 GitHub 上查看",
    items: [
      { name: "E-Motors", description: "一个展示按类型（运动、踏板车和城市）分类的电动汽车 Web 平台。专注于简洁的 UI 设计和直观的浏览体验。" },
      { name: "Vyzor — 管理平台", description: "一个用于集成业务管理的 SaaS 平台——具有 KPI 仪表板、CRM/ERP 集成以及针对数据密集型工作流的 AI 驱动流程自动化功能。" },
    ],
  },
  certificates: {
    title: "证书", subTitle: "我的资质",
    viewCert: "查看证书", seeMore: "在 LinkedIn 上查看更多",
    items: [
      { name: "AWS Academy 毕业生 — 云计算基础", issuing: "AWS", description: "AWS 云概念、安全、架构和核心服务的基础培训。", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python 数据分析：第一步", issuing: "Alura", description: "关于应用于数据分析和操作的 Python 基础内容的全面入门课程。", link: "/certs/python_dados_alura.pdf" }
    ],
  },
  contact: {
    headline: "有项目想聊聊吗？",
    sub: "让我们一起创造伟大的作品。欢迎随时联系。",
    emailLabel: "联系邮箱",
    socialLabel: "社交媒体",
    footer: "保留所有权利。",
  },
};
export default zh;
