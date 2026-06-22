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
} as const;

export const ui = {
  fr: {
    meta: {
      title: 'Julien Herr — CTO & Tech Lead indépendant',
      description:
        "CTO & Tech Lead indépendant — électromobilité, ingénierie back senior et mise en œuvre de l'IA. 20+ ans à concevoir, reprendre et fiabiliser des plateformes logicielles.",
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
        kicker: 'CTO & Tech Lead indépendant',
        title: 'Je transforme la complexité en systèmes qui tournent.',
        promise:
          "Électromobilité, ingénierie back senior et mise en œuvre de l'IA : trois spécialités, une même façon de travailler — comprendre le métier, concevoir l'architecture, et contribuer à la réalisation.",
        ctaPrimary: "Discuter d'un projet",
        ctaSecondary: 'Voir mes projets',
        ctaTertiary: 'Télécharger mon CV',
        credibility:
          '20+ ans · du dev au CTO · Java / Kotlin / TypeScript / PHP · OCPP / OCPI · IA agentique · Strasbourg / Remote',
        graphCenter: 'Plateforme',
      },
      pos: {
        kicker: 'Le fil rouge',
        text: "Les projets complexes échouent rarement sur la technique. Ils échouent quand le métier, le produit et le code cessent de se parler. Mon rôle : les faire avancer dans le même sens.",
        sub: "Électromobilité, ingénierie back-end senior, mise en œuvre de l'IA — trois spécialités au service d'une seule chose : relier ceux qui décident, ceux qui construisent et ceux qui utilisent.",
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
          { title: 'Électromobilité & énergie', text: "Plateformes CPO et eMSP, OCPP 1.6 et 2.x, OCPI et roaming, tarification, facturation, supervision, smart charging, paiement et intégration SI — de la borne au système d'information.", tags: ['OCPP', 'OCPI', 'Roaming', 'Smart charging'] },
          { title: 'Ingénierie & leadership', text: "Du dev au CTO, en passant par tech lead. Architecture (DDD, hexagonal, event-driven), reprise de legacy, structuration d'équipe — et contribution directe sur le code critique.", tags: ['Du dev au CTO', 'DDD', 'Hexagonal', 'Legacy'] },
          { title: "IA dans les organisations", text: "Au quotidien, j'utilise l'IA agentique pour livrer plus avec des équipes réduites, sans perdre en qualité. Je l'étends au-delà de la tech — produit, marketing, ops : cadrage des cas d'usage et montée en compétence des équipes.", tags: ['Agents', 'Delivery', 'Cas d’usage', 'Équipes'] },
        ],
        techTitle: 'Technologies',
        techs: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'NestJS', 'Nuxt', 'PostgreSQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
      },
      proj: {
        kicker: 'Projets mis en avant',
        title: 'Des plateformes en production',
        link: 'Voir tous les projets',
      },
      modes: {
        kicker: "Modes d'intervention",
        title: 'Comment je peux intervenir',
        items: [
          { title: 'CTO ou Tech Lead de transition', text: "Continuité technique, reprise d'équipe, stabilisation d'une plateforme, recrutement et préparation de la suite." },
          { title: 'Cadrage produit & architecture', text: "Discovery, audit, architecture cible, estimation, feuille de route et réduction des risques." },
          { title: 'Développement & delivery', text: "Contribution directe sur les composants critiques en Java, Kotlin ou TypeScript, accélérée par l'IA agentique." },
          { title: "Mise en œuvre de l'IA", text: "Cadrage des cas d'usage, outillage des équipes et montée en compétence — du delivery agentique jusqu'aux usages produit et métier." },
          { title: 'Expertise électromobilité', text: "Audit OCPP et OCPI, supervision, roaming, tarification, paiement, smart charging et intégration SI." },
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
      intro: "Je n'aborde jamais la technique pour elle-même : chaque choix d'architecture sert un problème métier, une contrainte d'exploitation ou un enjeu de fiabilité. Produit & architecture est le fil rouge qui relie mes trois spécialités.",
      note: 'Les technologies restent secondaires par rapport aux problèmes métier résolus.',
      axes: [
        { num: '01', title: 'Électromobilité & énergie', text: "De la borne au système d'information : j'ai construit chaque maillon de la chaîne CPO/eMSP.", groups: [
          { label: 'Supervision & OCPP', proofs: [
            { name: 'Supervision de bornes & assets télécom (modem/SIM)', href: '', prop: true },
            { name: 'SteVe — contributions & déploiement', href: 'https://github.com/steve-community/steve', prop: false },
            { name: 'ocpp-gateway', href: 'https://github.com/juherr/ocpp-gateway', prop: false },
          ] },
          { label: 'Roaming & OCPI', proofs: [
            { name: 'Serveur gateway / cache OCPI', href: '', prop: true },
            { name: 'ocpi.fyi — doc de référence', href: 'https://ocpi.fyi', prop: false },
          ] },
          { label: 'Paiement', proofs: [
            { name: 'Plateforme CB Stripe + QR code', href: '', prop: true },
            { name: "Plateforme d'abonnement eMSP", href: '', prop: true },
          ] },
          { label: 'Intégration SI', proofs: [
            { name: 'Module Odoo (ERP)', href: '', prop: true },
          ] },
          { label: 'Open data & annuaires', proofs: [
            { name: 'evsedb — annuaire de bornes', href: 'https://evsedb.com', prop: false },
            { name: 'awesome-ev-charging', href: 'https://github.com/juherr/awesome-ev-charging', prop: false },
            { name: 'open-idro-directory — identifiants roaming', href: 'https://idro.juherr.dev/', prop: false },
          ] },
        ] },
        { num: '02', title: 'Ingénierie & leadership', text: "Les deux plateformes ci-dessus sont mes builds : conception, architecture et reprise de bout en bout — du dev au CTO.", groups: [
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
      intro: "Besoin d'un CTO de transition, d'un audit, d'un cadrage ou d'une expertise IRVE ? Décrivez votre contexte, je reviens vers vous rapidement.",
      subjectsTitle: 'Sujets fréquents',
      subjects: ['CTO / Tech Lead de transition', 'Audit technique', 'Cadrage produit', 'Reprise de plateforme', 'Expertise IRVE', 'Mission de développement', 'Conseil en architecture'],
      cvLabel: 'Mon CV',
      fName: 'Nom', phName: 'Votre nom',
      fEmail: 'Email', phEmail: 'vous@entreprise.com',
      fSubject: 'Sujet',
      fMessage: 'Message', phMessage: 'Décrivez votre besoin, votre contexte et vos délais…',
      send: 'Envoyer le message',
      formNote: 'Le formulaire ouvre votre messagerie (mailto). Aucune donnée stockée.',
      sentTitle: 'Message prêt à partir',
      sentText: 'Votre messagerie vient de s’ouvrir avec le message pré-rempli.',
    },

    footer: {
      tagline: "CTO & Tech Lead indépendant — électromobilité, ingénierie back senior & mise en œuvre de l'IA.",
      loc: 'Strasbourg, Alsace · Remote',
      navTitle: 'Navigation',
      home: 'Accueil',
      connectTitle: 'Contact',
      cvLabel: 'Mon CV',
      rights: '© 2026 Julien Herr',
      built: 'Astro · GitHub Pages',
    },

    notFound: {
      title: 'Page introuvable',
      text: 'Ce lien est mort. Revenons sur la terre ferme.',
      back: "Retour à l'accueil",
    },
  },

  en: {
    meta: {
      title: 'Julien Herr — Independent CTO & Tech Lead',
      description:
        'Independent CTO & Tech Lead — e-mobility, senior backend engineering and putting AI to work. 20+ years designing, recovering and hardening software platforms.',
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
        kicker: 'Independent CTO & Tech Lead',
        title: 'I turn complexity into systems that run.',
        promise:
          'E-mobility, senior backend engineering and putting AI to work: three specialities, one way of working — understand the business, design the architecture, and contribute to the build.',
        ctaPrimary: 'Discuss a project',
        ctaSecondary: 'See my projects',
        ctaTertiary: 'Download my CV',
        credibility:
          '20+ years · from dev to CTO · Java / Kotlin / TypeScript / PHP · OCPP / OCPI · agentic AI · Strasbourg / Remote',
        graphCenter: 'Platform',
      },
      pos: {
        kicker: 'The through-line',
        text: 'Complex projects rarely fail on the technology. They fail when the business, the product and the code stop talking to each other. My job: get them moving in the same direction.',
        sub: 'E-mobility, senior backend engineering, putting AI to work — three specialities serving one thing: connecting the people who decide, those who build and those who use.',
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
          { title: 'E-mobility & energy', text: 'CPO and eMSP platforms, OCPP 1.6 and 2.x, OCPI and roaming, pricing, billing, monitoring, smart charging, payment and IS integration — from the charge point to the information system.', tags: ['OCPP', 'OCPI', 'Roaming', 'Smart charging'] },
          { title: 'Engineering & leadership', text: 'From dev to CTO, via tech lead. Architecture (DDD, hexagonal, event-driven), legacy recovery, team structuring — and direct contribution on critical code.', tags: ['Dev to CTO', 'DDD', 'Hexagonal', 'Legacy'] },
          { title: 'AI in organisations', text: "Day to day, I use agentic AI to ship more with smaller teams without losing quality. I'm extending it beyond engineering — product, marketing, ops: use-case framing and team upskilling.", tags: ['Agents', 'Delivery', 'Use cases', 'Teams'] },
        ],
        techTitle: 'Technologies',
        techs: ['Java', 'Kotlin', 'Spring Boot', 'TypeScript', 'PHP', 'NestJS', 'Nuxt', 'PostgreSQL', 'MongoDB', 'Docker', 'Cloudflare', 'GitHub Actions'],
      },
      proj: {
        kicker: 'Featured projects',
        title: 'Platforms running in production',
        link: 'See all projects',
      },
      modes: {
        kicker: 'Engagement models',
        title: 'How I can step in',
        items: [
          { title: 'Interim CTO or Tech Lead', text: 'Technical continuity, team handover, platform stabilisation, recruitment and preparing what comes next.' },
          { title: 'Product & architecture framing', text: 'Discovery, audit, target architecture, estimation, roadmap and risk reduction.' },
          { title: 'Development & delivery', text: 'Direct contribution on critical components in Java, Kotlin or TypeScript, accelerated by agentic AI.' },
          { title: 'Putting AI to work', text: 'Use-case framing, team tooling and upskilling — from agentic delivery through to product and business use.' },
          { title: 'E-mobility expertise', text: 'OCPP and OCPI audit, monitoring, roaming, pricing, payment, smart charging and IS integration.' },
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
      intro: 'I never approach technology for its own sake: every architectural choice serves a business problem, an operational constraint or a reliability concern. Product & architecture is the through-line that ties my three specialities together.',
      note: 'Technologies remain secondary to the business problems they solve.',
      axes: [
        { num: '01', title: 'E-mobility & energy', text: "From the charge point to the information system: I've built every link in the CPO/eMSP chain.", groups: [
          { label: 'Monitoring & OCPP', proofs: [
            { name: 'Charge-point & telecom-asset monitoring (modem/SIM)', href: '', prop: true },
            { name: 'SteVe — contributions & deployment', href: 'https://github.com/steve-community/steve', prop: false },
            { name: 'ocpp-gateway', href: 'https://github.com/juherr/ocpp-gateway', prop: false },
          ] },
          { label: 'Roaming & OCPI', proofs: [
            { name: 'OCPI gateway / cache server', href: '', prop: true },
            { name: 'ocpi.fyi — reference docs', href: 'https://ocpi.fyi', prop: false },
          ] },
          { label: 'Payment', proofs: [
            { name: 'Card platform (Stripe) + QR code', href: '', prop: true },
            { name: 'eMSP subscription platform', href: '', prop: true },
          ] },
          { label: 'IS integration', proofs: [
            { name: 'Odoo module (ERP)', href: '', prop: true },
          ] },
          { label: 'Open data & directories', proofs: [
            { name: 'evsedb — charge-point registry', href: 'https://evsedb.com', prop: false },
            { name: 'awesome-ev-charging', href: 'https://github.com/juherr/awesome-ev-charging', prop: false },
            { name: 'open-idro-directory — roaming IDs', href: 'https://idro.juherr.dev/', prop: false },
          ] },
        ] },
        { num: '02', title: 'Engineering & leadership', text: 'The two platforms above are my builds: design, architecture and recovery end to end — from dev to CTO.', groups: [
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
      intro: "Need an interim CTO, an audit, product framing or EV charging expertise? Describe your context and I'll get back to you quickly.",
      subjectsTitle: 'Common topics',
      subjects: ['Interim CTO / Tech Lead', 'Technical audit', 'Product framing', 'Platform recovery', 'EV charging expertise', 'Development work', 'Architecture consulting'],
      cvLabel: 'My CV',
      fName: 'Name', phName: 'Your name',
      fEmail: 'Email', phEmail: 'you@company.com',
      fSubject: 'Subject',
      fMessage: 'Message', phMessage: 'Describe your need, your context and your timeline…',
      send: 'Send message',
      formNote: 'The form opens your email client (mailto). No data is stored.',
      sentTitle: 'Message ready to send',
      sentText: 'Your email client just opened with the message pre-filled.',
    },

    footer: {
      tagline: 'Independent CTO & Tech Lead — e-mobility, senior backend engineering & putting AI to work.',
      loc: 'Strasbourg, France · Remote',
      navTitle: 'Navigation',
      home: 'Home',
      connectTitle: 'Contact',
      cvLabel: 'My CV',
      rights: '© 2026 Julien Herr',
      built: 'Astro · GitHub Pages',
    },

    notFound: {
      title: 'Page not found',
      text: "This link is dead. Let's get back on solid ground.",
      back: 'Back to home',
    },
  },
} as const;
