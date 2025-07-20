"use client";

import React from "react";
import Button from "@component/ui/Button/Button";
type NavBarProps = {
  fixed?: boolean;
};

export default function NavBar({ fixed = false }: NavBarProps) {
  return (
    <nav
      style={{
        position: fixed ? "fixed" : "static",
        top: 0,
        left: 0,
        right: 0,
        padding: "0.75rem 305px",
        backgroundColor: "#FEFEFE",
        gap: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <img
          src="/image/profilPicture.png"
          alt="Logo"
          style={{
            width: "2.5rem", // 40px
            height: "2.5rem",
            borderRadius: "50%",
            border: "1px solid #040D4A",
          }}
        />
        <span className="subtextBold">MOLINIER Hugo</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "2.1875rem" }}>
        <span className="subtext">A propos</span>
        <span className="subtext">Projets</span>
        <span className="subtext">Compétences</span>
        <span className="subtext">Parcours</span>
        <Button
          size="md"
          text="Mon CV"
          accessibilityLabel="Voir plus d'informations"
          onClick={() => console.log("clicked")}
        />
      </div>
    </nav>
  );
}
