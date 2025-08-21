"use client";
import React from "react";
import Tag from "@component/ui/Tag/Tag";
import { motion } from "framer-motion";
import "./Hero.css";
import HeroArrow from "./components/heroArrow";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section hero-container"
      >
        <img
          src="/image/pictureOfMe.png"
          alt="Logo"
          className="responsive-image .responsive-image-Home"
        />

        <div className="hero-content">
          <Tag
            icon
            text="Bienvenue sur mon Portfolio"
            viewStyle={{ marginLeft: "5px" }}
            sizeIcon={32}
          />
          <div className="hero-title">
            <h1>Développeur Full Stack orienté en Systèmes Embarqués</h1>
          </div>
          <div className="hero-subtitle">
            <h5>
              Je suis MOLINIER Hugo, passionné par le développement ainsi que
              par l'IOT. <br />
              Voici mon porfolio avec mes projets et stages effectués
            </h5>
          </div>
        </div>
        <HeroArrow />
      </motion.div>
    </section>
  );
}
