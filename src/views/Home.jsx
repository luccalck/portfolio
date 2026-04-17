import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

const Home = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { t } = useLanguage();

  const bg       = darkMode ? "#080808"  : "#f4f6f8";
  const textMain = darkMode ? "#e6edf3"  : "#0d1117";
  const textMuted= darkMode ? "#8b949e"  : "#57606a";
  const accent   = darkMode ? "#4d94ff"  : "#1a56db";
  const btnBg    = darkMode ? "#1a56db"  : "#1a56db";
  const btnBdr   = darkMode ? "#2563eb"  : "#1648c7";
  const btnHover = darkMode ? "#1648c7"  : "#1345b0";
  const heroFilter = darkMode
    ? "hue-rotate(200deg) brightness(0.85)"
    : "hue-rotate(210deg) brightness(0.9)";

  // Build Typical steps from translated roles
  const typicalSteps = t.home.roles.flatMap((role) => [role, 1200]);

  return (
    <div style={{ backgroundColor: bg, minHeight: "100vh", transition: "background-color 0.3s ease" }}>
      <main
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between"
        style={{ minHeight: "100vh" }}
        id="/"
      >
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block"
              style={{ color: textMain, transition: "color 0.3s ease" }}
            >
              {t.home.greeting}
            </motion.span>
            <span className="block z-0 lg:inline" style={{ color: accent }}>
              <Typical steps={typicalSteps} loop={Infinity} />
            </span>
          </h1>

          <p
            className="mt-4 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            style={{ color: textMuted, transition: "color 0.3s ease" }}
          >
            {t.home.bio}
          </p>

          {/* Social icons */}
          <div className="flex md:justify-start mt-8 gap-5">
            {contactLinks.map((el) => (
              <a
                key={el.name}
                href={el.link}
                target="_blank"
                rel="noreferrer"
                aria-label={el.name}
                className="transition-all duration-200 hover:scale-110"
                style={{ opacity: 0.7, filter: darkMode ? "none" : "invert(0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}
                dangerouslySetInnerHTML={{ __html: el.svg }}
              />
            ))}
          </div>

          {/* Resume button */}
          <div className="mt-8">
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white transition-all duration-200 md:py-4 md:text-lg md:px-10"
              style={{ backgroundColor: btnBg, border: `1px solid ${btnBdr}` }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = btnHover)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = btnBg)}
            >
              {t.home.resume}
            </a>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
          src={heroBg}
          alt="Developer illustration"
          className="md:w-3/6 hidden sm:block mt-12 md:mt-0"
          style={{ filter: heroFilter }}
        />
      </main>
    </div>
  );
};

export default Home;
