"use client";
import React from "react";
import Button from "@component/ui/Button/Button";
import Tag from "@component/ui/Tag/Tag";
import Icon from "@component/ui/Icon/Icon";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        width: "100%",
        height: "auto",

        backgroundImage: `
          linear-gradient(to top, #FFF, transparent),
          radial-gradient(rgba(237, 237, 237, 0.50) 2px, transparent 3px),
          radial-gradient(rgba(237, 237, 237, 0.50) 2px, transparent 3px)
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
          padding: "100px 72px 0px 8px",
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
              width: "61%",
            }}
          >
            <h5>
              Je suis MOLINIER Hugo, passionné par le développement ainsi que
              par l'IOT. <br />
              Voici mon porfolio avec mes projets et stages effectués
            </h5>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "48px",
          }}
        >
          <a href="#projets" style={{ cursor: "pointer" }}>
            <Icon name="arrow" color="rgba(3,15,75,0.2)" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
