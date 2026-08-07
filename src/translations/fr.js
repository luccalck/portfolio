const fr = {
  nav: { home: "Accueil", about: "À propos", services: "Services", projects: "Projets", contact: "Contact" },
  home: {
    greeting: "Bonjour, je suis Lucca",
    roles: ["Étudiant en Génie Logiciel", "Développeur Backend Python", "Ingénieur API & Bases de Données"],
    bio: "Développeur Backend spécialisé en Python (FastAPI, PostgreSQL et Docker), étudiant en Informatique et Analyse & Développement de Systèmes.",
    resume: "Curriculum Vitae",
  },
  about: {
    title: "À propos de moi", subTitle: "Un peu sur moi",
    bio: "Je suis étudiant en Informatique spécialisé dans le développement Backend Python. Je conçois des APIs RESTful haute performance en utilisant Python, FastAPI, SQLAlchemy 2.0 et PostgreSQL conteneurisés avec Docker. Je me concentre sur l'architecture propre, les tests automatisés et les pipelines de migration.",
    techTitle: "Technologies & Outils",
    techDesc: "Spécialisé dans la stack Backend Python (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic et Pytest) tout en prenant en charge les technologies web modernes.",
  },
  services: {
    title: "Services", subTitle: "Ce que je propose",
    items: [
      { name: "Ingénierie Backend", desc: "Conception et déploiement d'APIs RESTful évolutives avec Python (FastAPI), SQLAlchemy 2.0 et PostgreSQL. Focus sur l'architecture propre et la sécurité JWT." },
      { name: "Architecture & Modélisation de Données", desc: "Structuration de schémas relationnels dans PostgreSQL, optimisation de requêtes SQL et automatisation des migrations avec Alembic." },
      { name: "Conteneurisation & DevOps", desc: "Conteneurisation de microservices avec Docker & Docker Compose, automatisation des tests avec Pytest et pipelines CI/CD via GitHub Actions." },
    ],
  },
  projects: {
    title: "Projets", subTitle: "Ce que j'ai conçu",
    viewAll: "Voir tout sur GitHub", viewProject: "Voir sur GitHub",
    items: [
      { name: "Vyzor", description: "Moteur backend multi-tenant et plateforme SaaS de gestion de données — conçu avec FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis et Docker." },
      { name: "ScopeMaster", description: "Plateforme collaborative de gestion des exigences logicielles (Projet de Fin d'Études) — développée avec React 18, TypeScript, Supabase RLS et TailwindCSS." },
    ],
  },
  certificates: {
    title: "Certificats", subTitle: "Mes Certifications",
    viewCert: "Voir le certificat", seeMore: "Voir plus sur LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Formation fondamentale sur les concepts du Cloud AWS, la sécurité, l'architecture et les services clés.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python pour les Données: Premiers Pas", issuing: "Alura", description: "Cours d'introduction complet sur les principes fondamentaux de Python appliqués à l'analyse de données.", link: "/certs/python_dados_alura.pdf" }
    ],
  },
  contact: {
    headline: "Un projet en tête?",
    sub: "Construisons quelque chose de formidable ensemble. N'hésitez pas à me contacter.",
    emailLabel: "Me contacter",
    socialLabel: "Réseaux sociaux",
    footer: "Tous droits réservés.",
  },
};
export default fr;
