const zh = {
  nav: { home: "首页", about: "关于", services: "能力", projects: "项目", contact: "联系" },
  home: {
    greeting: "你好，我是 Lucca",
    roles: ["软件工程专业学生", "Python 后端开发者", "API 与数据库工程师"],
    bio: "专注于 Python (FastAPI, PostgreSQL 和 Docker) 的后端开发者，攻读计算机科学与系统分析与开发学位。",
    resume: "个人简历",
  },
  about: {
    title: "关于我", subTitle: "背景与技术焦点",
    bio: "我是一名攻读计算机科学与系统分析与开发学位的软件工程专业学生，专注于 Python 后端工程。我使用 Python, FastAPI, SQLAlchemy 2.0 和 PostgreSQL 构建高性能 RESTful API，并使用 Docker 进行容器化部署。我专注于企业级架构、整洁代码与自动化数据库迁移。",
    techTitle: "技术与工具",
    techDesc: "专注于 Python 后端技术栈 (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic, Pytest)，同时掌握现代前端技术以实现全栈集成。",
  },
  services: {
    title: "技术能力", subTitle: "工程能力",
    items: [
      { name: "后端工程开发", desc: "使用 Python (FastAPI)、SQLAlchemy 2.0 和 PostgreSQL 设计并部署可扩展的 RESTful API，注重清晰架构与 JWT 安全。" },
      { name: "数据库架构与建模", desc: "在 PostgreSQL 中设计关系数据库模式，优化 SQL 查询，并使用 Alembic 实现自动化数据库迁移。" },
      { name: "容器化与 DevOps", desc: "使用 Docker 与 Docker Compose 容器化微服务，使用 Pytest 实现自动化 API 测试，并通过 GitHub Actions 配置 CI/CD 流水线。" },
    ],
  },
  projects: {
    title: "项目", subTitle: "我构建的作品",
    viewAll: "在 GitHub 上查看全部", viewProject: "在 GitHub 上查看",
    items: [
      { name: "Vyzor", description: "多租户后端引擎与 SaaS 数据平台 — 基于 FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis 和 Docker 构建。" },
      { name: "ScopeMaster", description: "协同软件需求管理平台 (毕业设计) — 基于 React 18, TypeScript, Supabase RLS 和 TailwindCSS 构建。" },
    ],
  },
  certificates: {
    title: "证书", subTitle: "我的资质认证",
    viewCert: "查看证书", seeMore: "在 LinkedIn 查看更多",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "AWS 云计算概念、安全、架构和核心服务的基础培训。", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python 数据分析入门", issuing: "Alura", description: "应用于数据分析与处理的 Python 基础课程。", link: "/certs/python_dados_alura.pdf" },
      { name: "Git 与 GitHub: 版本控制策略", issuing: "Alura / SENAI", description: "分支工作流、提交规范、冲突解决与 CI 集成技术培训。", link: "https://www.linkedin.com/in/luccacastilho1/" }
    ],
  },
  contact: {
    headline: "有项目想法？",
    sub: "让我们一起构建伟大的产品。欢迎随时联系我。",
    emailLabel: "联系邮箱",
    socialLabel: "社交媒体",
    footer: "保留所有权利。",
  },
};
export default zh;
