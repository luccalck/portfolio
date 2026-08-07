const en = {
  nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
  home: {
    greeting: "Hi, I'm Lucca",
    roles: ["Software Engineering Student", "Python Backend Developer", "API & Database Engineer"],
    bio: "Backend Developer focused on Python (FastAPI, PostgreSQL, and Docker), pursuing Computer Science and Systems Analysis & Development degrees.",
    resume: "Curriculum Vitae",
  },
  about: {
    title: "About Me", subTitle: "A bit about me",
    bio: "I am an undergraduate student pursuing Computer Science and Systems Analysis & Development in parallel, specializing in Python Backend Engineering. I build high-performance RESTful APIs using Python, FastAPI, SQLAlchemy 2.0, and PostgreSQL containerized with Docker. Focused on enterprise-grade delivery, clean architecture, and automated migration pipelines.",
    techTitle: "Technologies & Tools",
    techDesc: "Specialized in the Python Backend stack (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic, and Pytest), while maintaining support for modern web technologies for fullstack integration.",
  },
  services: {
    title: "Services", subTitle: "What I Provide",
    items: [
      { name: "Backend Engineering", desc: "Designing and deploying scalable RESTful APIs using Python (FastAPI), SQLAlchemy 2.0, and PostgreSQL. Focused on clean architecture, JWT security, and maintainable codebases." },
      { name: "Database Architecture & Modeling", desc: "Structuring relational database schemas in PostgreSQL, writing optimized SQL queries, and implementing automated database migrations with Alembic." },
      { name: "Containerization & DevOps", desc: "Containerizing microservices with Docker & Docker Compose, automating API test suites with Pytest, and configuring GitHub Actions CI/CD pipelines." },
    ],
  },
  projects: {
    title: "Projects", subTitle: "What I've Built",
    viewAll: "View all on GitHub", viewProject: "View on GitHub",
    items: [
      { name: "Vyzor", description: "Multi-tenant backend engine and SaaS data platform — built with FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis, and Docker." },
      { name: "ScopeMaster", description: "Collaborative software requirements management platform (Capstone Project) — built with React 18, TypeScript, Supabase RLS, and TailwindCSS." },
    ],
  },
  certificates: {
    title: "Certificates", subTitle: "My Credentials",
    viewCert: "View Certificate", seeMore: "See more on LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Foundational training in AWS Cloud concepts, security, architecture, and core services.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python for Data: First Steps", issuing: "Alura", description: "Comprehensive introductory course on Python fundamentals applied to data analysis and manipulation.", link: "/certs/python_dados_alura.pdf" }
    ],
  },
  contact: {
    headline: "Have a project in mind?",
    sub: "Let's build something great together. Feel free to reach out.",
    emailLabel: "Reach me at",
    socialLabel: "Find me on",
    footer: "All rights reserved.",
  },
};
export default en;
