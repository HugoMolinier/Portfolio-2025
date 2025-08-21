import React from "react";
import EngiePage from "@/(projects)/DetailProject/EngiePage";
import MultiModal_Travel from "@/(projects)/DetailProject/MultiModal_Travel";
import DashBoard from "@/(projects)/DetailProject/DashBoard";

export type ProjectSlug = "engie" | "MultiModal_Travel" | "Dashboard";

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
    image: "/image/engie/mock.png",
    leftimage: "/image/engie/LEFT_pres.png",
    component: EngiePage,

    sections: [
      { id: "introduction", label: "Introduction" },
      { id: "decouverte", label: "Découverte" },
      { id: "missions", label: "Missions" },
      { id: "resultats-impact", label: "Résultats" },
      { id: "challenges", label: "Challenges et solutions" },
      { id: "apprentissage", label: "Apprentissage" },
      { id: "lien", label: "Lien" },
    ],
  },

  MultiModal_Travel: {
    background: "linear-gradient(67deg, #CDCEED 0%, #D8EAF8 50%, #CBD6AB 100%)",
    tagList: ["Java", "React Native", "ReactJS"],
    text: {
      minText: "Projet Académique Semestre 5 & 6 (2024/2025) - UPEC",
      title: "Trajet multimodal PMR",
      explain:
        "Applications pour PMR et agents pour scanner et suivre un trajet multimodal. Développement, hébergement et build de l'application.",
    },
    image: "/image/MultiModal_Travel/mock.png",
    leftimage: "/image/MultiModal_Travel/LEFT_pres.png",
    component: MultiModal_Travel,
    sections: [
      { id: "introduction", label: "Introduction" },
      { id: "decouverte", label: "Découverte" },
      { id: "missions", label: "Missions" },
      { id: "resultats", label: "Résultats" },
      { id: "améliorations", label: "Améliorations possibles" },
      { id: "apprentissage", label: "Apprentissage" },
      { id: "lien", label: "Lien" },
    ],
  },

  Dashboard: {
    background: "linear-gradient(67deg, #CFAFD5 0%, #FBDDD3 50%, #FFF2CF 100%)",
    tagList: ["JavaScript", "PHP"],
    text: {
      minText: "Projet Académique Semestre 4 (2024) - UPEC",
      title: "Dashboard et API Rest",
      explain:
        "Visualisation des données de la qualité de l'air de la France métropolitaine et outre-mer (Fourni par LCSQA) par un Dashboard",
    },
    image: "/image/Dashboard/mock.png",
    leftimage: "/image/Dashboard/LEFT_pres.png",
    component: DashBoard,
    sections: [
      { id: "introduction", label: "Introduction" },
      { id: "organisation", label: "Organisation" },
      { id: "missions", label: "Conception & Développement" },
      { id: "problèmes", label: "Problèmes rencontrés" },
      { id: "résultats", label: "Résultats & Présentation" },
      { id: "améliorations", label: "Améliorations possibles" },
      { id: "apprentissage", label: "Apprentissage" },
      { id: "lien", label: "Lien" },
    ],
  },
};
