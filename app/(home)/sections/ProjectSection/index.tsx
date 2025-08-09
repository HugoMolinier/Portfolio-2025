"use client";
import React from "react";
import CardView from "./components/CardView";

export default function Project() {
  return (
    <section
      id="projets"
      style={{
        width: "100%",

        scrollMarginTop: "60px",
        maxWidth: "920px",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "56px 5px 24px 5px",
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
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
          01
        </span>
        <h3>Projets / Stage</h3>
      </div>

      <CardView />
    </section>
  );
}
