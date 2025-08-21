"use client";

import React from "react";

export default function footer() {
  return (
    <footer
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        width: "90%",
        padding: "40px 0px 60px 0",

        gap: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "auto",
        }}
      >
        <a href="mailto:hugo.molinier@etu.u-pec.fr" className="textlink">
          hugo.molinier@etu.u-pec.fr
        </a>
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="https://www.linkedin.com/in/hugo-molinier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/image/icons/other/LinkedIn.svg"
              alt="LinkedIn"
              style={{ width: 30, height: 30, borderRadius: 10 }}
            />
          </a>

          <a
            href="https://github.com/HugoMolinier"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/image/icons/other/github.svg"
              alt="GitHub"
              style={{ width: 30, height: 30 }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "25px 0",
          justifyContent: "center",
        }}
      >
        <span className="subtext" style={{ color: "rgba(4, 13, 74, 0.5)" }}>
          Copyright.2025 - MOLINIER Hugo
        </span>
      </div>
    </footer>
  );
}
