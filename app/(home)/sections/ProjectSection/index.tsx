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
        maxWidth: "960px",
        margin: "0 auto",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "80px 5px 48px 5px",
          display: "flex",
          gap: 12,
          lineHeight: 1,
          alignItems: "baseline",
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
        <h3 style={{ margin: 0, lineHeight: 1 }}>Projets / Stage</h3>
      </div>

      <CardView />
    </section>
  );
}
