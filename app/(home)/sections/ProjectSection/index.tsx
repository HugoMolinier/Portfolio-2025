"use client";
import React from "react";
import CardView from "./components/CardView";
import Icon from "@component/ui/Icon/Icon";

export default function Project() {
  return (
    <section
      id="projets"
      className="section"
      style={{
        scrollMarginTop: "28px",

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
