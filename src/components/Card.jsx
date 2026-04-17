import React from "react";
import { motion } from "framer-motion";

const Card = ({ name, description, tech, link, image, viewLabel, darkMode }) => {
  const cardBg     = darkMode ? "#111317"  : "#ffffff";
  const cardBorder = darkMode ? "#1e2530"  : "#d0d7de";
  const textMain   = darkMode ? "#e6edf3"  : "#0d1117";
  const textMuted  = darkMode ? "#8b949e"  : "#57606a";
  const accent     = darkMode ? "#4d94ff"  : "#1a56db";
  const btnBg      = "#1a56db";
  const btnHover   = "#1648c7";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-xl overflow-hidden my-6 hover:scale-[1.02] transition-transform duration-200"
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${cardBorder}`,
        maxWidth: "480px",
        width: "100%",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className="overflow-hidden" style={{ height: "200px" }}>
          <img
            src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"}
            alt={name || "Project"}
            style={{
              width: "100%", height: "100%", objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
      </a>

      <div className="p-5">
        <a href={link} target="_blank" rel="noreferrer">
          <h5
            className="mb-2 text-xl font-bold tracking-tight transition-colors duration-200"
            style={{ color: textMain }}
            onMouseEnter={e => (e.currentTarget.style.color = accent)}
            onMouseLeave={e => (e.currentTarget.style.color = textMain)}
          >
            {name || "Untitled Project"}
          </h5>
        </a>

        <p className="mb-3 text-sm leading-relaxed" style={{ color: textMuted }}>
          {description || "No description available."}
        </p>

        {tech && (
          <p className="mb-4 text-xs font-mono font-medium" style={{ color: accent }}>
            {tech}
          </p>
        )}

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center py-2 px-4 text-sm font-semibold rounded-lg text-white transition-all duration-200"
          style={{ backgroundColor: btnBg, border: "1px solid #2563eb" }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = btnHover)}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = btnBg)}
        >
          {viewLabel || "View on GitHub"}
          <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
