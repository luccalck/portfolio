import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

// Theme-aware color helper
const colors = {
  dark: {
    navBg: "#0a0c0f",
    navBorder: "#1e2530",
    logoColor: "#e6edf3",
    linkColor: "#8b949e",
    linkHover: "#e6edf3",
    mobileBg: "#111317",
    mobileBorder: "#1e2530",
    mobileText: "#e6edf3",
    accent: "#4d94ff",
    toggleBg: "#161b22",
    toggleBorder: "#1e2530",
    toggleText: "#8b949e",
    toggleActive: "#4d94ff",
    hamburger: "#e6edf3",
  },
  light: {
    navBg: "#ffffff",
    navBorder: "#d0d7de",
    logoColor: "#0d1117",
    linkColor: "#57606a",
    linkHover: "#0d1117",
    mobileBg: "#f4f6f8",
    mobileBorder: "#d0d7de",
    mobileText: "#0d1117",
    accent: "#1a56db",
    toggleBg: "#eef0f3",
    toggleBorder: "#d0d7de",
    toggleText: "#57606a",
    toggleActive: "#1a56db",
    hamburger: "#0d1117",
  },
};

// Sun icon SVG
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

// Moon icon SVG
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const c = darkMode ? colors.dark : colors.light;
  const { lang, t, toggleLang } = useLanguage();
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { name: t.nav.home,     route: "/" },
    { name: t.nav.about,    route: "about" },
    { name: t.nav.services, route: "services" },
    { name: t.nav.projects, route: "projects" },
    { name: t.nav.contact,  route: "contact" },
  ];

  const handleThemeToggle = () => {
    theme.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" });
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: c.navBg,
          borderBottom: `1px solid ${c.navBorder}`,
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
        className="z-50 shadow-md md:px-8 px-1 fixed w-full top-0"
      >
        <div className="flex justify-between items-center py-3 md:py-4 md:px-2 pl-2 mx-auto">

          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: c.logoColor,
              transition: "color 0.3s ease",
              textDecoration: "none",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = c.accent)}
            onMouseLeave={e => (e.currentTarget.style.color = c.logoColor)}
          >
            LuccaCastilho
          </a>

          {/* Desktop: nav links + controls */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {navLinks.map((el) => (
                <li key={el.name} className="cursor-pointer">
                  <Link
                    to={el.route}
                    spy={true}
                    smooth={true}
                    activeClass="active-nav-link"
                    className="block py-2 px-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-md cursor-pointer"
                    style={{ color: c.linkColor }}
                    onMouseEnter={e => (e.currentTarget.style.color = c.linkHover)}
                    onMouseLeave={e => (e.currentTarget.style.color = c.linkColor)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Lang toggle */}
            <div
              className="flex items-center rounded-lg overflow-hidden"
              style={{
                border: `1px solid ${c.toggleBorder}`,
                backgroundColor: c.toggleBg,
              }}
            >
              {["en", "pt"].map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className="px-3 py-1.5 text-xs font-bold uppercase transition-all duration-200"
                  style={{
                    color: lang === l ? "#fff" : c.toggleText,
                    backgroundColor: lang === l ? c.toggleActive : "transparent",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                >
                  {l === "en" ? "EN" : "PT"}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={handleThemeToggle}
              className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: c.toggleBg,
                border: `1px solid ${c.toggleBorder}`,
                color: c.toggleText,
                cursor: "pointer",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = c.accent)}
              onMouseLeave={e => (e.currentTarget.style.color = c.toggleText)}
              aria-label="Toggle theme"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile: theme + lang + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            {/* Lang toggle mobile */}
            <div
              className="flex items-center rounded-lg overflow-hidden"
              style={{ border: `1px solid ${c.toggleBorder}`, backgroundColor: c.toggleBg }}
            >
              {["en", "pt"].map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className="px-2 py-1 text-xs font-bold uppercase transition-all duration-200"
                  style={{
                    color: lang === l ? "#fff" : c.toggleText,
                    backgroundColor: lang === l ? c.toggleActive : "transparent",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                >
                  {l === "en" ? "EN" : "PT"}
                </button>
              ))}
            </div>

            {/* Theme toggle mobile */}
            <button
              onClick={handleThemeToggle}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: c.toggleBg,
                border: `1px solid ${c.toggleBorder}`,
                color: c.toggleText,
                cursor: "pointer",
              }}
              aria-label="Toggle theme"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <Hamburger
              toggled={toggle}
              size={20}
              duration={0.8}
              distance="lg"
              toggle={setToggle}
              color={c.hamburger}
            />
          </div>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { type: "spring" } }}
            exit={{ x: 200, opacity: 0, transition: { type: "spring" } }}
            style={{
              backgroundColor: c.mobileBg,
              border: `1px solid ${c.mobileBorder}`,
              transition: "background-color 0.3s ease",
            }}
            className="py-2 px-2 z-50 fixed top-16 mt-2 rounded-lg shadow-xl right-2 block w-44"
          >
            <ul>
              {navLinks.map((el) => (
                <Link
                  key={el.name}
                  to={el.route}
                  spy={true}
                  smooth={true}
                  className="block px-3 py-2 rounded-md text-sm font-medium mt-1 transition-colors duration-200 cursor-pointer"
                  style={{ color: c.mobileText }}
                  onMouseEnter={e => (e.currentTarget.style.color = c.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = c.mobileText)}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
