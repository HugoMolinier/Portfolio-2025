import React, { useRef, useEffect } from "react";


const sectionStyle = { paddingTop: 80 };
const imageStyle = { borderRadius: 8, height: "auto", width: "25%" };
const imgContainerStyle = { display: "flex", padding: "8px 5%", gap: "10%" };

const EngiePage = () => {

const myRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
  if (vidRef.current) {
    vidRef.current.play().catch(err => console.log(err));
  }
}, []);

return (
  <main>
    <section id="introduction">
      <p>
        Dans le cadre de ma 3ᵉ année de BUT Informatique, nous avons travaillé,
        en équipe de 6 puis 8 personnes, sur un projet complet visant à
        faciliter les trajets multimodaux pour les personnes à mobilité réduite
        (PMR) et à fournir aux agents un outil de suivi en temps réel.
      </p>
      <p>Le projet s’est déroulé sur deux semestres :</p>
      <ul>
        <li>
          <strong>Semestre 1</strong> : conception et développement des
          applications (PMR et Agent), ainsi que du back-end, en collaboration
          avec une première équipe.
        </li>
        <li>
          <strong>Semestre 2</strong> : changement d’équipe, prise en main d’un
          back-end différent pour assurer sa maintenance, y apporter des
          améliorations et déployer le projet avec ajout de nouvelles
          fonctionnalités.
        </li>
      </ul>
      <p>
        L’organisation agile se caractérisait par un rôle de Scrum Master
        tournant : chaque membre de l’équipe endossait ce rôle sur une période
        donnée.
      </p>
      <p>
        Nous avons assumé à la fois les rôles de MOE (Maîtrise d’Œuvre), en
        charge du développement, et de MOA (Maîtrise d’Ouvrage), responsable de
        la validation des livrables. L’évaluation portait sur notre capacité à
        gérer simultanément ces deux fonctions, ce qui nous a permis de
        maîtriser l’ensemble du cycle de vie du projet.
      </p>
    </section>
    <section id="decouverte" style={sectionStyle}>
      <header style={{ marginBottom: 20 }}>
        <h2>Découverte</h2>
      </header>
      <p>
        Durant le cinquième semestre, j’ai intégré une équipe pour concevoir et
        développer le backend, en participant aussi aux décisions techniques
        pour le front.
      </p>
      <ul>
        <li>
          Nous avons appris à gérer un projet en mode agile avec Scrum Master,
          en utilisant des Kanban, le backlog, les user stories, et en prenant
          en charge les responsabilités de la MOA.
        </li>
      </ul>
      <p>Dans ce rôle, j’ai notamment participé à :</p>
      <ul>
        <li>Identifier et découper les tâches à partir des user stories.</li>
        <li>
          Alimenter et organiser le tableau Kanban pour suivre l’avancement.
        </li>
        <li>
          Préparer et présenter les user stories aux membres de l’équipe et à la
          MOA.
        </li>
        <li>
          Planifier les objectifs de sprint et animer les rituels agiles (daily,
          sprint planning, review, retrospective).
        </li>
      </ul>
      <p>
        Cette organisation m’a permis d’être impliqué non seulement dans la
        production technique, mais aussi dans la gestion de projet et la
        communication inter-équipes.
      </p>
    </section>
    <section id="missions" style={sectionStyle}>
      <header style={{ marginBottom: 20 }}>
        <h2>Semestre 1 : Conception et développement du backend</h2>
      </header>
      <article>
        <p>
          Dans ce projet, de septembre 2024 à janvier 2025, j’ai mis en place
          une architecture Node.js structurée autour de models, middlewares et
          controllers. J’ai développé des services REST couvrant les principaux
          domaines fonctionnels du projet : gestion des utilisateurs,
          réservations, voyages, authentification biométrique, suivi des
          bagages, notifications et assistance PMR. Mon travail a couvert la
          planification, la réalisation technique et la validation, tout en
          garantissant performance et fiabilité.
        </p>
        <header style={{ marginBottom: 20, marginTop: 20 }}>
          <h3>Réflexion et Création de l'ensemble de la base de données</h3>
        </header>
        <p>
          Pour ce projet, j’ai conçu et développé les bases de données et les
          modèles Node.js afin de gérer efficacement les informations liées aux
          PMR et à leurs trajets multimodaux. Les données sensibles et
          structurées, comme les informations personnelles, les handicap et
          transaction de l’e-wallet, sont stockées dans une base SQL.{" "}
          <p>
            En revanche, les données moins structurées et évolutives, telles que
            les voyage et resevation, sont gérées via NoSQL (MongoDB ).
          </p>
        </p>
        <br />
        <p>
          Le projet nécessitait également l’intégration de bases de données
          externes (pour ce projet, nous avons simulé ces bases pour des raisons
          budgétaires) :
        </p>
        <ul>
          <li>Air France</li>
          <li>SNCF / RATP</li>
          <li>FlixBus</li>
          <li>Uber</li>
        </ul>
        <p>
          Pour uniformiser les échanges entre ces différentes bases, nous avons
          utilisé le format Amadeus, le standard officiel de l’industrie du
          voyage.
        </p>

        <img
          src="/image/pmr/Affiche_archi.jpg"
          width="100%"
          style={{ borderRadius: 8 }}
          alt="Aperçu du projet ENGIE"
        />
      </article>
      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>Développement et gestion des middlewares</h3>
        </header>
        <p>
          Dans notre backend, les middlewares jouent un rôle central pour
          garantir la sécurité, la cohérence et la fiabilité du système.
        </p>
        <ul>
          <li>
            <strong>Middleware d’authentification</strong> : gestion des tokens
            pour vérifier que chaque requête provient d’un utilisateur autorisé.
          </li>
          <li>
            <strong>Middleware de session</strong> : persistance sécurisée des
            connexions, garantissant que l’utilisateur reste authentifié sur
            toute la durée de sa session.
          </li>
          <li>
            <strong>Middleware d’erreurs</strong> : uniformisation des réponses
            API et traitement centralisé des exceptions, pour améliorer la
            lisibilité et la fiabilité des retours.
          </li>
        </ul>
        <p>
          Cela a renforcé la sécurité et la fiabilité du backend, tout en
          facilitant l’extension des fonctionnalités et la maintenance du code.
          Une fois fait, il a fallu ajouter ce middlewares à chaque route.
        </p>
      </article>
      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>Mise en place et intégration d’Apache Kafka </h3>
        </header>
        <p>
          Une machine virtuelle dédiée à Kafka est utilisée pour suivre
          l’avancement du voyage et vérifier la prise en charge du passager à
          mobilité réduite (PMR) par un agent. L’application se connecte aux
          topics Kafka dédiés à ces événements, récupère les messages produits
          par les différents services, puis déclenche les traitements
          nécessaires pour : Mettre à jour le statut du voyage et confirmer la
          bonne exécution de l’assistance au PMR.
        </p>
      </article>
      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>Présentation et démonstration</h3>
        </header>
        <p>
          Lors de la journée portes ouvertes organisée par notre IUT, nous avons
          présenté notre projet aux visiteurs, élèves et professeurs à travers
          des démonstrations concrètes. J’ai principalement montré l’application
          mobile pour les voyageurs PMR et les aspects techniques du projet,
          tandis que les autres applications (accompagnants, agents, gestion des
          flux) ont également été exposées. Cette présentation a permis de faire
          découvrir le fonctionnement de la solution et son architecture, et de
          recueillir des retours pour améliorer l’expérience utilisateur.
        </p>

        <img
          src="/image/pmr/presentation.jpg"
          width="100%"
          style={{ borderRadius: 8, margin: 8 }}
          alt="Aperçu du projet ENGIE"
        />
      </article>
      <header style={{ marginBottom: 20, marginTop: 40 }}>
        <h2>Semestre 6 : Maintenance et mise en production</h2>
      </header>
      <p>
        Au cours de ce semestre,de janvier à mi-mars, j’ai dû changer de groupe
        conformément aux consignes, ce qui m’a demandé une forte capacité
        d’adaptation. J’ai pris en charge la maintenance d’un backend existant,
        développé par un autre groupe, ce qui impliquait de comprendre
        rapidement une architecture et un code qui n’étaient pas les miens, et
        d’apporter des corrections et améliorations tout en respectant la
        structure initiale.Ma tache à été la maintenance du backend et le le
        développement de l’APK mobile.
      </p>
      <br />
      <p>
        Contrairement à mon ancien groupe, celui-ci avait tout mis en place avec
        Docker, ce qui m’a permis d’acquérir de nouvelles compétences en
        conteneurisation et déploiement, ainsi que de découvrir une autre façon
        de structurer et déployer un projet.
      </p>
      <img
        src="/image/pmr/Affiche_pipeline.jpg"
        width="100%"
        style={{ borderRadius: 8, margin: 8 }}
        alt="Aperçu du projet ENGIE"
      />
      <br />

      <header style={{ marginBottom: 20, marginTop: 40 }}>
        <h3>Génération de l’APK</h3>
      </header>
      <p>
        Pour générer l’APK, j’ai d’abord réglé les dépendances dans package.json
        afin d’intégrer Expo, React Native et les modules essentiels comme la
        carte, le QR code, la caméra ou le stockage. J’ai ensuite corrigé les
        problèmes spécifiques rencontrés, assurant ainsi le bon fonctionnement
        de l’application et la génération réussie de l’APK. Pour avoir enfin le
        .apk j'ai utilisé EAS (Expo Application Services) pour compiler et
        générer l’APK de manière fiable.
      </p>
      <video
  src="//image/pmr/publicitéCFM.jpg"
  ref={ vidRef }
  muted
  autoPlay
  loop 
/>
    </section>
    <section id="introduction">
      <header style={{ marginBottom: 20, marginTop: 40 }}>
        <h2>Apprentissage</h2>
      </header>
      <p>
        Au-delà des aspects techniques (React Native, Expo, EAS pour la
        génération d’APK, Docker pour la conteneurisation et le déploiement), ce
        projet m’a surtout permis de mieux comprendre la distinction entre la
        MOA (Maîtrise d’Ouvrage) et la MOE (Maîtrise d’Œuvre), ainsi que la
        manière dont elles interagissent dans la gestion de projet. Nous avons
        également appris à préparer et réaliser une présentation type salon, en
        valorisant le projet comme un produit destiné à être exposé et présenté
        à des acteurs extérieurs.
      </p>
    </section>
    <header style={{ marginBottom: 8, marginTop: 40 }}>
      <h3>En Conclusion</h3>
    </header>
    <p>
      Ce projet de trajet multimodal pour personnes à mobilité réduite m’a
      permis d’acquérir une expérience complète sur l’ensemble du cycle de vie
      d’un projet informatique, de la conception au déploiement, en passant par
      la maintenance. J’ai consolidé mes compétences techniques, notamment sur
      Node.js, MongoDB, SQL, React Native, Expo, Docker et Kafka, tout en
      développant une compréhension approfondie des architectures backend et des
      flux de données complexes.
    </p>
    <br />
    <p>
      Au-delà de la technique, ce projet a renforcé mes compétences en gestion
      de projet agile, en communication inter-équipes et en organisation, en
      alternant les rôles de MOA et MOE. Le travail sur des bases existantes, la
      génération d’APK et la présentation aux utilisateurs finaux m’ont permis
      de gagner en adaptabilité, rigueur et autonomie.
    </p>
  </main>
)

};

export default EngiePage;
