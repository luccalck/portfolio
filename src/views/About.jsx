import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";
import { ScrollFade } from "../components/Hero";

const About = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const { t } = useLanguage();

  const bg        = "transparent";
  const textMain  = darkMode ? "#FFFFFF" : "#0d1117";
  const textMuted = darkMode ? "#e2e8f0" : "#57606a";
  const accent    = darkMode ? "#4d94ff" : "#1a56db";
  const cardBg    = darkMode ? "#161b22" : "#ffffff";
  const cardBdr   = darkMode ? "#1e2530" : "#d0d7de";

  return (
    <div id="about" style={{ backgroundColor: bg, transition: "background-color 0.35s ease", position: "relative", zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

        <ScrollFade>
          <h2 className="text-5xl font-bold text-center" style={{ color: textMain, textShadow: `0 0 40px ${accent}60`, transition: "color 0.35s ease" }}>
            {t.about.title}
          </h2>
        </ScrollFade>

        <ScrollFade delay={0.06}>
          <h4 className="mt-14 text-3xl font-semibold" style={{ color: accent }}>{t.about.subTitle}</h4>
          <p className="mt-4 text-xl text-justify leading-relaxed" style={{ color: textMuted, transition: "color 0.35s ease" }}>
            {t.about.bio}
          </p>
        </ScrollFade>

        <ScrollFade delay={0.1}>
          <h4 className="mt-14 text-3xl font-semibold" style={{ color: accent }}>{t.about.techTitle}</h4>
          <p className="mt-4 text-xl text-justify leading-relaxed" style={{ color: textMuted, transition: "color 0.35s ease" }}>
            {t.about.techDesc}
          </p>
        </ScrollFade>

        <div className="flex flex-wrap mt-8 justify-between">
          {techStack.map((el, index) => (
            <ScrollFade key={index} delay={index * 0.045}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="glow-card py-2 px-4 md:my-4 mt-6 rounded-lg flex items-center cursor-pointer md:w-48 w-40 transition-shadow duration-200"
                style={{ backgroundColor: cardBg, border: `1px solid ${cardBdr}`, transition: "background-color 0.35s ease, border-color 0.35s ease" }}
              >
                <img alt={el.name} src={el.link} className="w-10" />
                <h4 className="text-sm ml-3 font-medium" style={{ color: textMain, transition: "color 0.35s ease" }}>{el.name}</h4>
              </motion.div>
            </ScrollFade>
          ))}
        </div>

      </div>
    </div>
  );
};

export default About;
