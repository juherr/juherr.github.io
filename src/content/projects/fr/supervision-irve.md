---
title: "Plateforme de supervision IRVE"
domain: "IRVE · CSMS"
summary: "CSMS exploité en production sur plusieurs centaines de bornes : OCPP, supervision, gestion d'équipements, valorisation de la charge, facturation et intégration au SI — disponible en marque blanche."
role: "Architecte & lead technique"
impact: "×100s bornes"
techs: ["Kotlin", "Spring Boot", "OCPP 1.6 / 2.x", "PostgreSQL", "Odoo", "Docker", "Cloudflare"]
featured: true
order: 1
lang: "fr"
metrics:
  - { label: "Points de charge", value: "plusieurs centaines" }
  - { label: "Protocole", value: "OCPP 1.6 & 2.x" }
  - { label: "Durée", value: "— à préciser" }
  - { label: "Équipe", value: "— à préciser" }
context: "Opérateur de mobilité électrique exploitant plusieurs centaines de points de charge, besoin d'une supervision fiable et d'une facturation correcte."
problem: "Superviser plusieurs centaines de points de charge avec des flux OCPP, tarification, facturation et SI interdépendants — sans visibilité temps réel fiable ni facturation sur laquelle s'appuyer."
stakes: "Éviter qu'une mauvaise modélisation métier ou une dette technique rende l'exploitation impossible à grande échelle. La facturation touche directement au revenu : une erreur se paie cash."
decisions: "Clarification du modèle métier, découpage net des responsabilités (connectivité, supervision, tarification, facturation, intégration SI), priorisation des flux critiques et construction d'un socle réutilisable."
delivery: "Connectivité OCPP, supervision temps réel, gestion d'équipements, moteur de tarification, facturation et intégration au SI."
impactDetail: "Plateforme en production, exploitation quotidienne maîtrisée et base technique réutilisable pour étendre le périmètre sans tout réécrire."
proves: "Capacité à relier architecture, produit, métier et opérations sur une plateforme critique exploitée au quotidien — pas une preuve de concept."
---

<!--
  À COMPLÉTER (Julien) — ordres de grandeur pour muscler la preuve commerciale :
  - Durée de la mission / de l'exploitation
  - Taille d'équipe pilotée
  - Nombre de flux SI intégrés (ERP, paiement, support…)
  - Nombre de rôles métier servis (ops, support, finance…)
  - Fréquence de facturation / volume de sessions
  - Réduction des tâches manuelles (avant / après)
  Remplacer les valeurs "— à préciser" du frontmatter `metrics` ci-dessus.
-->

Un CSMS complet exploité au quotidien : connecter les bornes, superviser le parc,
tarifer, facturer et alimenter le système d'information de l'opérateur.

Le cœur du système gère la connectivité OCPP des bornes, la supervision temps réel
du parc et un moteur de tarification capable de couvrir des cas métier complexes.
La facturation et l'intégration au SI ferment la boucle, de la session de charge
jusqu'à l'écriture comptable.

La plateforme est disponible en **marque blanche**, avec moteur de valorisation de la
charge et intégration CRM/ERP (Odoo). Captures d'écran disponibles sur demande.
