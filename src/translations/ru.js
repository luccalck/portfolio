const ru = {
  nav: { home: "Главная", about: "Обо мне", services: "Компетенции", projects: "Проекты", contact: "Контакты" },
  home: {
    greeting: "Привет, я Лукка",
    roles: ["Студент Программной Инженерии", "Python Backend Разработчик", "Инженер API и Баз Данных"],
    bio: "Backend-разработчик со специализацией в Python (FastAPI, PostgreSQL и Docker), обучающийся по направлениям Computer Science и Systems Analysis & Development.",
    resume: "Резюме",
  },
  about: {
    title: "Обо мне", subTitle: "Опыт и технический фокус",
    bio: "Я студент университета, параллельно обучающийся по направлениям Computer Science и Systems Analysis & Development, со специализацией в Python Backend-инженерии. Разрабатываю высокопроизводительные RESTful сервисы с использованием Python, FastAPI, SQLAlchemy 2.0 и PostgreSQL в контейнерах Docker. Стремлюсь к корпоративным стандартам разработки, чистой архитектуре и автоматизированным пайплайнам миграций. Стремлюсь к созданию надежной инфраструктуры, решающей реальные задачи бизнеса.",
    techTitle: "Технологии и Инструменты",
    techDesc: "Специализируюсь на стеке Python Backend (FastAPI, PostgreSQL, Docker, SQLAlchemy, Alembic и Pytest), а также обладаю навыками работы с современными веб-технологиями для полноценной интеграции.",
  },
  services: {
    title: "Технические Компетенции", subTitle: "Инженерные Возможности",
    items: [
      { name: "Backend Инженерия", desc: "Проектирование и развертывание масштабируемых RESTful API на Python (FastAPI), SQLAlchemy 2.0 и PostgreSQL. Фокус на чистой архитектуре, безопасности JWT и поддерживаемом коде." },
      { name: "Архитектура и Моделирование БД", desc: "Проектирование схем реляционных баз данных в PostgreSQL, оптимизация SQL-запросов и автоматизация миграций с помощью Alembic." },
      { name: "Контейнеризация и DevOps", desc: "Контейнеризация микросервисов с помощью Docker & Docker Compose, автоматизация тестирования с Pytest и непрерывная интеграция через GitHub Actions." },
    ],
  },
  projects: {
    title: "Проекты", subTitle: "Мои Работы",
    viewAll: "Смотреть все на GitHub", viewProject: "Смотреть на GitHub",
    items: [
      { name: "Vyzor", description: "Multi-tenant backend движок и SaaS платформа для управления данными — разработано на FastAPI, SQLAlchemy 2.0, Alembic, JWT, Redis и Docker." },
      { name: "ScopeMaster", description: "Коллаборативная платформа управления требованиями к ПО (Дипломный проект) — разработана на React 18, TypeScript, Supabase RLS и TailwindCSS." },
    ],
  },
  certificates: {
    title: "Сертификаты", subTitle: "Квалификация",
    viewCert: "Смотреть сертификат", seeMore: "Подробнее в LinkedIn",
    items: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuing: "AWS", description: "Базовый курс по концепциям облака AWS, безопасности, архитектуре и основным сервисам.", link: "/certs/aws_cloud_foundations.pdf" },
      { name: "Python for Data: First Steps", issuing: "Alura", description: "Комплексный вводный курс по основам Python для анализа и обработки данных.", link: "/certs/python_dados_alura.pdf" },
      { name: "Git & GitHub: Стратегии Контроля Версий", issuing: "Alura / SENAI", description: "Практические навыки работы с ветками, стандартами коммитов и интеграции CI.", link: "https://www.linkedin.com/in/luccacastilho1/" }
    ],
  },
  contact: {
    headline: "Есть проект для обсуждения?",
    sub: "Давайте создадим что-то отличное вместе. Свяжитесь со мной.",
    emailLabel: "Написать мне",
    socialLabel: "Социальные сети",
    footer: "Все права защищены.",
  },
};
export default ru;
