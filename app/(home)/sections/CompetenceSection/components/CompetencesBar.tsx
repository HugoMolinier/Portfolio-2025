"use client";
import React from "react";
import Icon from "@component/ui/Icon/Icon";

const items = [
  { name: "valise", label: "Développement" },
  { name: "terminal", label: "Logiciel" },
  { name: "user", label: "Langue" },
];

type Props = {
  indexActive: number;
  onChange: (index: number) => void;
};

export default function CompetenceBar({ indexActive, onChange }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 12,
        borderBottom: "1px solid #F5F5F5",
        boxShadow: "0px 4px 6px -6px rgba(4, 13, 74, 0.25)",
      }}
    >
      {items.map((item, index) => {
        const isActive = index === indexActive;
        return (
          <div
            key={item.name}
            onClick={() => onChange(index)}
            className="textlink"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              padding: "8px",
              opacity: isActive ? 1 : 0.5,
              borderBottom: isActive
                ? "2px solid rgba(4, 13, 74, 0.25)"
                : "none",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
            }}
          >
            <Icon name={item.name} color="currentColor" size={20} />
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
