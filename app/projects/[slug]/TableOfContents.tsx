"use client";

import { useState, useEffect } from "react";

interface SectionLink {
  id: string;
  label: string;
}

export default function TableOfContents({ links }: { links: SectionLink[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let minOffset = Number.POSITIVE_INFINITY;
        let currentId: string | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const offset = Math.abs(entry.boundingClientRect.top);
            if (offset < minOffset) {
              minOffset = offset;
              currentId = entry.target.id;
            }
          }
        });

        if (currentId) {
          setActiveId(currentId);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  return (
    <div
      style={{
        width: "30%",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        gap: 16,
        position: "sticky",
        top: 100, // hauteur navbar
        alignSelf: "flex-start",
      }}
    >
      {links.map((link) => {
        const isActive = activeId === link.id;
        const color = isActive ? "rgba(4, 13, 74, 1)" : "rgba(4, 13, 74, 0.5)";

        return (
          <div
            key={link.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                height: 1,
                width: isActive ? 30 : 2,
                backgroundColor: color,
                transition: "width 0.5s ease",
              }}
            />
            <a
              className="subtext toc-link"
              href={`#${link.id}`}
              style={{
                color,
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          </div>
        );
      })}
    </div>
  );
}
