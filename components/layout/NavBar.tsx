"use client";

import React from "react";
import Button from "@component/ui/Button/Button";
type NavBarProps = {
  isFixed?: boolean;
};

export default function NavBar({ isFixed = true }: NavBarProps) {
  return (
    <div
      style={{
        position: isFixed ? "fixed" : "static",
        top: 0,
        zIndex: 10,
        opacity: 0.9,
        left: 0,
        right: 0,
        backgroundColor: "#FFF",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.05)",
      }}
    >
      <nav
        style={{
          maxWidth: "960px",
          margin: "0 auto",

          padding: "12px 0px",

          gap: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="/" style={{ lineHeight: 0 }}>
            <img
              src="/image/profilPicture.png"
              alt="Logo"
              style={{
                width: "36px",
                height: "36px",
                border: "0.5px solid #040D4A",
                borderRadius: 200,
              }}
            />
          </a>
          <a href="/" className="subtextBoldlink">
            Molinier Hugo
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="//" className="subtextBoldlink">
            A Propos
          </a>
          <Button
            icon="download"
            size="md"
            text="Mon CV"
            accessibilityLabel="Voir plus d'informations"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/file/CV_MOLINIER_Hugo.pdf";
              link.download = "CV_Hugo_Molinier.pdf";
              link.click();
            }}
          />
        </div>
      </nav>
    </div>
  );
}
