"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section
      id="hero"
      className="section Projectsection"
      style={{
        maxWidth: "880px",
        position: "relative",
        padding: "100px  0px 160px 0px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        <div
          style={{
            display: "flex",
            paddingRight: "24px",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          <h1 style={{ padding: "0 0 0px 0" }}>
            Salut, je suis Molinier Hugo !
          </h1>
          <img
            src="/image/pictureOfMe.png"
            alt="Logo"
            className="responsive-image"
          />
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h5 style={{ color: "rgba(4, 13, 74, 0.5)", width: "30%" }}>
            Qui suis-je
          </h5>
          <p style={{ width: "70%" }}>
            Actuellement étudiant à l’Université Le Havre Normandie en Master
            Informatique – Ingénierie du Web, des Objets Communicants et des
            Systèmes complexes (IWOCS), après avoir obtenu mon BUT Informatique,
            je suis passionné par le développement full stack et embarqué. Je
            m’intéresse particulièrement aux technologies qui permettent de
            créer des solutions fiables et performantes dans des environnements
            critiques, comme le médical ou l’IoT.
          </p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h5 style={{ color: "rgba(4, 13, 74, 0.5)", width: "30%" }}>
            En Recherche
          </h5>

          <p style={{ width: "70%" }}>
            Je suis actuellement à la recherche d’un stage à l’étranger d’une
            durée de 4 à 6 mois. Mon objectif est de mettre en pratique mes
            compétences en développement web et embarqué dans un environnement
            international, tout en découvrant de nouvelles cultures et méthodes
            de travail. Je suis particulièrement intéressé par les entreprises
            innovantes dans le domaine de la santé, de l’IoT et des technologies
            stratégiques, où je pourrais contribuer activement à des projets
            concrets et enrichissants.
          </p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h5 style={{ color: "rgba(4, 13, 74, 0.5)", width: "30%" }}>
            Centres d’intérêt
          </h5>
          <p style={{ width: "70%" }}>
            En dehors de l’informatique, je suis passionné par la science et la
            diététique. J’aime comprendre comment la nutrition et l’activité
            physique peuvent optimiser la santé et la performance. Je pratique
            la musculation, le piano et je consacre également du temps à la
            lecture pour enrichir mes connaissances et nourrir ma curiosité.
          </p>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <h5 style={{ color: "rgba(4, 13, 74, 0.5)", width: "30%" }}>
            Objectif Futur
          </h5>
          <p style={{ width: "70%" }}>
            Je souhaite me spécialiser dans l’Intelligence Artificielle et
            l’IoT, en combinant le développement full stack et embarqué. Mon
            ambition est de créer des solutions intelligentes, fiables et
            performantes pour des environnements critiques, comme le secteur
            militaire ou la santé.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
