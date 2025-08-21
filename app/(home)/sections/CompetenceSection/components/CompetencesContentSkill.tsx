"use client";
import React from "react";
import Box from "@component/ui/Box/Box";

export const categories = [
  {
    label: "Mobile / Web",
    skills: [
      { name: "ReactJS", iconsrc: "/image/icons/skill/react.svg" },
      { name: "React Native", iconsrc: "/image/icons/skill/react.svg" },
      { name: "Java Script", iconsrc: "/image/icons/skill/JS.svg" },
      { name: "PHP", iconsrc: "/image/icons/skill/php.svg" },
      { name: "Html & CSS", iconsrc: "/image/icons/skill/html.svg" },
    ],
  },
  {
    label: "Programmation",
    skills: [
      { name: "Python", iconsrc: "/image/icons/skill/python.svg" },
      { name: "Java", iconsrc: "/image/icons/skill/java.svg" },
      { name: "Language C", iconsrc: "/image/icons/skill/c.svg" },
      { name: "Google App Script", iconsrc: "/image/icons/skill/google.svg" },
    ],
  },
  {
    label: "Base de données",
    skills: [
      { name: "SQL", iconsrc: "/image/icons/skill/sql.svg" },
      { name: "NoSQL", iconsrc: "/image/icons/skill/nosql.svg" },
      { name: "PL/SQL", iconsrc: "/image/icons/skill/plsql.svg" },
    ],
  },
  {
    label: "Outil",
    skills: [
      { name: "Bash", iconsrc: "/image/icons/skill/bash.svg" },
      { name: "Git", iconsrc: "/image/icons/skill/git.svg" },
      { name: "Docker", iconsrc: "/image/icons/skill/docker.svg" },
    ],
  },
];

export default function CompetencesContentSkill() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}
    >
      {categories.map((category) => (
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
