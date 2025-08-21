"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { projects, ProjectSlug } from "@lib/projects";
import Card from "@component/ui/Card/Card";
import TableOfContents from "./TableOfContents";
import { motion } from "framer-motion";

interface Props {
  params: Promise<{ slug: ProjectSlug }>;
}

export default function ProjectDetail({ params }: Props) {
  const { slug } = React.use(params);

  const project = projects[slug];
  if (!project) return notFound();

  const Component = project.component;
  const sectionLinks = project.sections ?? [];

  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWide(window.innerWidth > 720);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="section Projectsection">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          maxWidth: "920px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          padding: "80px 0 40px",
        }}
      >
        <Card
          background={project.background}
          variant="full"
          leftImage={project.leftimage}
          children={project.image}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          padding: "40px 0 60px 0",
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Colonne gauche */}

        {isWide && <TableOfContents links={sectionLinks} />}

        {/* Colonne droite */}
        <div
          style={{
            boxSizing: "border-box",
            wordWrap: "break-word",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <span className="subtext" style={{ color: "rgba(4, 13, 74, 0.5)" }}>
            {project.text.minText}
          </span>
          <h2>{project.text.title}</h2>
          {Component && <Component />}
        </div>
      </motion.div>
    </section>
  );
}
