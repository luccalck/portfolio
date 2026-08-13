<div align="center">

# Lucca Castilho | Personal Portfolio

### Responsive and multilingual presentation of my education, technical background, and software projects

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-luccacc.vercel.app/)
[![React](https://img.shields.io/badge/React-17-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

</div>

---

## Overview

This repository contains the source code for my personal portfolio. The interface presents my academic background, technical focus, certificates, software projects, curriculum, and contact channels in a responsive single-page experience.

The application combines **React**, Context API, Framer Motion, Lenis, custom CSS, and Tailwind utilities to provide theme switching, animated transitions, smooth navigation, and multilingual content.

**Live site:** [portfolio-luccacc.vercel.app](https://portfolio-luccacc.vercel.app/)

---

## Core Features

- **Multilingual interface:** English, Portuguese, Chinese, German, French, and Russian content modules.
- **Theme system:** light and dark visual modes managed through React context.
- **Responsive layout:** project, certificate, about, service, and contact views adapted to different viewport sizes.
- **Motion and navigation:** Framer Motion transitions, Lenis smooth scrolling, and section-based navigation.
- **Project showcase:** structured cards for software projects, technologies, links, and technical descriptions.
- **Curriculum access:** downloadable Portuguese and English résumé files.
- **Deployment configuration:** Vercel routing configured for the React single-page application.

---

## Technology Stack

| Area | Technologies |
| --- | --- |
| Application | React 17, JavaScript, Create React App / React Scripts 5 |
| State | React Context API |
| Interface | Custom CSS, Tailwind CSS utilities loaded through CDN |
| Motion | Framer Motion, Lenis, react-scroll |
| Visual effects | react-tsparticles |
| Deployment | Vercel |

---

## Project Structure

```text
portfolio/
|-- public/                    # Static assets, metadata, certificates, and CV files
|-- src/
|   |-- assets/                # Images, SVGs, and particle configuration
|   |-- components/            # Navigation, hero, cards, particles, and loading UI
|   |-- contexts/              # Language context and locale selection
|   |-- translations/          # EN, PT, ZH, DE, FR, and RU content
|   |-- views/                 # About, projects, certificates, services, and contact
|   |-- App.js                 # Main application composition
|   `-- index.css              # Global visual system and responsive styles
|-- package.json
`-- vercel.json
```

---

## Run Locally

### Prerequisites

- Node.js 18 or newer;
- npm.

### Installation

```bash
git clone https://github.com/luccalck/portfolio.git
cd portfolio
npm install
npm start
```

Create a production build with:

```bash
npm run build
```

---

## License

Copyright © 2026 Lucca Castilho. See [LICENSE](LICENSE) for usage terms.
