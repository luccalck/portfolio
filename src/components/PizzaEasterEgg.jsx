import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PizzaEasterEgg = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        style={{
          position: "absolute",
          left: "1rem",
          bottom: "50%",
          transform: "translateY(50%)",
          fontSize: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          opacity: 0.15, // extremely hidden
          zIndex: 10,
          transition: "opacity 0.2s ease"
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
        onMouseLeave={e => e.currentTarget.style.opacity = "0.15"}
        title="Secret Pizza"
      >
        🍕
      </button>

      {/* Render overlay via portal-like style (fixed absolute) */}
      <AnimatePresence>
        {open && (
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, scale: 0.8 }}
             transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
             style={{
                position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
                background: "linear-gradient(135deg, #ffcc00 0%, #ff6600 100%)",
                zIndex: 999999, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", overflow: "hidden",
                cursor: "default"
             }}
           >
              {/* Close button */}
              <button 
                onClick={() => setOpen(false)}
                style={{ 
                  position: "absolute", top: "2rem", right: "2rem", fontSize: "3rem", 
                  background: "none", border: "none", cursor: "pointer", color: "#fff",
                  textShadow: "2px 2px 0 #cc3300", zIndex: 100
                }}
              >
                ✖
              </button>

              <motion.h1 
                 style={{
                   fontFamily: "'Fugaz One', cursive",
                   fontSize: "clamp(3rem, 10vw, 7rem)",
                   color: "#ffffff",
                   textShadow: "4px 4px 0 #cc3300, 8px 8px 0 #990000",
                   textAlign: "center",
                   margin: "0 0 2rem 0",
                   lineHeight: 1.1,
                   zIndex: 10
                 }}
                 animate={{ rotate: [-2, 2, -2] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                EU MEREÇO<br/>O PRÊMIO? 🏆
              </motion.h1>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.85, rotate: (Math.random() * 20 - 10) }}
                onClick={() => setCount(c => c + 1)}
                style={{
                  padding: "1.5rem 5rem",
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontFamily: "'Fugaz One', cursive",
                  background: "#cc3300",
                  color: "#fff",
                  border: "8px solid #ffff00",
                  borderRadius: "50px",
                  cursor: "pointer",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), inset 0 -5px 15px rgba(0,0,0,0.3)",
                  zIndex: 10
                }}
              >
                SIM
              </motion.button>

              <motion.div
                key={count}
                initial={{ scale: 1.5, opacity: 0, y: -20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                style={{
                  marginTop: "3rem",
                  fontSize: "3rem",
                  fontFamily: "'Fugaz One', cursive",
                  color: "#ffff00",
                  textShadow: "3px 3px 0 #cc3300",
                  background: "rgba(0,0,0,0.2)",
                  padding: "1rem 2.5rem",
                  borderRadius: "20px",
                  zIndex: 10,
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)"
                }}
              >
                Votos: {count}
              </motion.div>

              {/* Decorative background pizzas */}
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    fontSize: `${Math.random() * 5 + 2}rem`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: 0.3,
                    zIndex: 0
                  }}
                  animate={{
                    y: [0, Math.random() * -60 - 20, 0],
                    rotate: [0, 360],
                    scale: [1, Math.random() * 0.5 + 1.1, 1]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {i % 2 === 0 ? "🍕" : "🧀"}
                </motion.div>
              ))}

           </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default PizzaEasterEgg;