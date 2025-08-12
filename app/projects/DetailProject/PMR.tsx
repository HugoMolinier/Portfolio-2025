import React from "react";

const sectionStyle = { paddingTop: 80 };
const imageStyle = { borderRadius: 8, height: "auto", width: "25%" };
const imgContainerStyle = { display: "flex", padding: "8px 5%", gap: "10%" };

const EngiePage = () => (
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
        Durant le premier semestre, j’ai intégré une équipe pour concevoir et
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
        <h2>Missions</h2>
      </header>
      <p>
        Tout au long du projet, j’ai toujours occupé le rôle de développeur
        backend. J’ai contribué à la conception, au développement et à la
        maintenance des services backend, en veillant à leur performance, leur
        fiabilité et leur évolutivité. Voici les principales missions réalisées
        :
      </p>

      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>1er Semestre</h3>
        </header>
        <p>
          Dans le cadre de l’uniformisation de l’interface, j’ai participé à la
          refonte complète des composants d’interface mobile en suivant les
          standards du design system Fluid mis en place chez ENGIE :
        </p>
        <ul>
          <li>
            Recréation complète des composants (boutons, inputs, tags, badges,
            icônes...) selon le design system Fluid.
          </li>
          <li>
            Intégration des Fluid Tokens (couleurs, espacements, tailles) pour
            garantir la cohérence et la compatibilité avec les futurs modes
            (clair/sombre).
          </li>
          <li>
            Ajout de surcouches spécifiques à Vianeo, tout en gardant les
            composants génériques et réutilisables.
          </li>
          <li>Documentation complète + mise en place de tests unitaires.</li>
          <li style={{ listStyle: "none", marginTop: 20 }}>
            <img
              src="/image/engie/image3.png"
              width="80%"
              style={{ borderRadius: 8 }}
              alt="Aperçu du projet ENGIE"
            />
          </li>
        </ul>
        <p>
          Cela a permis d’ajouter des états variés aux composants (pressé, avec
          ou sans icône, différentes variantes et emphases) tout en facilitant
          leur intégration pour les évolutions futures.
        </p>
      </article>

      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>Gestion dynamique des BottomSheets promotionnelles</h3>
        </header>
        <p>
          Pour une campagne promotionnelle, j’ai développé un système de
          BottomSheets dynamiques pouvant être contrôlées à distance, et qui
          s’affichent automatiquement en fonction du contexte utilisateur :
        </p>
        <ul>
          <li>
            Création d’un composant React Native basé sur @gorhom/bottom-sheet
            entièrement configurable et multilingue.
          </li>
          <li>
            Développement d’un système d’affichage contextuel de BottomSheets à
            partir de données récupérées en JSON via un backend AWS.
          </li>
          <li>
            Intégration d’un système de file d’attente pour l’enchaînement
            fluide de plusieurs BottomSheets sur la page home.
          </li>
          <li style={{ listStyle: "none", marginTop: 20 }}>
            <div style={imgContainerStyle}>
              <img
                src="/image/engie/engie_bottom.png"
                alt="BottomSheet 1"
                style={imageStyle}
              />
              <img
                src="/image/engie/engie_bottom2.png"
                alt="BottomSheet 2"
                style={imageStyle}
              />
              <img
                src="/image/engie/engie_bottom3.png"
                alt="BottomSheet 3"
                style={imageStyle}
              />
            </div>
          </li>
        </ul>
        <p>
          Cela a permis de proposer des pop-ups promotionnels personnalisés,
          réactifs au contexte utilisateur, facilement configurables à distance,
          et de gérer efficacement l’affichage simultané et successif de
          l’ensemble des BottomSheets de l’application, garantissant ainsi une
          expérience utilisateur fluide et maîtrisée.
        </p>
      </article>

      <article>
        <header style={{ marginBottom: 20, marginTop: 40 }}>
          <h3>Implémentation du Dark Mode global</h3>
        </header>
        <p>
          Bien que les composants aient été adaptés pour gérer les deux thèmes
          via les design tokens (clair et sombre), les pages de l’application
          utilisaient encore des styles en dur. Mon objectif a donc été
          d’étendre la logique de thème à l’ensemble des écrans afin de garantir
          une expérience utilisateur homogène et cohérente, quel que soit le
          mode choisi.
        </p>
        <ul>
          <li>
            Mise en place d’un provider de thème (React Context) pour appliquer
            automatiquement le bon thème selon les préférences système ou
            utilisateur.
          </li>
          <li>
            Refonte de tous les images pour les passer en svg en exploitant les
            tokens dynamiques.
          </li>
          <li>
            Système intelligent de remplacement des icônes/images selon le thème
            actif.
          </li>
          <li style={{ listStyle: "none", marginTop: 20 }}>
            <div style={imgContainerStyle}>
              <img
                src="/image/engie/engie_dark1.png"
                alt="Dark Mode 1"
                style={imageStyle}
              />
              <img
                src="/image/engie/engie_dark2.png"
                alt="Dark Mode 2"
                style={imageStyle}
              />
              <img
                src="/image/engie/engie_dark3.png"
                alt="Dark Mode 3"
                style={imageStyle}
              />
            </div>
          </li>
        </ul>
        <p>
          Cette modernisation a permis de livrer une application mobile plus
          esthétique, plus accessible et plus alignée avec les standards
          d’expérience utilisateur actuels.
        </p>
      </article>
    </section>
    <section id="resultats-impact" style={{ paddingTop: 60 }}>
      <header style={{ marginBottom: 20 }}>
        <h2>Résultats</h2>
      </header>
      <p>
        Les améliorations apportées ont significativement transformé
        l’application Vianeo. L’interface est désormais plus cohérente, moderne
        et agréable, ce qui a nettement réduit les retours négatifs liés à
        l’ergonomie.
      </p>
      <p>
        Tous mes travaux sont déployés en production, garantissant ainsi une
        amélioration directe de l’application, cependant, la fonctionnalité du
        Dark Mode est actuellement activée sous feature flag, permettant un
        déploiement progressif et contrôlé.
      </p>
    </section>

    <section id="challenges" style={{ paddingTop: 60 }}>
      <header style={{ marginBottom: 20 }}>
        <h2>Challenges et solutions</h2>
      </header>
      <p>
        Lors de ce stage, j’ai été confronté à plusieurs défis techniques
        importants, pour lesquels j’ai dû concevoir et mettre en place des
        solutions efficaces afin d’assurer une expérience utilisateur optimale
        et une architecture robuste.
      </p>

      <article style={{ marginTop: 20 }}>
        <header style={{ marginBottom: 8 }}>
          <h3>Synchronisation des BottomSheets</h3>
        </header>
        <p>
          J’ai dû concevoir un système de file d’attente pour afficher plusieurs
          promotions successivement sans bloquer l’expérience utilisateur. Cette
          solution a permis un affichage fluide et sans conflit.
        </p>
      </article>

      <article style={{ marginTop: 20 }}>
        <header style={{ marginBottom: 8 }}>
          <h3>Gestion du Dark Mode</h3>
        </header>
        <p>
          Le code initial mélangeait styles statiques et dynamiques. J’ai
          centralisé la logique de thème via React Context et refondu tous les
          styles pour une homogénéité parfaite.
        </p>
      </article>
    </section>

    <section id="apprentissage" style={{ paddingTop: 60 }}>
      <header style={{ marginBottom: 20 }}>
        <h2>Apprentissage</h2>
      </header>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>
          Ce projet m’a permis d’approfondir ma maîtrise de React Native,
          notamment les hooks, les composants dynamiques, la navigation et la
          gestion du thème. J’ai développé une meilleure compréhension des
          design systems comme Fluid, et des enjeux liés au développement à
          l’échelle. J’ai aussi travaillé pour la première fois en méthode
          Agile, avec la gestion de backlog, des sprints réguliers et des
          échanges constants avec des profils variés. Ce contexte m’a permis de
          renforcer mon autonomie, ma rigueur, ainsi que mon sens du produit.
        </p>
        <article style={{ marginTop: 20 }}>
          <header style={{ marginBottom: 8 }}>
            <h3>En Conclusion</h3>
          </header>
          <p>
            Ce stage m’a permis de contribuer à une application utilisée
            quotidiennement par plusieurs milliers d’utilisateurs. Les
            améliorations apportées ont renforcé la stabilité et l’ergonomie de
            l’app, tout en posant les bases d’une évolutivité durable grâce au
            design system Fluid. Ce projet m’a aussi donné une expérience
            concrète de la collaboration en équipe Agile, ainsi qu’une autonomie
            accrue dans la gestion de tâches complexes et de découvrir la
            gestion de plusieurs environnements (prod, préprod et
            développement).
          </p>
        </article>
      </div>
    </section>
  </main>
);

export default EngiePage;
