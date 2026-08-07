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
  const [lang, setLang] = useState("en");

  const t = translations[lang];
  const toggleLang = (newLang) => setLang(newLang);

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Convenience hook
export const useLanguage = () => useContext(LanguageContext);
