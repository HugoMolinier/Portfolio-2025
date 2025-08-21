"use client";

import { useState, useEffect, useRef } from "react";

interface SectionLink {
  id: string;
  label: string;
}

export default function TableOfContents({ links }: { links: SectionLink[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!links.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // On cherche l'élément visible le plus haut dans le viewport
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const topSection = visibleSections[0].target.id;
          if (topSection !== activeId) {
            setActiveId(topSection);
          }
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -70% 0px", // ignore la partie basse de l'écran
        threshold: 0,
      }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [links, activeId]);

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
