const pt = {
  nav: { home: "Início", about: "Sobre", services: "Competências", projects: "Projetos", contact: "Contato" },
  home: {
    greeting: "Olá, sou o Lucca",
    roles: ["Estudante de Engenharia de Software", "Desenvolvedor Backend Python", "Engenheiro de APIs & Banco de Dados"],
    bio: "Desenvolvedor Backend focado em Python (FastAPI, PostgreSQL e Docker), cursando Ciência da Computação e Análise e Desenvolvimento de Sistemas.",
    resume: "Currículo",
  },
  about: {
    title: "Sobre Mim", subTitle: "Trajetória & Foco Técnico",
    bio: "Sou estudante universitário cursando Ciência da Computação e Análise e Desenvolvimento de Sistemas em paralelo, especializado em Engenharia Backend em Python. Construo serviços RESTful de alto desempenho utilizando Python, FastAPI, SQLAlchemy 2.0 e PostgreSQL conteinerizados em Docker. Focado em entregas de padrão enterprise, arquitetura limpa e pipelines de migração automatizados.",
    techTitle: "Tecnologias & Ferramentas",
    techDesc: "Especializado na stack de Backend em Python (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic e Pytest), mantendo suporte a tecnologias web modernas para integração fullstack.",
  },
  services: {
    title: "Competências Técnicas", subTitle: "Capacidades de Engenharia",
    items: [
      { name: "Engenharia Backend", desc: "Projeto e implementação de APIs RESTful escaláveis em Python (FastAPI), SQLAlchemy 2.0 e PostgreSQL. Foco em arquitetura limpa, segurança JWT e código de alta manutenibilidade." },
      { name: "Arquitetura & Modelagem de Dados", desc: "Estruturação de schemas relacionais em PostgreSQL, otimização de queries SQL e automação de migrações de banco de dados com Alembic." },
      { name: "Conteinerização & DevOps", desc: "Conteinerização de microserviços com Docker e Docker Compose, automação de testes com Pytest e integração contínua via GitHub Actions." },
    ],
  },
  projects: {
    title: "Projetos", subTitle: "O Que Construí",
    viewAll: "Ver todos no GitHub", viewProject: "Ver no GitHub",
    items: [
      { name: "Vyzor", description: "Motor backend e plataforma SaaS multi-tenant para gestão de dados empresariais — desenvolvido com FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis e Docker." },
      { name: "ScopeMaster", description: "Plataforma colaborativa para gestão de requisitos de software (Projeto Integrador ADS) — desenvolvida com React 18, TypeScript, Supabase RLS e TailwindCSS." },
    ],
  },
  certificates: {
    title: "Certificados", subTitle: "Minhas Credenciais",
    viewCert: "Ver Certificado", seeMore: "Ver mais no LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Treinamento fundamental abordando conceitos da Nuvem AWS, segurança, arquitetura e serviços principais.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python para Dados: Primeiros Passos", issuing: "Alura", description: "Curso abrangente sobre os fundamentos e lógica em Python aplicados à análise e manipulação de dados.", link: "/certs/python_dados_alura.pdf" },
      { name: "Git e GitHub: Estratégias de Controle de Versão", issuing: "Alura / SENAI", description: "Capacitação técnica em fluxo de branches, convenções de commits, resolução de conflitos e automação.", link: "https://www.linkedin.com/in/luccacastilho1/" }
    ],
  },
  contact: {
    headline: "Tem um projeto em mente?",
    sub: "Vamos construir algo incrível juntos. Entre em contato.",
    emailLabel: "Me encontre em",
    socialLabel: "Redes sociais",
    footer: "Todos os direitos reservados.",
  },
};
export default pt;
