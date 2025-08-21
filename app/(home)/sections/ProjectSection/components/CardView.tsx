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
      }}
    >
      {Object.entries(projects).map(([key, project]) => (
        <div key={key} style={{ paddingBottom: " 80px" }}>
          <Card
            background={project.background}
            tagList={project.tagList}
            text={project.text}
            button={{ textButton: "Voir en détails" }}
            onClick={() => router.push(`/${key}`)}
            children={project.image}
          />
        </div>
      ))}
    </div>
  );
}
