export type Lang = 'fr' | 'en';

export const languages: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
};

/** Locale-agnostic route slugs (EN pages live under /en/<slug>). */
export const routes = {
  home: '',
  expertise: 'expertise',
  projets: 'projets',
  parcours: 'parcours',
  apropos: 'a-propos',
  contact: 'contact',
  legal: 'mentions-legales',
} as const;

export const ui = {
  fr: {
    meta: {
      title: 'Julien Herr — CTO hands-on pour plateformes IRVE & B2B critiques',
      description:
        "CTO hands-on pour opérateurs IRVE et plateformes B2B critiques : OCPP, OCPI, supervision, facturation, ERP, architecture et delivery. 20+ ans, du dev au CTO. IA utilisée comme accélérateur de delivery.",
    },
    cta: "Discuter d'un projet",
    themeAria: 'Basculer le thème clair / sombre',
    themeLabelToDark: 'Sombre',
    themeLabelToLight: 'Clair',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    nav: [
      { label: 'Expertise', route: 'expertise' },
      { label: 'Projets', route: 'projets' },
      { label: 'Parcours', route: 'parcours' },
      { label: 'À propos', route: 'a-propos' },
      { label: 'Contact', route: 'contact' },
    ],
    labels: { role: 'Rôle', impact: 'Impact' },

    home: {
      hero: {
        kicker: 'CTO hands-on · plateformes IRVE & B2B critiques',
        title: 'CTO hands-on pour plateformes IRVE et B2B critiques.',
        promise:
          "J'aide les opérateurs de mobilité électrique, PME et startups à reprendre, fiabiliser ou construire leurs systèmes critiques : OCPP, OCPI, supervision, facturation, ERP, architecture et delivery.",
        ctaPrimary: "Discuter d'un problème de plateforme",
        ctaSecondary: 'Voir les cas concrets',
        ctaTertiary: 'Télécharger mon CV',
        credibility:
          "20+ ans · du dev au CTO · Java / Kotlin / TypeScript · OCPP / OCPI · IA comme accélérateur de delivery · Strasbourg / Remote",
        graphCenter: 'Plateforme',
      },
      pos: {
        kicker: 'Le fil rouge',
        text: "Les projets complexes échouent rarement sur la technique. Ils échouent quand le métier, le produit et le code cessent de se parler. Mon rôle : les faire avancer dans le même sens.",
        sub: "Cible première : opérateurs IRVE et plateformes CPO / eMSP. Puis PME et startups B2B avec une plateforme critique. L'IA, je l'utilise comme accélérateur de delivery — pas comme une promesse à part.",
      },
      prob: {
        kicker: 'Problèmes résolus',
        title: 'Ce que je sais résoudre',
        items: [
          { n: '01', title: 'Construire un produit technique complexe', text: "Transformer une idée métier, une contrainte réglementaire ou un besoin opérationnel en architecture, produit et feuille de route exécutables." },
          { n: '02', title: 'Reprendre une plateforme existante', text: "Stabiliser une architecture, réduire la dette technique, clarifier les flux et remettre les équipes en capacité de livrer." },
          { n: '03', title: 'Faire le lien entre métiers et développeurs', text: "Traduire les besoins des opérations, du support, de la finance et du produit en fonctionnalités réellement exploitables." },
          { n: '04', title: 'Structurer une équipe ou une transition', text: "Assurer un rôle de CTO ou Tech Lead de transition, préparer une reprise d'équipe, recruter, documenter et sécuriser la continuité." },
        ],
      },
      exp: {
        kicker: 'Spécialités',
        title: 'Trois spécialités, une même façon de travailler',
        items: [
          { title: 'Électromobilité & énergie', text: "Plateformes CPO et eMSP, OCPP 1.6 et 2.x, OCPI et roaming, tarification, facturation, supervision, paiement et intégration SI — je maîtrise toute la chaîne, de la borne jusqu'à l'usage.", tags: ['OCPP', 'OCPI', 'Roaming', 'CPO / eMSP'] },
          { title: 'Ingénierie & leadership', text: "Du dev au CTO, en passant par tech lead. Architecture (DDD, hexagonal, event-driven), reprise de legacy, structuration d'équipe — et contribution directe sur le code critique.", tags: ['Du dev au CTO', 'DDD', 'Hexagonal', 'Legacy'] },
          { title: "Accélérer le delivery avec l'IA", text: "J'utilise l'IA agentique pour livrer plus vite avec des équipes réduites, sans sacrifier la qualité — agents de dev, cadrage, documentation et automatisation. Un multiplicateur de delivery, pas une activité à part.", tags: ['Agents', 'Delivery', 'Cas d’usage', 'Équipes'] },
        ],
        techTitle: 'Technologies',
        techs: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'NestJS', 'Nuxt', 'PostgreSQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
      },
      chainTeaser: {
        kicker: 'Chaîne de valeur IRVE',
        title: "De la borne à l'usage",
        text: "Je maîtrise chaque maillon de la chaîne de recharge : la borne, les protocoles OCPP/OCPI, la supervision CPO, le roaming et l'usage côté eMSP — preuves à l'appui.",
        link: 'Voir la chaîne complète',
      },
      proj: {
        kicker: 'Projets mis en avant',
        title: 'Des plateformes en production',
        link: 'Voir tous les projets',
      },
      modes: {
        kicker: 'Offres',
        title: 'Quatre façons de démarrer',
        note: 'Durées indicatives — ajustées à votre contexte.',
        items: [
          { title: 'Audit & plan de reprise', duration: '5 à 10 jours', text: "Comprendre une plateforme, cartographier les flux, identifier les risques et sortir un plan 30/60/90 actionnable avec quick wins." },
          { title: 'CTO / Tech Lead de transition', duration: '1 à 3 j/semaine', text: "Sécuriser la continuité technique, arbitrer, structurer l'équipe, recruter et relancer le delivery." },
          { title: 'Cadrage produit & architecture IRVE', duration: 'Mission courte', text: "Transformer un besoin CPO / eMSP / OCPP / OCPI / billing en architecture cible et trajectoire MVP → production." },
          { title: 'Delivery hands-on', duration: 'Mission ciblée', text: "Livrer ou débloquer un composant critique en Java, Kotlin ou TypeScript, accéléré par l'IA agentique." },
        ],
      },
      signals: {
        kicker: 'Quand me contacter',
        title: 'Je peux vous aider si…',
        items: [
          'votre plateforme fonctionne, mais devient difficile à faire évoluer ;',
          "vos flux métier, facturation ou supervision ne sont pas assez fiables ;",
          "votre équipe livre moins vite à cause de la dette technique ;",
          'vous devez cadrer un produit OCPP / OCPI / billing / smart charging ;',
          "vous avez besoin d'un CTO hands-on sans recruter immédiatement ;",
          "vous voulez utiliser l'IA pour accélérer le delivery sans créer du chaos.",
        ],
      },
      path: {
        kicker: 'Parcours',
        title: '20+ ans à construire et reprendre des systèmes',
        link: 'Voir le parcours détaillé',
      },
      final: {
        title: 'Un produit à construire, une plateforme à reprendre, une équipe à structurer ?',
        text: "Parlons-en. CTO de transition, audit technique, cadrage produit, expertise IRVE ou mission de développement.",
        ctaPrimary: "Discuter d'un projet",
        ctaSecondary: 'Télécharger mon CV',
      },
    },

    expertise: {
      kicker: 'Expertise',
      title: 'Trois spécialités, une compétence transverse',
      intro: "Je n'aborde jamais la technique pour elle-même : chaque choix d'architecture sert un problème métier, une contrainte d'exploitation ou un enjeu de fiabilité. Première spécialité : la maîtrise de toute la chaîne IRVE, de la borne jusqu'à l'usage. Produit & architecture est le fil rouge qui relie mes trois spécialités.",
      note: 'Les technologies restent secondaires par rapport aux problèmes métier résolus.',
      chain: {
        num: '01',
        title: 'Électromobilité & énergie',
        tagline: "De la borne à l'usage : j'ai construit chaque maillon de la chaîne IRVE, en production.",
        links: [
          { num: '01', title: 'La borne', tagline: "Référentiel d'équipements, simulation et supervision matérielle.", status: '', proofs: [
            { name: 'evsedb — référentiel EVSE', href: 'https://evsedb.com', prop: false },
            { name: 'ocpp-cp-simulator', href: 'https://github.com/shiv3/ocpp-cp-simulator', prop: false },
            { name: 'awesome-ev-charging', href: 'https://github.com/juherr/awesome-ev-charging', prop: false },
          ] },
          { num: '02', title: 'Protocoles (OCPP & OCPI)', tagline: "Je parle et j'outille les protocoles qui font tenir la chaîne.", status: '', proofs: [
            { name: 'OCPP 1.6 / 2.x', href: '', prop: false },
            { name: 'ocpp-toolkit', href: 'https://github.com/izivia/ocpp-toolkit', prop: false },
            { name: 'ocpi-toolkit', href: 'https://github.com/izivia/ocpi-toolkit', prop: false },
            { name: 'ocpp-gateway', href: 'https://github.com/juherr/ocpp-gateway', prop: false },
          ] },
          { num: '03', title: 'Supervision / CPO (CSMS)', tagline: 'Exploiter, superviser, tarifer et facturer un parc de bornes.', status: '', proofs: [
            { name: 'SteVe — contributions & déploiement', href: 'https://github.com/steve-community/steve', prop: false },
            { name: 'CSMS marque blanche', href: '', prop: true },
            { name: 'Supervision bornes & assets télécom (modem/SIM)', href: '', prop: true },
            { name: 'Moteur de tarification / valorisation', href: '', prop: true },
            { name: 'Intégration CRM/ERP (Odoo)', href: '', prop: true },
          ] },
          { num: '04', title: "Pilotage d'énergie & smart charging", tagline: 'Prévision de consommation et optimisation de la charge.', status: 'exploration', proofs: [
            { name: 'Prévision de consommation', href: '', prop: false },
            { name: 'Optimisation de charge', href: '', prop: false },
          ] },
          { num: '05', title: 'Roaming / OCPI', tagline: 'Interopérabilité et itinérance entre opérateurs.', status: '', proofs: [
            { name: 'ocpi.fyi — doc de référence', href: 'https://ocpi.fyi', prop: false },
            { name: 'open-idro-directory — identifiants roaming', href: 'https://idro.juherr.dev/', prop: false },
            { name: 'OCPI marque blanche (gateway / cache)', href: '', prop: true },
          ] },
          { num: '06', title: "eMSP / l'usage", tagline: 'Côté conducteur et gestionnaire de flotte : payer et utiliser la charge.', status: '', proofs: [
            { name: 'Paiement CB (Stripe) + QR code', href: '', prop: true },
            { name: 'Site de paiement par abonnement', href: '', prop: true },
            { name: 'Portail gestionnaire de flotte', href: '', prop: true },
          ] },
        ],
      },
      axes: [
        { num: '02', title: 'Ingénierie & leadership', text: "La chaîne ci-dessus, c'est mon build : conception, architecture et reprise de bout en bout — du dev au CTO.", groups: [
          { label: 'Conception & architecture', proofs: [
            { name: 'Architecture des plateformes EV & des agents IA', href: '', prop: true },
            { name: 'DDD · hexagonal · event-driven', href: '', prop: false },
            { name: 'Reprise de legacy', href: '', prop: false },
          ] },
          { label: 'Leadership', proofs: [
            { name: 'Du dev au CTO, via tech lead', href: '', prop: false },
            { name: "Structuration & reprise d'équipe", href: '', prop: false },
          ] },
        ] },
        { num: '03', title: 'IA dans les organisations', text: "Je fais tourner mon activité sur des agents que je construis — la meilleure preuve que je sais mettre l'IA au travail.", groups: [
          { label: 'Ops', proofs: [
            { name: 'Agent homelab multi-cloud — monitoring/alerting en IaC (OpenTofu)', href: '', prop: true },
          ] },
          { label: 'Dev', proofs: [
            { name: 'Agents product & tech — backlog & features', href: '', prop: true },
          ] },
          { label: 'Business', proofs: [
            { name: 'Pipeline de prospection de missions', href: '', prop: true },
          ] },
          { label: 'Produits en autonomie IA', proofs: [
            { name: 'kill-the-news', href: 'https://kill-the.news/', prop: false },
            { name: 'Wishlist', href: 'https://github.com/juherr/Wishlist', prop: false },
          ] },
        ] },
      ],
      techTitle: 'Technologies',
      techText: 'Une stack éprouvée, choisie pour sa robustesse et sa maintenabilité — transverse aux trois spécialités, au service du produit.',
      tech: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'Nuxt', 'NestJS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
    },
    community: {
      kicker: 'Communauté & open source',
      title: 'Ce que je porte en public',
      intro: 'Au-delà des missions client — une crédibilité publique et durable.',
      items: [
        { name: 'TestNG', role: 'Lead', desc: 'Framework de test Java de référence, utilisé par des milliers de projets.', href: 'https://github.com/testng-team/testng' },
        { name: 'JUG de Strasbourg', role: 'Co-fondateur · depuis 2011', desc: "Communauté Java d'Alsace : meetups et partage technique.", href: 'https://elsassjug.org/' },
        { name: 'Agile Tour Strasbourg', role: 'Co-organisateur · depuis 2011', desc: 'La conférence agile annuelle de la région.', href: 'https://agilestrasbourg.fr/' },
        { name: 'Open source', role: 'Contributeur', desc: 'Contributions régulières à de nombreux projets de l’écosystème.', href: 'https://github.com/juherr' },
      ],
    },

    projets: {
      kicker: 'Projets',
      title: 'Des études de cas, pas une liste de logos',
      intro: 'Sélection de plateformes et de projets représentatifs, du CSMS en production au registre public open data.',
      ficheKicker: "Exemple de fiche d'étude de cas",
      caseStudyCta: "Voir l'étude",
    },

    parcours: {
      kicker: 'Parcours',
      title: '20+ ans à construire, reprendre et fiabiliser des systèmes',
      intro: "Une lecture éditoriale plutôt qu'un CV brut : ce que j'ai fait, dans quel contexte, et avec quel impact.",
    },

    apropos: {
      kicker: 'À propos',
      title: 'Un CTO qui reste proche du code et du terrain',
      photoTag: 'Julien Herr · Strasbourg',
      paras: [
        "Je considère que l'architecture, le produit et l'exploitation ne peuvent pas être correctement pilotés sans rester proche du code, des utilisateurs et des contraintes réelles du terrain.",
        "C'est pourquoi je reste hands-on : je conçois, je décide, mais je contribue aussi directement à la réalisation. C'est la meilleure façon de garder des choix techniques honnêtes et un produit réellement utilisable.",
      ],
      quote: 'Mon rôle consiste souvent à relier des mondes qui se comprennent mal : direction, produit, opérations, finance, support et développement.',
      valuesTitle: 'Ce qui guide mon travail',
      values: [
        { title: 'Pragmatisme', text: "Résoudre le vrai problème, dans le contexte réel, plutôt que la solution idéale sur le papier." },
        { title: 'Simplicité', text: "Préférer l'architecture la plus simple qui tienne la charge et reste maintenable." },
        { title: 'Sobriété architecturale', text: "Refuser la complexité inutile : chaque couche doit justifier son existence." },
        { title: 'Sens du produit', text: "Garder l'utilisateur et l'usage réel au centre des décisions techniques." },
        { title: 'Orientation résultat', text: "Livrer ce qui crée de la valeur, et le mettre réellement en production." },
        { title: 'Proximité terrain', text: 'Rester au contact des opérations, du support et des utilisateurs finaux.' },
      ],
    },

    contact: {
      kicker: 'Contact',
      title: 'Parlons de votre projet',
      intro: "Besoin d'un CTO de transition, d'un audit, d'un cadrage ou d'une expertise IRVE ? En 5 lignes : contexte, problème, urgence, stack, objectif. Je reviens vers vous rapidement.",
      subjectsTitle: 'Sujets fréquents',
      subjects: ['CTO / Tech Lead de transition', 'Audit technique', 'Cadrage produit', 'Reprise de plateforme', 'Expertise IRVE', 'Mission de développement', 'Conseil en architecture'],
      frameTitle: "Cadre d'intervention",
      frame: [
        'Missions fractional (1–3 j/sem) ou mission courte — pas de temps plein',
        'Durée minimale : environ 1 mois',
        'Remote majoritaire · base Strasbourg / Alsace · France & Europe',
        'Cible : opérateurs IRVE / énergie, puis PME & startups B2B à plateforme critique',
        'Échanges en français · anglais écrit technique courant',
        "Hors cible : régie pure sans enjeu d'architecture, projets sans dimension produit",
      ],
      cvLabel: 'Mon CV',
      fName: 'Nom', phName: 'Votre nom',
      fEmail: 'Email', phEmail: 'vous@entreprise.com',
      fSubject: 'Sujet',
      fMessage: 'Message', phMessage: 'Décrivez votre besoin, votre contexte et vos délais…',
      messageTemplate: "Bonjour Julien,\n\nNous avons besoin d'aide sur [plateforme / équipe / produit].\n\nContexte :\nProblème principal :\nObjectif dans les 3 prochains mois :\nStack actuelle :\nDisponibilité pour échanger :",
      send: 'Envoyer le message',
      formNote: 'Le formulaire ouvre votre messagerie (mailto). Aucune donnée stockée. Vous pouvez aussi écrire directement à ' + 'l’adresse ci-contre.',
      sentTitle: 'Message prêt à partir',
      sentText: 'Votre messagerie vient de s’ouvrir avec le message pré-rempli.',
    },

    legal: {
      kicker: 'Légal',
      title: 'Mentions légales',
      updated: 'Dernière mise à jour : 22 juin 2026',
      sections: [
        { heading: 'Éditeur du site', body: [
          'Dénomination : Herr Engineering',
          'Forme juridique : SASU (société par actions simplifiée unipersonnelle)',
          'Capital social : 1 000 €',
          'Siège social : 1 rue de la Colline, 67210 Obernai, France',
          'SIRET : 999 428 436 00011',
          'RCS : Saverne · 999 428 436',
          'N° TVA intracommunautaire : FR91 999 428 436',
          'Directeur de la publication : Julien Herr',
          'Contact : me@juherr.dev',
        ] },
        { heading: 'Hébergement', body: [
          'Le site est hébergé par GitHub, Inc.',
          '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis — github.com',
        ] },
        { heading: 'Propriété intellectuelle', body: [
          'Sauf mention contraire, le contenu de ce site (textes, structure, éléments graphiques) est la propriété de Herr Engineering. Le code source du site est publié en open source — voir le dépôt lié en pied de page.',
        ] },
        { heading: 'Données personnelles', body: [
          'Ce site n’utilise aucun cookie de suivi ni outil de mesure d’audience.',
          'Le formulaire de contact ouvre votre logiciel de messagerie (mailto) : aucune donnée n’est enregistrée par le site. Les informations transmises par email (nom, adresse email, message) sont traitées dans le seul but de répondre à votre demande, sur la base de l’intérêt légitime, et conservées le temps nécessaire à l’échange.',
          'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données en écrivant à me@juherr.dev.',
        ] },
        { heading: 'Cookies', body: [
          'Aucun cookie de suivi. Seul le choix du thème clair / sombre est conservé localement dans votre navigateur (localStorage), à des fins strictement fonctionnelles.',
        ] },
      ],
    },

    footer: {
      tagline: "CTO hands-on pour plateformes IRVE & B2B critiques — OCPP, OCPI, supervision, facturation, architecture & delivery.",
      loc: 'Strasbourg, Alsace · Remote',
      navTitle: 'Navigation',
      home: 'Accueil',
      connectTitle: 'Contact',
      cvLabel: 'Mon CV',
      legal: 'Mentions légales',
      rights: '© 2026 Julien Herr',
      built: 'Code source',
    },

    notFound: {
      title: 'Page introuvable',
      text: 'Ce lien est mort. Revenons sur la terre ferme.',
      back: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: 'Julien Herr — Hands-on CTO for EV-charging & critical B2B platforms',
      description:
        'Hands-on CTO for EV-charging operators and critical B2B platforms: OCPP, OCPI, monitoring, billing, ERP, architecture and delivery. 20+ years, from dev to CTO. AI used as a delivery accelerator.',
    },
    cta: 'Discuss a project',
    themeAria: 'Toggle light / dark theme',
    themeLabelToDark: 'Dark',
    themeLabelToLight: 'Light',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    nav: [
      { label: 'Expertise', route: 'expertise' },
      { label: 'Projects', route: 'projets' },
      { label: 'Experience', route: 'parcours' },
      { label: 'About', route: 'a-propos' },
      { label: 'Contact', route: 'contact' },
    ],
    labels: { role: 'Role', impact: 'Impact' },

    home: {
      hero: {
        kicker: 'Hands-on CTO · EV-charging & critical B2B platforms',
        title: 'Hands-on CTO for EV-charging and critical B2B platforms.',
        promise:
          'I help EV-charging operators, SMEs and startups take over, harden or build their critical systems: OCPP, OCPI, monitoring, billing, ERP, architecture and delivery.',
        ctaPrimary: 'Discuss a platform problem',
        ctaSecondary: 'See real cases',
        ctaTertiary: 'Download my CV',
        credibility:
          '20+ years · from dev to CTO · Java / Kotlin / TypeScript · OCPP / OCPI · AI as a delivery accelerator · Strasbourg / Remote',
        graphCenter: 'Platform',
      },
      pos: {
        kicker: 'The through-line',
        text: 'Complex projects rarely fail on the technology. They fail when the business, the product and the code stop talking to each other. My job: get them moving in the same direction.',
        sub: 'Primary focus: EV-charging operators and CPO / eMSP platforms. Then SMEs and startups with a critical B2B platform. AI, I use as a delivery accelerator — not as a separate promise.',
      },
      prob: {
        kicker: 'Problems solved',
        title: 'What I know how to solve',
        items: [
          { n: '01', title: 'Build a complex technical product', text: 'Turn a business idea, a regulatory constraint or an operational need into executable architecture, product and roadmap.' },
          { n: '02', title: 'Take over an existing platform', text: 'Stabilise an architecture, reduce technical debt, clarify flows and get teams shipping again.' },
          { n: '03', title: 'Bridge business and engineering', text: 'Translate the needs of operations, support, finance and product into features that are genuinely usable.' },
          { n: '04', title: 'Structure a team or a transition', text: 'Act as interim CTO or Tech Lead, prepare a team handover, recruit, document and secure continuity.' },
        ],
      },
      exp: {
        kicker: 'Specialities',
        title: 'Three specialities, one way of working',
        items: [
          { title: 'E-mobility & energy', text: 'CPO and eMSP platforms, OCPP 1.6 and 2.x, OCPI and roaming, pricing, billing, monitoring, payment and IS integration — I master the whole chain, from the charge point to the usage.', tags: ['OCPP', 'OCPI', 'Roaming', 'CPO / eMSP'] },
          { title: 'Engineering & leadership', text: 'From dev to CTO, via tech lead. Architecture (DDD, hexagonal, event-driven), legacy recovery, team structuring — and direct contribution on critical code.', tags: ['Dev to CTO', 'DDD', 'Hexagonal', 'Legacy'] },
          { title: 'Accelerate delivery with AI', text: "I use agentic AI to ship faster with smaller teams, without sacrificing quality — dev agents, framing, documentation and automation. A delivery multiplier, not a separate activity.", tags: ['Agents', 'Delivery', 'Use cases', 'Teams'] },
        ],
        techTitle: 'Technologies',
        techs: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'NestJS', 'Nuxt', 'PostgreSQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
      },
      chainTeaser: {
        kicker: 'EV-charging value chain',
        title: 'From the charge point to the driver',
        text: 'I master every link in the charging chain: the charge point, the OCPP/OCPI protocols, CPO monitoring, roaming and eMSP-side usage — with proof.',
        link: 'See the full chain',
      },
      proj: {
        kicker: 'Featured projects',
        title: 'Platforms running in production',
        link: 'See all projects',
      },
      modes: {
        kicker: 'Offers',
        title: 'Four ways to start',
        note: 'Indicative durations — tailored to your context.',
        items: [
          { title: 'Audit & recovery plan', duration: '5 to 10 days', text: 'Understand a platform, map the flows, identify the risks and produce an actionable 30/60/90 plan with quick wins.' },
          { title: 'Interim CTO / Tech Lead', duration: '1 to 3 days/week', text: 'Secure technical continuity, make the calls, structure the team, recruit and get delivery moving again.' },
          { title: 'Product & EV-charging architecture framing', duration: 'Short engagement', text: 'Turn a CPO / eMSP / OCPP / OCPI / billing need into a target architecture and an MVP → production path.' },
          { title: 'Hands-on delivery', duration: 'Targeted engagement', text: 'Ship or unblock a critical component in Java, Kotlin or TypeScript, accelerated by agentic AI.' },
        ],
      },
      signals: {
        kicker: 'When to reach out',
        title: 'I can help if…',
        items: [
          'your platform works, but is becoming hard to evolve;',
          'your business, billing or monitoring flows are not reliable enough;',
          'your team ships slower because of technical debt;',
          'you need to frame an OCPP / OCPI / billing / smart-charging product;',
          'you need a hands-on CTO without hiring one right away;',
          'you want to use AI to accelerate delivery without creating chaos.',
        ],
      },
      path: {
        kicker: 'Experience',
        title: '20+ years building and recovering systems',
        link: 'See full experience',
      },
      final: {
        title: 'A product to build, a platform to take over, a team to structure?',
        text: "Let's talk. Interim CTO, technical audit, product framing, EV charging expertise or development work.",
        ctaPrimary: 'Discuss a project',
        ctaSecondary: 'Download my CV',
      },
    },

    expertise: {
      kicker: 'Expertise',
      title: 'Three specialities, one cross-cutting skill',
      intro: 'I never approach technology for its own sake: every architectural choice serves a business problem, an operational constraint or a reliability concern. First speciality: mastery of the whole EV-charging chain, from the charge point to the usage. Product & architecture is the through-line that ties my three specialities together.',
      note: 'Technologies remain secondary to the business problems they solve.',
      chain: {
        num: '01',
        title: 'E-mobility & energy',
        tagline: "From the charge point to the usage: I've built every link in the EV-charging chain, in production.",
        links: [
          { num: '01', title: 'The charge point', tagline: 'Equipment registry, simulation and hardware monitoring.', status: '', proofs: [
            { name: 'evsedb — EVSE registry', href: 'https://evsedb.com', prop: false },
            { name: 'ocpp-cp-simulator', href: 'https://github.com/shiv3/ocpp-cp-simulator', prop: false },
            { name: 'awesome-ev-charging', href: 'https://github.com/juherr/awesome-ev-charging', prop: false },
          ] },
          { num: '02', title: 'Protocols (OCPP & OCPI)', tagline: 'I speak and tool the very protocols that hold the chain together.', status: '', proofs: [
            { name: 'OCPP 1.6 / 2.x', href: '', prop: false },
            { name: 'ocpp-toolkit', href: 'https://github.com/izivia/ocpp-toolkit', prop: false },
            { name: 'ocpi-toolkit', href: 'https://github.com/izivia/ocpi-toolkit', prop: false },
            { name: 'ocpp-gateway', href: 'https://github.com/juherr/ocpp-gateway', prop: false },
          ] },
          { num: '03', title: 'Monitoring / CPO (CSMS)', tagline: 'Operate, monitor, price and bill a fleet of charge points.', status: '', proofs: [
            { name: 'SteVe — contributions & deployment', href: 'https://github.com/steve-community/steve', prop: false },
            { name: 'White-label CSMS', href: '', prop: true },
            { name: 'Charge-point & telecom-asset monitoring (modem/SIM)', href: '', prop: true },
            { name: 'Pricing / valorisation engine', href: '', prop: true },
            { name: 'CRM/ERP integration (Odoo)', href: '', prop: true },
          ] },
          { num: '04', title: 'Energy management & smart charging', tagline: 'Consumption forecasting and charge optimisation.', status: 'exploration', proofs: [
            { name: 'Consumption forecasting', href: '', prop: false },
            { name: 'Charge optimisation', href: '', prop: false },
          ] },
          { num: '05', title: 'Roaming / OCPI', tagline: 'Interoperability and roaming between operators.', status: '', proofs: [
            { name: 'ocpi.fyi — reference docs', href: 'https://ocpi.fyi', prop: false },
            { name: 'open-idro-directory — roaming IDs', href: 'https://idro.juherr.dev/', prop: false },
            { name: 'White-label OCPI (gateway / cache)', href: '', prop: true },
          ] },
          { num: '06', title: 'eMSP / the usage', tagline: 'Driver and fleet-manager side: pay for and use the charge.', status: '', proofs: [
            { name: 'Card payment (Stripe) + QR code', href: '', prop: true },
            { name: 'Subscription payment site', href: '', prop: true },
            { name: 'Fleet-manager portal', href: '', prop: true },
          ] },
        ],
      },
      axes: [
        { num: '02', title: 'Engineering & leadership', text: 'The chain above is my build: design, architecture and recovery end to end — from dev to CTO.', groups: [
          { label: 'Design & architecture', proofs: [
            { name: 'Architecture of the EV platforms & AI agents', href: '', prop: true },
            { name: 'DDD · hexagonal · event-driven', href: '', prop: false },
            { name: 'Legacy recovery', href: '', prop: false },
          ] },
          { label: 'Leadership', proofs: [
            { name: 'From dev to CTO, via tech lead', href: '', prop: false },
            { name: 'Team structuring & handover', href: '', prop: false },
          ] },
        ] },
        { num: '03', title: 'AI in organisations', text: 'I run my own business on agents I build — the best proof that I can put AI to work.', groups: [
          { label: 'Ops', proofs: [
            { name: 'Multi-cloud homelab agent — monitoring/alerting as IaC (OpenTofu)', href: '', prop: true },
          ] },
          { label: 'Dev', proofs: [
            { name: 'Product & tech agents — backlog & features', href: '', prop: true },
          ] },
          { label: 'Business', proofs: [
            { name: 'Engagement-prospecting pipeline', href: '', prop: true },
          ] },
          { label: 'AI-autonomous products', proofs: [
            { name: 'kill-the-news', href: 'https://kill-the.news/', prop: false },
            { name: 'Wishlist', href: 'https://github.com/juherr/Wishlist', prop: false },
          ] },
        ] },
      ],
      techTitle: 'Technologies',
      techText: 'A proven stack, chosen for robustness and maintainability — cutting across all three specialities, in service of the product.',
      tech: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'Nuxt', 'NestJS', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
    },
    community: {
      kicker: 'Community & open source',
      title: 'What I carry in public',
      intro: 'Beyond client engagements — public, long-standing credibility.',
      items: [
        { name: 'TestNG', role: 'Lead', desc: 'The reference Java testing framework, used by thousands of projects.', href: 'https://github.com/testng-team/testng' },
        { name: 'Strasbourg JUG', role: 'Co-founder · since 2011', desc: 'The Alsace Java community: meetups and knowledge sharing.', href: 'https://elsassjug.org/' },
        { name: 'Agile Tour Strasbourg', role: 'Co-organiser · since 2011', desc: "The region's annual agile conference.", href: 'https://agilestrasbourg.fr/' },
        { name: 'Open source', role: 'Contributor', desc: 'Regular contributions to many projects across the ecosystem.', href: 'https://github.com/juherr' },
      ],
    },

    projets: {
      kicker: 'Projects',
      title: 'Case studies, not a wall of logos',
      intro: 'A selection of representative platforms and projects, from a CSMS in production to a public open-data registry.',
      ficheKicker: 'Example case-study sheet',
      caseStudyCta: 'Read the case study',
    },

    parcours: {
      kicker: 'Experience',
      title: '20+ years building, recovering and hardening systems',
      intro: 'An editorial read rather than a raw CV: what I did, in what context, and with what impact.',
    },

    apropos: {
      kicker: 'About',
      title: 'A CTO who stays close to the code and the field',
      photoTag: 'Julien Herr · Strasbourg',
      paras: [
        'I believe architecture, product and operations cannot be steered properly without staying close to the code, the users and the real-world constraints on the ground.',
        "That's why I stay hands-on: I design and decide, but I also contribute directly to the build. It's the best way to keep technical choices honest and the product genuinely usable.",
      ],
      quote: 'My role is often to connect worlds that struggle to understand each other: leadership, product, operations, finance, support and engineering.',
      valuesTitle: 'What guides my work',
      values: [
        { title: 'Pragmatism', text: 'Solve the real problem, in the real context, rather than the ideal solution on paper.' },
        { title: 'Simplicity', text: 'Prefer the simplest architecture that holds up and stays maintainable.' },
        { title: 'Architectural restraint', text: 'Refuse needless complexity: every layer must justify its existence.' },
        { title: 'Product sense', text: 'Keep the user and real usage at the centre of technical decisions.' },
        { title: 'Results focus', text: 'Ship what creates value, and actually get it into production.' },
        { title: 'Close to the field', text: 'Stay in touch with operations, support and end users.' },
      ],
    },

    contact: {
      kicker: 'Contact',
      title: "Let's talk about your project",
      intro: "Need an interim CTO, an audit, product framing or EV-charging expertise? In 5 lines: context, problem, urgency, stack, goal. I'll get back to you quickly.",
      subjectsTitle: 'Common topics',
      subjects: ['Interim CTO / Tech Lead', 'Technical audit', 'Product framing', 'Platform recovery', 'EV charging expertise', 'Development work', 'Architecture consulting'],
      frameTitle: 'How I work',
      frame: [
        'Fractional engagements (1–3 days/week) or short missions — not full-time',
        'Minimum duration: around 1 month',
        'Mostly remote · based in Strasbourg / Alsace · France & Europe',
        'Focus: EV-charging / energy operators, then B2B SMEs & startups with a critical platform',
        'Working in French · fluent written technical English',
        'Out of scope: pure staffing with no architecture stake, projects with no product dimension',
      ],
      cvLabel: 'My CV',
      fName: 'Name', phName: 'Your name',
      fEmail: 'Email', phEmail: 'you@company.com',
      fSubject: 'Subject',
      fMessage: 'Message', phMessage: 'Describe your need, your context and your timeline…',
      messageTemplate: 'Hi Julien,\n\nWe need help with [platform / team / product].\n\nContext:\nMain problem:\nGoal for the next 3 months:\nCurrent stack:\nAvailability to talk:',
      send: 'Send message',
      formNote: 'The form opens your email client (mailto). No data is stored. You can also email the address opposite directly.',
      sentTitle: 'Message ready to send',
      sentText: 'Your email client just opened with the message pre-filled.',
    },

    legal: {
      kicker: 'Legal',
      title: 'Legal notice',
      updated: 'Last updated: 22 June 2026',
      sections: [
        { heading: 'Site publisher', body: [
          'Company name: Herr Engineering',
          'Legal form: SASU (single-shareholder simplified joint-stock company)',
          'Share capital: €1,000',
          'Registered office: 1 rue de la Colline, 67210 Obernai, France',
          'SIRET: 999 428 436 00011',
          'Trade register (RCS): Saverne · 999 428 436',
          'EU VAT number: FR91 999 428 436',
          'Publication director: Julien Herr',
          'Contact: me@juherr.dev',
        ] },
        { heading: 'Hosting', body: [
          'This site is hosted by GitHub, Inc.',
          '88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA — github.com',
        ] },
        { heading: 'Intellectual property', body: [
          'Unless otherwise stated, the content of this site (text, structure, graphic elements) is the property of Herr Engineering. The site’s source code is open source — see the repository linked in the footer.',
        ] },
        { heading: 'Personal data', body: [
          'This site uses no tracking cookies and no analytics tools.',
          'The contact form opens your email client (mailto): no data is stored by the site. The information you send by email (name, email address, message) is processed solely to answer your request, on the basis of legitimate interest, and kept for as long as the exchange requires.',
          'Under the GDPR, you have the right to access, rectify and erase your data by writing to me@juherr.dev.',
        ] },
        { heading: 'Cookies', body: [
          'No tracking cookies. Only the light / dark theme choice is stored locally in your browser (localStorage), for strictly functional purposes.',
        ] },
      ],
    },

    footer: {
      tagline: 'Hands-on CTO for EV-charging & critical B2B platforms — OCPP, OCPI, monitoring, billing, architecture & delivery.',
      loc: 'Strasbourg, France · Remote',
      navTitle: 'Navigation',
      home: 'Home',
      connectTitle: 'Contact',
      cvLabel: 'My CV',
      legal: 'Legal notice',
      rights: '© 2026 Julien Herr',
      built: 'Source code',
    },

    notFound: {
      title: 'Page not found',
      text: "This link is dead. Let's get back on solid ground.",
      back: 'Back to home',
    },
  },
} as const;
