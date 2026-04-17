import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import About from "./views/About";
import Services from "./views/Services";
import Projects from "./views/Projects";
import Certificates from "./views/Certificates";
import Contact from "./views/Contact";
import LoadingScreen from "./components/LoadingScreen";
import Particles from "./components/Particles";
import CustomCursor from "./components/CustomCursor";
import { ThemeProvider } from "./themeProvider";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    const rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, [loading]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        {!loading ? (
          <>
            {/* Star particles — fixed, behind everything */}
            <Particles />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Certificates />
              <Contact />
            </div>
          </>
        ) : (
          <LoadingScreen />
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
