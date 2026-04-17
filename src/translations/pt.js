const pt = {
  nav: { home: "Início", about: "Sobre", services: "Serviços", projects: "Projetos", contact: "Contato" },
  home: {
    greeting: "Olá, sou o Lucca",
    roles: ["Estudante de Ciência da Computação", "Desenvolvedor Full Stack", "Entusiasta de IA & Automação"],
    bio: "Desenvolvedor Full Stack focado em Python e soluções com IA, cursando Ciência da Computação e Análise e Desenvolvimento de Sistemas.",
    resume: "Currículo",
  },
  about: {
    title: "Sobre Mim", subTitle: "Um pouco sobre mim",
    bio: "Sou um Desenvolvedor Full Stack e estudante de Ciência da Computação com experiência em Análise e Desenvolvimento de Sistemas. Construo aplicações web focadas no usuário usando stacks modernas como React, Node.js e Python com FastAPI. Apaixonado por IA e automação de processos, gosto de transformar problemas complexos em soluções limpas, eficientes e de fácil manutenção — do conceito inicial até a produção.",
    techTitle: "Tecnologias & Ferramentas",
    techDesc: "Trabalho em toda a stack — combinando tecnologias back-end confiáveis com frameworks front-end modernos para entregar aplicações performáticas e escaláveis.",
  },
  services: {
    title: "Serviços", subTitle: "O Que Ofereço",
    items: [
      { name: "Desenvolvimento Web", desc: "Criação de aplicações web responsivas e de alta performance — do front-end a soluções full-stack completas, com foco em arquitetura limpa e experiência do usuário." },
      { name: "Desenvolvimento Back-End", desc: "Projeto e implementação de APIs RESTful e lógica server-side com Python (FastAPI) e Node.js — com ênfase em escalabilidade, segurança e código manutenível." },
      { name: "IA & Automação", desc: "Integração de funcionalidades baseadas em IA e automação de processos em aplicações reais — de pipelines de dados inteligentes a ferramentas com LLMs que otimizam fluxos de trabalho." },
    ],
  },
  projects: {
    title: "Projetos", subTitle: "O Que Construí",
    viewAll: "Ver todos no GitHub", viewProject: "Ver no GitHub",
    items: [
      { name: "E-Motors", description: "Plataforma web que exibe veículos elétricos categorizados por tipo — esportivo, scooter e urbano. Focada em design limpo e navegação intuitiva." },
      { name: "Vyzor — Plataforma de Gestão", description: "Plataforma SaaS para gestão empresarial integrada — com dashboards de KPIs, integrações CRM/ERP e automação de processos por IA para fluxos de trabalho intensos em dados." },
    ],
  },
  certificates: {
    title: "Certificados", subTitle: "Minhas Credenciais",
    viewCert: "Ver Certificado", seeMore: "Ver mais no LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Treinamento fundamental abordando conceitos da Nuvem AWS, segurança, arquitetura e serviços principais.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python para Dados: Primeiros Passos", issuing: "Alura", description: "Curso abrangente sobre os fundamentos e lógica em Python aplicados à análise e manipulação de dados.", link: "/certs/python_dados_alura.pdf" }
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
