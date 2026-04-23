import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";

/* ───────────────────────────────────────────────
   useCustomInView — native IntersectionObserver
   (framer-motion v6 doesn't export useInView)
────────────────────────────────────────────────── */
const useCustomInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.12,
        rootMargin: options.margin || "-8% 0px -8% 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.margin]);

  return [ref, inView];
};


/* ───────────────────────────────────────────────
   ScrollFade — fade IN from below on enter,
                fade OUT upward on exit
────────────────────────────────────────────────── */
export const ScrollFade = ({ children, delay = 0 }) => {
  const [ref, inView] = useCustomInView();
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (inView) setSeen(true);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : seen
          ? { opacity: 0, y: -32, filter: "blur(4px)" }   // exit upward
          : { opacity: 0, y: 48, filter: "blur(4px)" }    // not yet seen
      }
      transition={{
        duration: inView ? 0.75 : 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: inView ? delay : 0,
      }}
    >
      {children}
    </motion.div>
  );
};

/* ───────────────────────────────────────────────
   RoleCarousel — animated word switcher
   replaces react-typical (which had bugs on
   language change)
────────────────────────────────────────────────── */
const RoleCarousel = ({ roles, lang, accent, textMain }) => {
  const [idx, setIdx] = useState(0);

  // Reset index when language changes
  useEffect(() => { setIdx(0); }, [lang]);

  useEffect(() => {
    const timer = setTimeout(
      () => setIdx((prev) => (prev + 1) % roles.length),
      2800
    );
    return () => clearTimeout(timer);
  }, [idx, roles.length]);

  return (
    <div
      style={{
        height: "clamp(1.8rem, 4vw, 2.4rem)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.span
          key={`${lang}-${idx}`}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            color: accent,
            fontSize: "clamp(1rem, 2.8vw, 1.45rem)",
            fontWeight: 600,
            whiteSpace: "nowrap",
            letterSpacing: "0.01em",
          }}
        >
          {roles[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

/* ───────────────────────────────────────────────
   SVG icons (theme toggle)
────────────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* ═══════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════ */
const Hero = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { lang, t, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bg        = "transparent";
  const textMain  = darkMode ? "#FFFFFF" : "#0d1117";
  const textMuted = darkMode ? "#e2e8f0" : "#57606a";
  const accent    = darkMode ? "#4d94ff" : "#1a56db";
  const ctrlBg    = darkMode ? "#161b22" : "#eef0f3";
  const ctrlBdr   = darkMode ? "#1e2530" : "#d0d7de";
  const ctrlTxt   = darkMode ? "#8b949e" : "#57606a";

  // Stagger container
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
  };
  const slideUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };
  // Name handwriting reveal
  const nameReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 2.0, ease: "easeInOut", delay: 0.15 } },
  };

  return (
    <div
      id="/"
      style={{
        backgroundColor: bg,
        minHeight: "100vh",
        position: "relative",
        zIndex: 1,
        transition: "background-color 0.35s ease",
      }}
    >
      {/* ── Floating controls — hide on scroll ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            key="controls"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", top: "1.5rem", right: "1.5rem", zIndex: 100, display: "flex", gap: "10px", alignItems: "center" }}
          >
            {/* Lang toggle */}
            <div className="float-glow" style={{ display: "flex", alignItems: "center", borderRadius: "14px", overflow: "hidden", border: `1px solid ${ctrlBdr}`, backgroundColor: ctrlBg }}>
              {["en", "pt", "zh", "de", "fr"].map((l) => (
                <button key={l} onClick={() => toggleLang(l)}
                  style={{
                    color: lang === l ? "#fff" : ctrlTxt,
                    backgroundColor: lang === l ? accent : "transparent",
                    cursor: "pointer", border: "none", outline: "none",
                    padding: "8px 10px", fontSize: "10px", fontWeight: 700,
                    textTransform: "uppercase", transition: "all 0.2s",
                  }}
                >{l.toUpperCase()}</button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              className="float-glow"
              onClick={() => dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" })}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "40px", height: "40px", borderRadius: "14px",
                backgroundColor: ctrlBg, border: `1px solid ${ctrlBdr}`,
                color: ctrlTxt, cursor: "pointer", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = ctrlTxt)}
              aria-label="Toggle theme"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Centered content ── */}
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div style={{ overflow: "hidden", marginBottom: "0.75rem", padding: "0 0.5rem" }}>
              <motion.h1
              variants={nameReveal}
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: textMain,
                fontSize: "clamp(3.4rem, 9vw, 8rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
                margin: 0,
                padding: "0 0.1em",
                transition: "color 0.35s ease",
              }}
            >
              <span style={{ fontSize: "1.25em" }}>L</span>ucca<span style={{ fontSize: "1.25em" }}>C</span>astilho
            </motion.h1>
          </div>

          {/* Animated role carousel */}
          <motion.div variants={slideUp} style={{ marginBottom: "1.5rem", width: "100%" }}>
            <RoleCarousel
              roles={t.home.roles}
              lang={lang}
              accent={accent}
              textMain={textMain}
            />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={slideUp}
            style={{
              color: textMuted,
              maxWidth: "500px",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              margin: "0 auto",
              transition: "color 0.35s ease",
            }}
          >
            {t.home.bio}
          </motion.p>

          {/* CV button */}
          <motion.div variants={slideUp} style={{ marginTop: "2.25rem" }}>
            <a
              href={lang === "pt" ? "/Curriculobr.pdf" : "/Curriculoen.pdf"}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "12px 36px", fontSize: "0.95rem", fontWeight: 600,
                borderRadius: "8px", color: "#fff",
                backgroundColor: "#1a56db", border: "1px solid #2563eb",
                textDecoration: "none", transition: "background-color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1648c7")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1a56db")}
            >
              {t.home.resume}
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={slideUp} style={{ display: "flex", gap: "18px", marginTop: "1.75rem" }}>
            {contactLinks.map((el) => (
              <a
                key={el.name}
                href={el.link}
                target="_blank"
                rel="noreferrer"
                aria-label={el.name}
                style={{
                  opacity: 0.6,
                  filter: darkMode ? "none" : "invert(0.55)",
                  transition: "opacity 0.2s, transform 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1.15)"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.transform = "scale(1)"; }}
                dangerouslySetInnerHTML={{ __html: el.svg }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.7 }}
          style={{ position: "absolute", bottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}
        >
          <span style={{ color: textMuted, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ color: textMuted }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
            </svg>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default Hero;
