"use client";
import React, { useState } from "react";
import CompetenceBar from "./components/CompetencesBar";
import CompetencesContentSkill from "./components/CompetencesContentSkill";
import CompetencesContentHardware from "./components/CompetencesContentHardware";
import CompetencesContentLangue from "./components/CompetencesContentLangue";
export default function Competence() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      style={{
        backgroundColor: "rgba(4, 13, 74, 0.05)",
      }}
    >
      <section
        id="competences"
        className="section"
        style={{
          scrollMarginTop: "60px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "40px 0px 60px 0px",
        }}
      >
        <div
          style={{
            padding: "16px 5px 24px 5px",
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
            02
          </span>
          <h3>Compétences</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <CompetenceBar
            indexActive={activeIndex}
            onChange={(index) => {
              setActiveIndex(index);
            }}
          />
          {activeIndex === 0 && <CompetencesContentSkill />}
          {activeIndex === 1 && <CompetencesContentHardware />}
          {activeIndex === 2 && <CompetencesContentLangue />}
        </div>
      </section>
    </div>
  );
}
