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
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    // Generate falling particles — varied sizes & falling speeds
    const count = Math.floor((canvas.width * canvas.height) / 12000);
    const particles = Array.from({ length: Math.min(count, 180) }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      baseOpacity: Math.random() * 0.35 + 0.05,
      twinkleSpeed: Math.random() * 0.008 + 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
      speedY: Math.random() * 0.3 + 0.1, // Fall speed downwards
    }));

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const color = darkMode ? "255,255,255" : "15,30,80";
      frame++;

      particles.forEach((p) => {
        // Move particle down
        p.y += p.speedY;

        // If it goes past the bottom of the document, wrap to the top
        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        // Subtle twinkle: opacity oscillates gently
        const twinkle = Math.sin(frame * p.twinkleSpeed + p.twinkleOffset);
        const opacity = p.baseOpacity + twinkle * (p.baseOpacity * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${Math.max(0.01, opacity)})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    // Small timeout on resize to let DOM settle layout height
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => resize(), 150);
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
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
};

export default Particles;
