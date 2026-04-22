import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScrollFade } from "../components/Hero";

// Abstract digital gradients — no real photos
const projectVisuals = [
  {
    // E-Motors: electric blue grid — electric vehicle feel
    gradient: "linear-gradient(135deg, #0a1628 0%, #0d1b35 55%, #0a2040 100%)",
    gridColor: "rgba(77,148,255,0.07)",
    accentLine: "#4d94ff",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4d94ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
        <rect x="1" y="6" width="22" height="13" rx="2"/><path d="M5 6V4a1 1 0 011-1h3a1 1 0 011 1v2"/><path d="M14 6V4a1 1 0 011-1h3a1 1 0 011 1v2"/>
        <line x1="12" y1="9" x2="12" y2="16"/><line x1="8.5" y1="12.5" x2="15.5" y2="12.5"/>
      </svg>
    ),
    tech: "HTML · CSS · JavaScript",
    link: "https://github.com/luccalck/e-motors",
  },
  {
    // Vyzor SaaS: dark teal dashboard — data/AI feel
    gradient: "linear-gradient(135deg, #060d12 0%, #081820 55%, #0a2030 100%)",
    gridColor: "rgba(0,180,216,0.07)",
    accentLine: "#00b4d8",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
        <polyline points="7,10 10,7 13,11 16,8"/>
        <circle cx="18" cy="8" r="1.5" fill="#00b4d8" stroke="none"/>
      </svg>
    ),
    tech: "Python · FastAPI · PostgreSQL · SQLAlchemy · JavaScript",
    link: "https://github.com/luccalck/vyzor-saas",
  },
];

// Abstract "digital prototype" visual card header
const ProjectVisual = ({ visual, index }) => (
  <div
    style={{
      background: visual.gradient,
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "220px",
      flexShrink: 0,
    }}
  >
    {/* Grid pattern */}
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: `
        linear-gradient(${visual.gridColor} 1px, transparent 1px),
        linear-gradient(90deg, ${visual.gridColor} 1px, transparent 1px)
      `,
      backgroundSize: "28px 28px",
    }} />

    {/* Glow blob */}
    <div style={{
      position: "absolute",
      width: "160px", height: "160px",
      borderRadius: "50%",
      background: `radial-gradient(circle, ${visual.accentLine}18 0%, transparent 70%)`,
      top: "50%", left: "50%",
      transform: "translate(-50%, -50%)",
    }} />

    {/* Project number */}
    <span style={{
      position: "absolute", top: "12px", left: "18px",
      fontSize: "4.5rem", fontWeight: 900, lineHeight: 1,
      color: "rgba(255,255,255,0.04)",
      fontFamily: "monospace", userSelect: "none",
    }}>
      0{index + 1}
    </span>

    {/* Abstract wireframe bars — simulates a UI prototype */}
    <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
      <div style={{ height: "6px", borderRadius: "3px", background: `${visual.accentLine}30`, width: "65%" }} />
      <div style={{ height: "4px", borderRadius: "3px", background: `${visual.accentLine}20`, width: "45%" }} />
      <div style={{ height: "4px", borderRadius: "3px", background: `${visual.accentLine}15`, width: "80%" }} />
    </div>

    {/* Center icon */}
    <div style={{ position: "relative", zIndex: 1 }}>
      {visual.icon}
    </div>

    {/* Accent border top */}
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0,
      height: "2px",
      background: `linear-gradient(90deg, transparent 0%, ${visual.accentLine}60 50%, transparent 100%)`,
    }} />
  </div>
);

const Projects = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { t } = useLanguage();

  const bg       = "transparent";
  const textMain = darkMode ? "#FFFFFF" : "#0d1117";
  const textMuted= darkMode ? "#e2e8f0" : "#57606a";
  const accent   = darkMode ? "#4d94ff" : "#1a56db";
  const cardBg   = darkMode ? "#111317" : "#ffffff";
  const cardBdr  = darkMode ? "#1e2530" : "#d0d7de";

  return (
    <div id="projects" style={{ backgroundColor: bg, transition: "background-color 0.35s ease" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <ScrollFade>
          <h2 className="text-5xl font-bold text-center" style={{ color: textMain, textShadow: `0 0 40px ${accent}60`, transition: "color 0.35s ease" }}>
            {t.projects.title}
          </h2>
          <h4 className="mt-14 text-3xl font-semibold" style={{ color: accent }}>
            {t.projects.subTitle}
          </h4>
        </ScrollFade>

        {/* Project cards — full width horizontal */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginTop: "2.5rem" }}>
          {t.projects.items.map((project, index) => {
            const visual = projectVisuals[index];
            const isEven = index % 2 === 0;

            return (
              <ScrollFade key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: `1px solid ${cardBdr}`,
                    backgroundColor: cardBg,
                    transition: "background-color 0.35s ease, border-color 0.35s ease",
                  }}
                  className="glow-card flex flex-col md:grid md:grid-cols-2"
                >
                  {/* Visual block */}
                  <div style={{ order: isEven ? 0 : 1 }}>
                    <ProjectVisual visual={visual} index={index} />
                  </div>

                  {/* Content block */}
                  <div
                    style={{
                      padding: "2.5rem",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      order: isEven ? 1 : 0,
                    }}
                  >
                    {/* Project number */}
                    <span style={{
                      fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: visual.accentLine, marginBottom: "0.75rem",
                    }}>
                      Project 0{index + 1}
                    </span>

                    {/* Name */}
                    <h3 style={{
                      fontSize: "1.75rem", fontWeight: 800, color: textMain,
                      lineHeight: 1.2, marginBottom: "1rem",
                      transition: "color 0.35s ease",
                    }}>
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: textMuted, fontSize: "0.98rem", lineHeight: 1.75,
                      marginBottom: "1.5rem", transition: "color 0.35s ease",
                    }}>
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.75rem" }}>
                      {visual.tech.split(" · ").map((tag) => (
                        <span key={tag} style={{
                          fontSize: "0.72rem", fontWeight: 600,
                          letterSpacing: "0.05em",
                          padding: "4px 10px", borderRadius: "20px",
                          border: `1px solid ${visual.accentLine}40`,
                          color: visual.accentLine,
                          backgroundColor: `${visual.accentLine}10`,
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={visual.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        fontSize: "0.88rem", fontWeight: 600, color: textMuted,
                        textDecoration: "none", transition: "color 0.2s",
                        width: "fit-content",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = visual.accentLine)}
                      onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
                    >
                      {t.projects.viewProject}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </ScrollFade>
            );
          })}
        </div>

        <ScrollFade delay={0.2}>
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
            <a
              href="https://github.com/luccalck"
              target="_blank"
              rel="noopener noreferrer"
              className="float-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                backgroundColor: cardBg,
                border: `1px solid ${cardBdr}`,
                borderRadius: "12px",
                color: textMain,
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              {t.projects.viewAll}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </ScrollFade>

      </div>
    </div>
  );
};

export default Projects;
