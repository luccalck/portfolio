import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScrollFade } from "../components/Hero";

// Abstract modern SVGs for Services
const serviceIcons = [
  // Web Dev
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
  // Backend
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>,
  // AI & Automation
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4 12H2" />
    <path d="M22 12h-2" />
    <path d="M19.07 4.93l-1.41 1.41" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 19.07l-1.41-1.41" />
    <path d="M6.34 6.34L4.93 4.93" />
    <circle cx="12" cy="12" r="4" />
  </svg>,
];

const Services = () => {
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
    <div id="services" style={{ backgroundColor: bg, paddingBottom: "6rem", transition: "background-color 0.35s ease", position: "relative", zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">

        <ScrollFade>
          <h2 className="text-5xl font-bold text-center" style={{ color: textMain, textShadow: `0 0 40px ${accent}60`, transition: "color 0.35s ease" }}>
            {t.services.title}
          </h2>
          <h4 className="mt-14 text-3xl font-semibold text-center" style={{ color: accent }}>
            {t.services.subTitle}
          </h4>
        </ScrollFade>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-stretch gap-8">
          {t.services.items.map((item, index) => (
            <ScrollFade key={index} delay={index * 0.12}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glow-card flex flex-col p-8 rounded-2xl w-full h-full relative group"
                style={{
                  backgroundColor: cardBg,
                  border: `1px solid ${cardBdr}`,
                  transition: "background-color 0.35s ease, border-color 0.35s ease",
                }}
              >
                {/* Top Accent Line */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                  opacity: 0.5,
                }} />

                {/* Icon wrapper with glow inside card */}
                <div style={{
                  width: "80px", height: "80px",
                  borderRadius: "20px",
                  backgroundColor: `${accent}12`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: accent,
                  marginBottom: "2rem",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `radial-gradient(circle at center, ${accent}30 0%, transparent 60%)`,
                    borderRadius: "inherit",
                  }} />
                  {serviceIcons[index]}
                </div>

                {/* Text Context */}
                <h4 className="text-2xl font-bold" style={{ color: textMain, transition: "color 0.35s ease", marginBottom: "1rem" }}>
                  {item.name}
                </h4>
                <p className="text-base leading-relaxed" style={{ color: textMuted, transition: "color 0.35s ease", margin: 0 }}>
                  {item.desc}
                </p>

              </motion.div>
            </ScrollFade>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Services;
