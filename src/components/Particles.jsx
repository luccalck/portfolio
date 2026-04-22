import React, { useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Particles = () => {
  const canvasRef = useRef(null);
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const scrollY = useRef(0);

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

    // Layers: [count, sizeRange, twinkleSpeed, parallaxFactor, color]
    const starLayers = [
      { count: 180, sizeRange: [0.1, 0.4], speed: 0.012, parallax: 0.05, drift: 0.05, color: "255, 255, 255" }, 
      { count: 80,  sizeRange: [0.4, 0.8], speed: 0.020, parallax: 0.12, drift: 0.10, color: "200, 230, 255" }, 
      { count: 30,  sizeRange: [0.8, 1.2], speed: 0.030, parallax: 0.25, drift: 0.15, color: "255, 255, 255" }, 
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
          parallax: layer.parallax,
          driftX: (Math.random() - 0.5) * layer.drift, // Random drift direction
          driftY: layer.drift * 0.5, // Constant slow downward drift
          color: layer.color,
          pulse: Math.random() > 0.85,
        });
      }
    });

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      stars.forEach((s) => {
        // Continuous smooth drift movement
        s.x += s.driftX;
        s.y += s.driftY;

        // Wrap around screen after drift
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        // Add scroll parallax: stars shift based on their layer depth
        const parallaxY = scrollY.current * s.parallax;
        let drawY = (s.y - parallaxY) % canvas.height;
        if (drawY < 0) drawY += canvas.height;

        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        let opacity = s.baseOpacity + twinkle * (s.pulse ? 0.4 : 0.2);
        const currentOpacity = Math.max(0.1, opacity);

        ctx.beginPath();
        if (s.size > 0.8 && darkMode) {
          ctx.shadowBlur = s.size * 3;
          ctx.shadowColor = `rgba(${s.color}, ${currentOpacity})`;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = darkMode 
          ? `rgba(${s.color}, ${currentOpacity})`
          : `rgba(20, 30, 60, ${currentOpacity * 0.2})`;

        ctx.arc(s.x, drawY, s.size, 0, Math.PI * 2);
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
        stars.forEach(s => {
          s.x = Math.random() * canvas.width;
          s.y = Math.random() * canvas.height;
        });
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
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
        zIndex: 0, 
      }}
    />
  );
};

export default Particles;
