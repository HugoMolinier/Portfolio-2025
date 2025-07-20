"use client";
import React from "react";
import Button from "@component/ui/Button/Button";

export default function Hero() {
  return (
    <section
      style={{
        width: "100%",
        height: "auto",
        padding: "2.5rem 350px", // 40px 300px
        boxSizing: "border-box",
        position: "relative",
        backgroundImage: `
          radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)
        `,
      }}
    >
      <img
        src="/image/pictureOfMe.png"
        alt="Logo"
        style={{
          width: "16rem", // 256px
          height: "16rem", // 256px
          float: "right",
          position: "relative",
          top: 0,
          right: "-20px",
          borderRadius: "15px",
          border: "1px solid #FFFFFF",
          boxShadow: "0 4px 4px rgba(4, 13, 74, 0.25)",
        }}
      />
      <div style={{ paddingTop: "4.6875rem", paddingBottom: "1.875rem" }}>
        <span className="Herotitle">
          Développeur fullStack et en informatique embarquée
        </span>
      </div>
      <div
        style={{
          gap: "16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span className="text">
          Bonjour, je suis MOLINIER Hugo. <br />
          Etudiant en 1er année de master à l’université du Havre parcours
          Ingénierie du web, des objets communicant et systèmes complexes.
        </span>
        <span className="text">
          Je suis passionné par le développement full stack ainsi que par les
          systèmes embarqués. Je m'intéresse particulièrement aux domaines où
          l'interconnexion entre objets intelligents.
        </span>
        <span className="text">
          Créons quelque chose d’exceptionnel, ensemble
        </span>
      </div>
      <div style={{ paddingTop: "1.875rem" }}>
        <Button
          size="lg"
          text="Découvrir mes projets"
          accessibilityLabel="Voir plus d'informations"
          onClick={() => console.log("clicked")}
        />
      </div>
    </section>
  );
}
