import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScrollFade } from "../components/Hero";
import PizzaEasterEgg from "../components/PizzaEasterEgg";

const socialLabels = { GitHub: "GitHub", LinkedIn: "LinkedIn", Instagram: "Instagram" };

const Contact = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { t } = useLanguage();

  const bg       = darkMode ? "#080808" : "#f4f6f8";
  const textMain = darkMode ? "#FFFFFF" : "#0d1117";
  const textMuted= darkMode ? "#e2e8f0" : "#57606a";
  const accent   = darkMode ? "#4d94ff" : "#1a56db";
  const footerBg = darkMode ? "#0a0c0f" : "#eef0f3";
  const footerBdr= darkMode ? "#1e2530" : "#d0d7de";
  const footerClr= darkMode ? "#8b949e" : "#57606a";
  const iconFilter = darkMode ? "none" : "invert(0.55)";

  return (
    <div id="contact" style={{ backgroundColor: bg, transition: "background-color 0.35s ease" }}>
      <div
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "7rem 1.5rem 6rem",
          textAlign: "center",
        }}
      >

        {/* ── Headline ── */}
        <ScrollFade>
          <h2
            style={{
              color: textMain,
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              textShadow: `0 0 40px ${accent}60`,
              transition: "color 0.35s ease, text-shadow 0.35s ease",
            }}
          >
            {t.contact.headline}
          </h2>
          <p
            style={{
              color: textMuted,
              fontSize: "1.2rem",
              marginTop: "2.5rem",
              lineHeight: 1.7,
              transition: "color 0.35s ease",
            }}
          >
            {t.contact.sub}
          </p>
        </ScrollFade>

        {/* ── Email ── */}
        <ScrollFade delay={0.08}>
          <div style={{ marginTop: "7.5rem" }}>
            <p style={{
              color: textMuted, fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              marginBottom: "0.6rem",
            }}>
              {t.contact.emailLabel}
            </p>
            <a
              href="mailto:luccacc.contato@gmail.com"
              style={{
                color: textMain,
                fontSize: "clamp(1.05rem, 3vw, 1.6rem)",
                fontWeight: 700,
                textDecoration: "none",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                display: "inline-block",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = textMain)}
            >
              LUCCACC.CONTATO@GMAIL.COM
            </a>
          </div>
        </ScrollFade>

        {/* ── Social links ── */}
        <ScrollFade delay={0.14}>
          <div style={{ marginTop: "5.5rem" }}>
            <p style={{
              color: textMuted, fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              {t.contact.socialLabel}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", flexWrap: "wrap" }}>
              {contactLinks.map((el, index) => (
                <motion.a
                  key={el.name}
                  href={el.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    color: textMuted,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = textMuted)}
                >
                  <span
                    style={{ opacity: 0.75, filter: iconFilter, transition: "filter 0.35s ease" }}
                    dangerouslySetInnerHTML={{ __html: el.svg }}
                  />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {socialLabels[el.name] || el.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollFade>

      </div>

      {/* ── Footer ── */}
      <div
        style={{
          position: "relative",
          backgroundColor: footerBg,
          borderTop: `1px solid ${footerBdr}`,
          color: footerClr,
          padding: "1.1rem",
          textAlign: "center",
          fontSize: "0.7rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "background-color 0.35s ease",
        }}
      >
        <PizzaEasterEgg />
        © {new Date().getFullYear()} Lucca Castilho &nbsp;·&nbsp; {t.contact.footer}
      </div>
    </div>
  );
};

export default Contact;
