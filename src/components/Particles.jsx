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

    // Create a high-end starfield with different depths (parallax-like layers)
    const starLayers = [
      { count: 180, sizeRange: [0.1, 0.4], speed: 0.015, color: "255, 255, 255" }, // Far, tiny stars
      { count: 80, sizeRange: [0.4, 0.8], speed: 0.025, color: "200, 230, 255" },  // Mid, slightly blue
      { count: 30, sizeRange: [0.8, 1.2], speed: 0.035, color: "255, 255, 255" },  // Near, bright stars
    ];

    const stars = [];
    starLayers.forEach(layer => {
      for (let i = 0; i < layer.count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (layer.sizeRange[1] - layer.sizeRange[0]) + layer.sizeRange[0],
          baseOpacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * layer.speed + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: layer.color,
          pulse: Math.random() > 0.8, // Some stars pulse more visibly
        });
      }
    });

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((s) => {
        // High-end twinkling using sine wave for opacity
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        let opacity = s.baseOpacity + twinkle * (s.pulse ? 0.4 : 0.2);
        
        // Ensure stars don't disappear completely
        const currentOpacity = Math.max(0.1, opacity);

        // Draw the star (strictly pointed dots for universe feel)
        ctx.beginPath();
        // Subtle glow for the bright ones
        if (s.size > 0.8 && darkMode) {
          ctx.shadowBlur = s.size * 3;
          ctx.shadowColor = `rgba(${s.color}, ${currentOpacity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = darkMode 
          ? `rgba(${s.color}, ${currentOpacity})`
          : `rgba(20, 30, 60, ${currentOpacity * 0.2})`; // Dimmer in light mode

        // Using small rectangles/arcs for crispness
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
        const oldW = canvas.width;
        const oldH = canvas.height;
        resize();
        // Redistribute stars naturally on resize
        stars.forEach(s => {
          s.x = (s.x / oldW) * canvas.width;
          s.y = (s.y / oldH) * canvas.height;
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
        height: "110vh", // Slight overlap to avoid edges
        pointerEvents: "none",
        zIndex: 0, 
      }}
    />
  );
};

export default Particles;
