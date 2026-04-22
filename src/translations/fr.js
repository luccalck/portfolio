const fr = {
  nav: { home: "Accueil", about: "À propos", services: "Services", projects: "Projets", contact: "Contact" },
  home: {
    greeting: "Salut, je suis Lucca",
    roles: ["Étudiant en Informatique", "Développeur Full Stack", "Passionné d'IA et d'Automatisation"],
    bio: "Développeur Full Stack spécialisé en Python et solutions basées sur l'IA, actuellement en formation en Informatique et Analyse & Développement de Systèmes.",
    resume: "Curriculum Vitae",
  },
  about: {
    title: "À propos de moi", subTitle: "Un peu sur moi",
    bio: "Je suis développeur Full Stack et étudiant en informatique avec une formation en analyse et développement de systèmes. Je conçois des applications web centrées sur l'utilisateur en utilisant des technologies modernes comme React, Node.js et Python avec FastAPI. Passionné par l'IA et l'automatisation des processus, j'aime transformer des problèmes complexes en solutions propres, efficaces et maintenables — du concept initial jusqu'à la production.",
    techTitle: "Technologies et Outils",
    techDesc: "Je travaille sur l'ensemble de la pile — en combinant des technologies back-end fiables avec des frameworks front-end modernes pour livrer des applications performantes et évolutives.",
  },
  services: {
    title: "Services", subTitle: "Ce que je propose",
    items: [
      { name: "Développement Web", desc: "Création d'applications web réactives et performantes, des interfaces front-end aux solutions full-stack entièrement intégrées — avec un accent sur l'architecture propre et l'expérience utilisateur." },
      { name: "Développement Backend", desc: "Conception et implémentation d'API RESTful et de logique serveur via Python (FastAPI) et Node.js — en mettant l'accent sur l'évolutivité, la sécurité et un code maintenable." },
      { name: "IA et Automatisation", desc: "Intégration de fonctionnalités basées sur l'IA et automatisation des processus dans des applications réelles — des pipelines de données intelligents aux outils propulsés par LLM pour optimiser les flux de travail." },
    ],
  },
  projects: {
    title: "Projets", subTitle: "Ce que j'ai réalisé",
    viewAll: "Voir tout sur GitHub", viewProject: "Voir sur GitHub",
    items: [
      { name: "E-Motors", description: "Une plateforme web présentant des véhicules électriques classés par type (sport, scooter, urbain). L'accent est mis sur un design épuré et une expérience de navigation intuitive." },
      { name: "Vyzor — Plateforme de Gestion", description: "Une plateforme SaaS pour la gestion intégrée des entreprises — comprenant des tableaux de bord KPI, des intégrations CRM/ERP et une automatisation des processus par l'IA pour les flux de données complexes." },
    ],
  },
  certificates: {
    title: "Certificats", subTitle: "Mes Diplômes",
    viewCert: "Voir le certificat", seeMore: "Voir plus sur LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Formation de base sur les concepts du Cloud AWS, la sécurité, l'architecture et les services fondamentaux.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python pour la Data : Premiers pas", issuing: "Alura", description: "Cours d'Scalability d'introduction complet sur les fondamentaux de Python appliqués à l'analyse et à la manipulation de données.", link: "/certs/python_dados_alura.pdf" }
    ],
  },
  contact: {
    headline: "Vous avez un projet en tête ?",
    sub: "Bâtissons quelque chose de grand ensemble. N'hésitez pas à me contacter.",
    emailLabel: "Me contacter via",
    socialLabel: "Me trouver sur",
    footer: "Tous droits réservés.",
  },
};
export default fr;
