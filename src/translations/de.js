const de = {
  nav: { home: "Startseite", about: "Über mich", services: "Kompetenzen", projects: "Projekte", contact: "Kontakt" },
  home: {
    greeting: "Hi, ich bin Lucca",
    roles: ["Software Engineering Student", "Python Backend Entwickler", "API & Datenbank Ingenieur"],
    bio: "Backend-Entwickler mit Fokus auf Python (FastAPI, PostgreSQL und Docker). Ich studiere derzeit Informatik und Systemanalyse & Entwicklung.",
    resume: "Lebenslauf",
  },
  about: {
    title: "Über mich", subTitle: "Hintergrund & Technischer Fokus",
    bio: "Ich bin Informatikstudent mit Spezialisierung auf Python Backend-Entwicklung. Ich erstelle hochleistungsfähige RESTful APIs mit Python, FastAPI, SQLAlchemy 2.0 und PostgreSQL, die in Docker containerisiert sind. Mein Fokus liegt auf Unternehmensarchitektur, sauberem Code und automatisierten Migrations-Pipelines.",
    techTitle: "Technologien & Tools",
    techDesc: "Spezialisiert auf den Python-Backend-Stack (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic und Pytest) mit Unterstützung für moderne Webtechnologien.",
  },
  services: {
    title: "Technische Kompetenzen", subTitle: "Ingenieurleistungen",
    items: [
      { name: "Backend Engineering", desc: "Design und Implementierung skalierbarer RESTful APIs mit Python (FastAPI), SQLAlchemy 2.0 und PostgreSQL. Fokus auf sauberer Architektur und JWT-Sicherheit." },
      { name: "Datenbankarchitektur & Modellierung", desc: "Strukturierung relationaler Datenbankschemata in PostgreSQL, Optimierung von SQL-Abfragen und Automatisierung von Migrationen mit Alembic." },
      { name: "Containerisierung & DevOps", desc: "Containerisierung von Microservices mit Docker & Docker Compose, Testautomatisierung mit Pytest und CI/CD-Pipelines via GitHub Actions." },
    ],
  },
  projects: {
    title: "Projekte", subTitle: "Was ich gebaut habe",
    viewAll: "Alle auf GitHub ansehen", viewProject: "Auf GitHub ansehen",
    items: [
      { name: "Vyzor", description: "Multi-Tenant-Backend-Engine und SaaS-Datenplattform – entwickelt mit FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis und Docker." },
      { name: "ScopeMaster", description: "Kollaborative Plattform für Software-Anforderungsmanagement (Abschlussprojekt) – entwickelt mit React 18, TypeScript, Supabase RLS und TailwindCSS." },
    ],
  },
  certificates: {
    title: "Zertifikate", subTitle: "Meine Qualifikationen",
    viewCert: "Zertifikat ansehen", seeMore: "Mehr auf LinkedIn ansehen",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Grundlagentraining in AWS Cloud-Konzepten, Sicherheit, Architektur und Kernservices.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python für Daten: Erste Schritte", issuing: "Alura", description: "Umfassender Einführungskurs in die Grundlagen von Python für die Datenanalyse und -manipulation.", link: "/certs/python_dados_alura.pdf" },
      { name: "Git & GitHub: Versionskontrollstrategien", issuing: "Alura / SENAI", description: "Technische Qualifikation in Branching-Workflows, Commit-Konventionen und CI-Integration.", link: "https://www.linkedin.com/in/luccacastilho1/" }
    ],
  },
  contact: {
    headline: "Haben Sie ein Projekt im Kopf?",
    sub: "Lassen Sie uns gemeinsam etwas Großartiges aufbauen. Kontaktieren Sie mich gerne.",
    emailLabel: "Kontaktieren Sie mich unter",
    socialLabel: "Finden Sie mich auf",
    footer: "Alle Rechte vorbehalten.",
  },
};
export default de;
