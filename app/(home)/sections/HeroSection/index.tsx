"use client";
import React from "react";
import Button from "@component/ui/Button/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        height: "auto",

        backgroundImage: `
          linear-gradient(to top, #FFF, transparent),
          radial-gradient(rgba(237, 237, 237, 0.30) 2px, transparent 3px),
          radial-gradient(rgba(237, 237, 237, 0.30) 2px, transparent 3px)
        `,
        backgroundSize: `
          100% 100%,
          2rem 2rem,
          2rem 2rem
        `,
        backgroundPosition: `
          0 0,
          0 0,
          1rem 1rem
        `,
        backgroundRepeat: "no-repeat, repeat, repeat",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          padding: "100px 60px 60px 20px",
        }}
      >
        <img
          src="/image/pictureOfMe.png"
          alt="Logo"
          style={{
            width: "271px",
            height: "271px",
            float: "right",
            marginLeft: "20px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #FFF",
            boxShadow: "0 4px 4px rgba(4, 13, 74, 0.25)",
          }}
        />

        <div>
          <div style={{ paddingTop: "60px", paddingBottom: "28px" }}>
            <h1>Développeur FullStack orienté en Systèmes Embarqués</h1>
          </div>
          <div
            style={{
              padding: "0px 10px",
              gap: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={{ lineHeight: "150%" }}>
              Bonjour, je suis MOLINIER Hugo. <br />
              Etudiant en 1er année de master à l’université du Havre parcours
              Ingénierie du web, des objets communicant et systèmes complexes.
            </p>
            <p style={{ lineHeight: "150%" }}>
              Je suis passionné par le développement full stack ainsi que par
              les systèmes embarqués. Je m'intéresse particulièrement aux
              domaines où l'interconnexion entre objets intelligents.
            </p>
          </div>
          <div style={{ paddingTop: "28px", paddingLeft: "8px" }}>
            <Button
              size="lg"
              text="Voir mes projets"
              accessibilityLabel="Voir plus d'informations"
              onClick={() => {
                document
                  .getElementById("projets")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
