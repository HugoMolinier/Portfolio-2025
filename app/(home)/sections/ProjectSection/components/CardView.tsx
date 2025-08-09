"use client";

import { useRouter } from "next/navigation";
import Card from "@component/ui/Card/Card";
import { projects } from "@lib/projects";
export default function ProjectsSection() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "0 0 38px 0",
      }}
    >
      {Object.entries(projects).map(([key, project]) => (
        <div key={key} style={{ padding: "20px 0px 52px 0px" }}>
          <Card
            background={project.background}
            tagList={project.tagList}
            text={project.text}
            button={{ textButton: "Voir en détails" }}
            onClick={() => router.push(`/projects/${key}`)}
          >
            {project.image && (
              <img
                src={project.image}
                alt="Projet illustration"
                style={{
                  width: "100%",
                  borderRadius: 8,
                  objectFit: "cover",
                }}
              />
            )}
          </Card>
        </div>
      ))}
    </div>
  );
}
