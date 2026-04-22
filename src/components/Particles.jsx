import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Particles = () => {
  const canvasRef = useRef(null);
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Create a beautiful universe starfield
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    const stars = Array.from({ length: Math.min(count, 350) }, () => {
      const r = Math.random();
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // Varied sizes: mostly tiny points, some larger "main" stars
        size: r > 0.9 ? Math.random() * 1.5 + 1 : Math.random() * 0.8 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        // Color variation: white, slightly blue, or slightly warm
        color: r > 0.8 ? "200, 220, 255" : r > 0.6 ? "255, 240, 220" : "255, 255, 255",
        hasGlow: r > 0.92, // Only the biggest stars have a bloom effect
      };
    });

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((s) => {
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const opacity = s.baseOpacity + twinkle * (s.baseOpacity * 0.5);
        const currentOpacity = Math.max(0.1, opacity);

        ctx.beginPath();
        
        if (s.hasGlow && darkMode) {
          ctx.shadowBlur = s.size * 6;
          ctx.shadowColor = `rgba(${s.color}, ${currentOpacity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = darkMode 
          ? `rgba(${s.color}, ${currentOpacity})`
          : `rgba(10, 20, 50, ${currentOpacity * 0.4})`;
          
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        // Reposition stars that would be off-screen
        stars.forEach(s => {
          if (s.x > canvas.width) s.x = Math.random() * canvas.width;
          if (s.y > canvas.height) s.y = Math.random() * canvas.height;
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0, // Behind content but in front of background color
      }}
    />
  );
};

export default Particles;
