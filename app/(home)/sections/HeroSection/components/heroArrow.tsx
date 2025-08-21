import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Icon from "@component/ui/Icon/Icon";

export default function HeroArrow() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.querySelector("#projets");
      if (!nextSection) return;
      const rect = nextSection.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      const halfVisible = rect.top < screenHeight * 0.3;
      setShowArrow(!halfVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="hero-arrow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: showArrow ? 1 : 0, y: showArrow ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: showArrow ? "auto" : "none" }}
    >
      <a href="#projets" style={{ cursor: "pointer" }}>
        <Icon name="arrow" color="rgba(3,15,75,0.2)" size={28} />
      </a>
    </motion.div>
  );
}
