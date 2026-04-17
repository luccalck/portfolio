import React, { useEffect, useContext } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const CustomCursor = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);



  useEffect(() => {
    const moveCursor = (e) => {
      // Update glow to follow mouse center 
      // width/height of glow is 400px -> center is 200px offset
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);

      // Keep tracking exact coordinates for the CSS spotlights on cards
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", moveCursor);

    // Ensure we ALWAYS use the default cursor (cleaning up any past states)
    document.body.style.cursor = "auto";

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  // A very subtle, large, blurry gradient matching the theme accent color
  const glowColor = darkMode ? "rgba(77, 148, 255, 0.08)" : "rgba(26, 86, 219, 0.06)";

  return (
    <>
      {/* This acts as a subtle global flashlight following the cursor */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 40, // Keeps it behind floating controls but can glow over backgrounds
          x: cursorX,
          y: cursorY,
          filter: "blur(40px)",
        }}
      />
    </>
  );
};

export default CustomCursor;