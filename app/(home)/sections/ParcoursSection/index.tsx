"use client";
import React from "react";

const parcours = [
  {
    nom: "Université Le Havre - UFR Informatique",
    années: "2025 - 2027",
  },
  {
    nom: "Université Paris-Est Créteil - BUT Informatique",
    années: "2022 - 2025",
  },
  {
    nom: "Lycée Maurice Ravel - Bac Général",
    années: "2018 - 2022",
  },
];

export default function ParcoursComponent() {
  return (
    <section
      id="parcours"
      style={{
        width: "100%",
        scrollMarginTop: "60px",
        maxWidth: "920px",
        margin: "0 auto",
        padding: "0 0 60px 0",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "64px 5px 12px 5px",
          display: "flex",
          gap: 12,
          alignItems: "flex-end",
        }}
      >
        <span
          className="subtext"
          style={{
            color: "rgba(4, 13, 74, 0.5)",
          }}
        >
          03
        </span>
        <h3>Parcours</h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {parcours.map((item, index) => {
          const isLast = index === parcours.length - 1;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 0",
                borderBottom: isLast ? "none" : "1px solid rgba(0,0,0,0.25)",
              }}
            >
              <p>{item.nom}</p>
              <span
                className="subtext"
                style={{
                  color: "rgba(4, 13, 74, 0.5)",
                }}
              >
                {item.années}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
