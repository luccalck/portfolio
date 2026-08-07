import React, { createContext, useContext, useState } from "react";
import en from "../translations/en";
import pt from "../translations/pt";
import zh from "../translations/zh";
import de from "../translations/de";
import fr from "../translations/fr";
import ru from "../translations/ru";

const translations = { en, pt, zh, de, fr, ru };

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang");
      return saved && translations[saved] ? saved : "en";
    } catch {
      return "en";
    }
  });

  const t = translations[lang] || en;

  const toggleLang = (newLang) => {
    if (translations[newLang]) {
      setLang(newLang);
      try {
        localStorage.setItem("portfolio_lang", newLang);
      } catch {}
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
