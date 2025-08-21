import React, { useRef, useEffect } from "react";

const sectionStyle = { paddingTop: 52 };

const Dashboard = () => {
  const vidRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (vidRef.current) {
      vidRef.current.play().catch((err) => console.log(err));
    }
  }, []);

  return (
    <main>
      <section id="introduction">
        <p>
          Dans le cadre de ma 2ᵉ année de BUT Informatique, j’ai travaillé en
          équipe sur un projet complet visant à concevoir une application
          permettant de visualiser en temps réel la qualité de l’air en France.
          L’objectif était de créer un Dashboard interactif connecté à une API
          REST, capable de présenter des données ouvertes issues des
          associations agréées de surveillance de la qualité de l’air (AASQA) et
          regroupées par le LCSQA.
        </p>
        <br />
        <p>
          Le projet a été réalisé entre février et avril 2024, dans une logique
          de Service-Oriented Architecture (SOA), séparant le back-end (API) et
          le front-end (Dashboard).
        </p>
      </section>
      <section id="organisation" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Organisation</h2>
        </header>
        <p>
          Nous avons travaillé en méthodologie agile, avec un suivi des tâches
          via GitHub. Chaque membre de l’équipe participait au développement,
          mais avec une répartition claire :
        </p>
        <ul>
          <li>Conception et développement de l’API REST.</li>
          <li>Réalisation du Dashboard et de son interface interactive.</li>
          <li>Intégration et optimisation des performances.</li>
        </ul>
      </section>
      <section id="missions" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Conception & Développement</h2>
        </header>
        <p>
          J’ai participé à la mise en place de l’API Node.js / Express, avec
          pour rôle principal de concevoir les endpoints et de gérer la
          transformation des données brutes (CSV et XML) en JSON exploitable.
          L’API a été documentée via Swagger et optimisée pour réduire fortement
          les temps de réponse.
        </p>
        <br />
        <p>
          Côté Dashboard, nous avons développé une interface claire et
          interactive en JavaScript, HTML et CSS, permettant de visualiser en
          temps réel les évolutions de la qualité de l’air. L’utilisateur
          pouvait personnaliser son expérience grâce à des filtres (dates,
          zones, polluants) et accéder à des rapports exportables en PDF.
        </p>
        <br />
        <p>Fonctionnalités clés développées :</p>
        <ul>
          <li>
            Graphiques d’évolution et de dépassement par rapport aux seuils de
            l’OMS.
          </li>
          <li>Jauges de dépassement par rapport aux seuils de l’OMS.</li>
          <li>Carte interactive des stations AASQA.</li>
          <li>
            Données météo et direction des vents (via Earth.nullschool.net).
          </li>
          <li>
            Filtres de sélection (plage de dates, polluants, zones
            géographiques).
          </li>
          <li>Génération de rapports PDF complets.</li>
        </ul>
        <img
          src="/image/Dashboard/api.png"
          width="100%"
          style={{ borderRadius: 8, margin: 8 }}
          alt="Dashboard Presentation filtre"
        />
      </section>
      <section id="problèmes" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Problèmes rencontrés</h2>
        </header>
        <p>
          Le développement a soulevé plusieurs défis techniques. La gestion de
          grands volumes de données (CSV quotidiens) a nécessité une
          optimisation côté serveur, sans quoi l’expérience utilisateur était
          trop lente. Nous avons également dû adapter certaines librairies
          JavaScript initialement prévues pour un usage serveur, notamment pour
          l’export PDF. Enfin, certaines API externes (météo) présentaient des
          limitations, ce qui nous a conduit à envisager des alternatives
          payantes.
        </p>
      </section>
      <section id="résultats" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Résultats & Présentation</h2>
        </header>
        <p>Le projet a abouti à un Dashboard complet, capable de :</p>
        <ul>
          <li>Afficher les concentrations de polluants en temps réel.</li>
          <li>Générer des alertes de dépassement de seuils.</li>
          <li>Proposer une cartographie et des statistiques détaillées.</li>
          <li>Exporter les résultats sous forme de rapports PDF.</li>
        </ul>
        <p>
          Lors de la soutenance, nous avons présenté l’architecture de
          l’application ainsi que des démonstrations concrètes des
          fonctionnalités, mettant en avant la fluidité et la fiabilité du
          système.
        </p>
        <img
          src="/image/Dashboard/dark_dashboard.png"
          width="100%"
          style={{ borderRadius: 8, margin: 8 }}
          alt="Dashboard Presentation"
        />
      </section>
      <section id="améliorations" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Améliorations possibles</h2>
        </header>
        <p>
          Même si le projet est fonctionnel, certaines améliorations
          permettraient de le rendre plus abouti et réellement prêt à l’usage.
          Le design de l’interface, encore trop basique, gagnerait à être
          modernisé. De plus, certains parcours utilisateurs manquent de clarté,
          ce qui rend l’expérience parfois confuse ; une refonte de l’UX serait
          donc nécessaire. Enfin, l’application pourrait être optimisée pour une
          meilleure ergonomie mobile avec un affichage responsive adapté aux
          différents supports.
        </p>
      </section>
      <section id="apprentissage" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Apprentissage</h2>
        </header>
        <p>
          Ce projet m’a permis de consolider mes compétences techniques et
          organisationnelles :
        </p>
        <ul>
          <li>
            <strong>Back-end</strong> : conception et optimisation d’API REST
            (Node.js, Express, Swagger).
          </li>
          <li>
            <strong>Front-end</strong> : développement d’interfaces interactives
            (JavaScript, HTML, CSS).
          </li>
          <li>
            <strong>Traitement de données</strong> : manipulation et
            transformation de fichiers CSV/XML en JSON.
          </li>
          <li>
            <strong>Optimisation</strong> : amélioration des performances
            serveur et gestion de gros volumes de données.
          </li>
          <li>
            <strong>Méthodologie</strong> : travail en équipe agile avec GitHub,
            gestion du code et résolution collaborative des problèmes.
          </li>
        </ul>
        <header style={{ marginBottom: 8, marginTop: 40 }}>
          <h3>En Conclusion</h3>
        </header>
        <p>
          Cette expérience a été une véritable immersion dans le cycle complet
          de développement d’une application web, depuis l’analyse des besoins
          jusqu’à la mise en place d’une solution fonctionnelle. J’ai
          particulièrement progressé sur la structuration d’une architecture API
          + Dashboard, l’optimisation des performances et la gestion de projet
          en équipe.
        </p>
        <br />
        <p>
          Au-delà de la technique, ce projet a renforcé mes compétences en
          gestion de projet agile, en communication inter-équipes et en
          organisation, en alternant les rôles de MOA et MOE. Le travail sur des
          bases existantes, la génération d’APK et la présentation aux
          utilisateurs finaux m’ont permis de gagner en adaptabilité, rigueur et
          autonomie.
        </p>
      </section>

      <section id="lien" style={sectionStyle}>
        <header style={{ marginBottom: 20 }}>
          <h2>Lien</h2>
        </header>
        <div
          style={{
            gap: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <a
            href="https://github.com/HugoMolinier/SAE-DashBoard-Polluant-Meteo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              textDecoration: "none",
            }}
          >
            <img
              src="/image/icons/other/github.svg"
              alt="GitHub"
              style={{ width: 30, height: 30 }}
            />
            <span className="subtextBoldlink" style={{ fontSize: "14px" }}>
              Projet Semestre 4 : DashBoard qualité de l'air en France
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
