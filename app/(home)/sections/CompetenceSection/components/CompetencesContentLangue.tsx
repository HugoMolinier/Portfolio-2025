"use client";
import React from "react";
import Box from "@component/ui/Box/Box";

export const categories = [
  {
    label: "Langue maternelle",
    skills: [{ name: "Francais", iconsrc: "/image/icons/langue/FR.svg" }],
  },
  {
    label: "Intermédiaire avancé",
    skills: [{ name: "Anglais", iconsrc: "/image/icons/langue/UK.svg" }],
  },
  {
    label: "Elémentaire",
    skills: [{ name: "Allemand", iconsrc: "/image/icons/langue/GE.svg" }],
  },
];

export default function CompetencesContentLangue() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
        borderBottom: "1px solid #F5F5F5",
        boxShadow: "0px 4px 6px -6px rgba(4, 13, 74, 0.25)",
      }}
    >
      {categories.map((category, index) => (
        <div
          key={category.label}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <p style={{ opacity: 0.6, padding: "0px 8px" }}>{category.label}</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            {category.skills.map((skill) => (
              <Box key={skill.name} text={skill.name} icon={skill.iconsrc} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
