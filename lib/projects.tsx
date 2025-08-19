import React from "react";
import EngiePage from "@/(projects)/DetailProject/EngiePage";
import pmr from "@/(projects)/DetailProject/PMR";

export type ProjectSlug = "engie" | "trajetPMR" | "taxonsLibrary";

interface Project {
  background: string;
  tagList: string[];
  text: { minText: string; title: string; explain: string };
  image: string;
  leftimage: string;
  component?: () => any;
  sections?: { id: string; label: string }[];
}

export const projects: Record<ProjectSlug, Project> = {
  engie: {
    background: "linear-gradient(67deg, #CDCEED 0%, #E4E692 50%, #B2C073 100%)",
    tagList: ["React Native", "Terraform"],
    text: {
      minText: "Stage 2025 - ENGIE Vianeo",
      title: "Amélioration design",
      explain:
        "Front développeur : améliorer le design global de l’application mobile en React Native. Implémentation du dark mode et de composants.",
    },
    image: "/image/engie mock.png",
    leftimage: "/image/engie/LEFT_pres.png",
    component: EngiePage,

    sections: [
      { id: "introduction", label: "Introduction" },
      { id: "decouverte", label: "Découverte" },
      { id: "missions", label: "Missions" },
      { id: "resultats-impact", label: "Résultats" },
      { id: "challenges", label: "Challenges et solutions" },
      { id: "apprentissage", label: "Apprentissage" },
    ],
  },

  trajetPMR: {
    background: "linear-gradient(67deg, #CDCEED 0%, #D8EAF8 50%, #CBD6AB 100%)",
    tagList: ["Java", "React Native", "ReactJS"],
    text: {
      minText: "Projet Académique (2024/2025) - UPEC",
      title: "Trajet multimodal PMR",
      explain:
        "Applications pour PMR et agents pour scanner et suivre un trajet multimodal. Développement, hébergement et build de l'application.",
    },
    image: "/image/image_cfm.png",
    leftimage: "/image/engie/LEFT_pres.png",
    component: pmr,
    sections: [
      { id: "introduction", label: "Introduction" },
      { id: "decouverte", label: "Découverte" },
      { id: "missions", label: "Missions" },
      { id: "resultats", label: "Résultats" },

      { id: "apprentissage", label: "Apprentissage" },
    ],
  },

  taxonsLibrary: {
    background: "linear-gradient(67deg, #CFAFD5 0%, #FBDDD3 50%, #FFF2CF 100%)",
    tagList: ["JavaScript", "PHP"],
    text: {
      minText: "Projet Académique Semestre 1 (2024) - UPEC",
      title: "Bibliothèque de taxons",
      explain:
        "Application web pour créer et gérer ta bibliothèque personnelle de taxons, et explorer celles des autres utilisateurs.",
    },
    image: "/image/taxon.png",
    leftimage: "/image/engie/LEFT_pres.png",
    component: pmr,
  },
};
