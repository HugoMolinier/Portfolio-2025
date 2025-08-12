"use client";

import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@lib/projects";
import Card from "@component/ui/Card/Card";
import TableOfContents from "./TableOfContents";
interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: Props) {
  const [realParams, setRealParams] = React.useState<{ slug: string } | null>(
    null
  );

  React.useEffect(() => {
    params.then(setRealParams);
  }, [params]);

  if (!realParams) {
    return <div style={{ height: "1000px" }}>Loading...</div>;
  }

  const project = projects[realParams.slug];

  if (!project) {
    return notFound();
  }

  const Component = project.component;
  const sectionLinks = project.sections ?? [];

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "920px",
        margin: "0 auto",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          margin: "0 auto",
          boxSizing: "border-box",
          position: "relative",
          padding: "80px 0 52px",
        }}
      >
        <Card background={project.background} variant="full">
          {project.image && (
            <img
              src={project.image}
              alt="Illustration du projet"
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Card>
      </div>

      <div
        style={{
          padding: "50px 0 60px 0",
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Colonne gauche */}

        <TableOfContents links={sectionLinks} />

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
      </div>
    </section>
  );
}
