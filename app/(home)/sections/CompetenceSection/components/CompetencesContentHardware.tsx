"use client";
import React from "react";
import Box from "@component/ui/Box/Box";

export const categories = [
  {
    label: "Base de données ",
    skills: [
      { name: "WAMP server", iconsrc: "/image/icons/logiciel/wamp.svg" },
      { name: "PostgreSQL", iconsrc: "/image/icons/logiciel/Postgresql.svg" },
      { name: "MongoDB", iconsrc: "/image/icons/logiciel/mongodb.svg" },
      { name: "Neo4J", iconsrc: "/image/icons/logiciel/New4j.svg" },
    ],
  },
  {
    label: "Emulation",
    skills: [
      {
        name: "Oracle VM Virtual Box",
        iconsrc: "/image/icons/logiciel/Virtualbox.svg",
      },
      {
        name: "Android Studio",
        iconsrc: "/image/icons/logiciel/Android_Studio.svg",
      },
      { name: "XCode", iconsrc: "/image/icons/logiciel/Xcode.svg" },
      { name: "Arduino IDE", iconsrc: "/image/icons/logiciel/arduinoIDE.svg" },
    ],
  },
  {
    label: "Réseau",
    skills: [
      {
        name: "Cisco Packet Tracer",
        iconsrc: "/image/icons/logiciel/cisco.svg",
      },
    ],
  },
];

export default function CompetencesContentHardware() {
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
