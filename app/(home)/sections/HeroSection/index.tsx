"use client";
import React from "react";
import Button from "@component/ui/Button/Button";
import Tag from "@component/ui/Tag/Tag";

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
          maxWidth: "960px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          padding: "100px 72px 80px 8px",
        }}
      >
        <img
          src="/image/pictureOfMe.png"
          alt="Logo"
          style={{
            width: "278px",
            height: "278px",
            float: "right",
            marginLeft: "20px",
            marginBottom: "0px",
            borderRadius: "8px",
          }}
        />

        <div style={{ paddingTop: "32px" }}>
          <Tag
            icon
            text="Bienvenue sur mon Portfolio"
            viewStyle={{ marginLeft: "5px" }}
          />
          <div style={{ paddingTop: "56px", paddingBottom: "56px" }}>
            <h1>Développeur Full Stack orienté en Systèmes Embarqués</h1>
          </div>
          <div
            style={{
              padding: "0px 12px",
              width: "61%",
            }}
          >
            <h5>
              Je suis MOLINIER Hugo, passionné par le développement ainsi que
              par les IOT. <br />
              Voici mon porfolio avec mes projets et stages effectués
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
