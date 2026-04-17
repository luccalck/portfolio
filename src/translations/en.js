const en = {
  nav: { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" },
  home: {
    greeting: "Hi, I'm Lucca",
    roles: ["Computer Science Student", "Full Stack Developer", "AI & Automation Enthusiast"],
    bio: "Full Stack Developer focused on Python and AI-driven solutions, currently pursuing degrees in Computer Science and Systems Analysis & Development.",
    resume: "Curriculum Vitae",
  },
  about: {
    title: "About Me", subTitle: "A bit about me",
    bio: "I'm a Full Stack Developer and Computer Science student with a background in Systems Analysis & Development. I build user-focused web applications using modern stacks including React, Node.js, and Python with FastAPI. Passionate about AI and process automation, I enjoy turning complex problems into clean, efficient, and maintainable solutions — from the initial concept all the way to production.",
    techTitle: "Technologies & Tools",
    techDesc: "I work across the full stack — combining reliable back-end technologies with modern front-end frameworks to deliver performant, scalable applications.",
  },
  services: {
    title: "Services", subTitle: "What I Provide",
    items: [
      { name: "Web Development", desc: "Building responsive, high-performance web applications from front-end interfaces to fully integrated full-stack solutions — with a focus on clean architecture and user experience." },
      { name: "Backend Development", desc: "Designing and implementing RESTful APIs and server-side logic using Python (FastAPI) and Node.js — with an emphasis on scalability, security, and maintainable code." },
      { name: "AI & Automation", desc: "Integrating AI-driven features and process automation into real-world applications — from intelligent data pipelines to LLM-powered tools that streamline workflows and reduce manual effort." },
    ],
  },
  projects: {
    title: "Projects", subTitle: "What I've Built",
    viewAll: "View all on GitHub", viewProject: "View on GitHub",
    items: [
      { name: "E-Motors", description: "A web platform showcasing electric vehicles categorized by type — sport, scooter, and urban. Focused on clean UI design and an intuitive browsing experience." },
      { name: "Vyzor — Management Platform", description: "A SaaS platform for integrated business management — featuring KPI dashboards, CRM/ERP integrations, and AI-driven process automation for data-heavy workflows." },
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
