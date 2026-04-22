import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScrollFade } from "../components/Hero";

const Certificates = () => {
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
    <div id="certificates" style={{ backgroundColor: bg, transition: "background-color 0.35s ease" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">

        <ScrollFade>
          <h2 className="text-5xl font-bold text-center" style={{ color: textMain, textShadow: `0 0 40px ${accent}60`, transition: "color 0.35s ease" }}>
            {t.certificates.title}
          </h2>
          <h4 className="mt-14 text-3xl font-semibold" style={{ color: accent }}>
            {t.certificates.subTitle}
          </h4>
        </ScrollFade>

        {/* Certificate cards — grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem", marginTop: "2.5rem", alignItems: "stretch" }}>
          {t.certificates.items.map((cert, index) => {
            return (
              <ScrollFade key={index} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    borderRadius: "16px",
                    padding: "2rem",
                    border: `1px solid ${cardBdr}`,
                    backgroundColor: cardBg,
                    transition: "background-color 0.35s ease, border-color 0.35s ease",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%", /* Forces identical box heights */
                  }}
                  className="glow-card"
                >
                  <div style={{
                    width: "50px", height: "50px",
                    borderRadius: "12px",
                    backgroundColor: `${accent}16`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: accent,
                    marginBottom: "1.5rem"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>

                  <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h3 style={{
                      color: textMain,
                      fontSize: "1.45rem",
                      fontWeight: "700",
                      marginBottom: "1rem",
                      letterSpacing: "0.02em",
                      transition: "color 0.35s ease"
                    }}>
                      {cert.name}
                    </h3>
                    <p style={{
                      color: textMuted,
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      marginBottom: "1.5rem",
                      transition: "color 0.35s ease"
                    }}>
                      {cert.description}
                    </p>
                  </div>
                  
                  {/* Action Button & Badge Area */}
                  <div style={{
                    marginTop: "auto", /* Pushes this block to the bottom naturally */
                    paddingTop: "1.5rem",
                    borderTop: `1px solid ${cardBdr}80`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                    <a
                      href={cert.link || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="float-glow"
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        backgroundColor: accent,
                        color: "#fff",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        textDecoration: "none"
                      }}
                    >
                      {t.certificates.viewCert}
                    </a>
                    
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: accent,
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Verified
                    </div>
                  </div>
                </motion.div>
              </ScrollFade>
            );
          })}
        </div>

        {/* View Details Link */}
        <ScrollFade delay={0.2}>
          <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
            <a
              href="https://www.linkedin.com/in/luccacastilho/"
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
              {t.certificates.seeMore}
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

export default Certificates;
