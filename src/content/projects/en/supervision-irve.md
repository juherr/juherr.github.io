---
title: "EV charging supervision platform"
domain: "EVSE · CSMS"
summary: "CSMS running in production across several hundred charge points: OCPP, monitoring, device management, charge valorisation, billing and IS integration — available white-label."
role: "Architect & tech lead"
impact: "100s charge points"
techs: ["Kotlin", "Spring Boot", "OCPP 1.6 / 2.x", "PostgreSQL", "Odoo", "Docker", "Cloudflare"]
featured: true
order: 1
lang: "en"
metrics:
  - { label: "Charge points", value: "several hundred" }
  - { label: "Protocol", value: "OCPP 1.6 & 2.x" }
  - { label: "Duration", value: "— TBC" }
  - { label: "Team", value: "— TBC" }
context: "An e-mobility operator running several hundred charge points, needing reliable monitoring and correct billing."
problem: "Supervising several hundred charge points across interdependent OCPP, pricing, billing and IS flows — with no reliable real-time visibility and no billing to lean on."
stakes: "Avoid letting poor business modelling or technical debt make operations impossible at scale. Billing touches revenue directly: a mistake is paid in cash."
decisions: "Clarified the business model, drew clean boundaries between responsibilities (connectivity, monitoring, pricing, billing, IS integration), prioritised the critical flows and built a reusable foundation."
delivery: "OCPP connectivity, real-time monitoring, device management, pricing engine, billing and IS integration."
impactDetail: "Platform in production, day-to-day operations under control and a reusable technical base to extend the scope without a rewrite."
proves: "The ability to connect architecture, product, business and operations on a critical platform run every day — not a proof of concept."
---

<!--
  TO COMPLETE (Julien) — orders of magnitude to strengthen the commercial proof:
  - Engagement / operation duration
  - Size of the team led
  - Number of IS flows integrated (ERP, payment, support…)
  - Number of business roles served (ops, support, finance…)
  - Billing frequency / session volume
  - Reduction in manual tasks (before / after)
  Replace the "— TBC" values in the `metrics` frontmatter above.
-->

A complete CSMS operated day to day: connecting charge points, monitoring the fleet,
pricing, billing and feeding the operator's information system.

The core handles OCPP connectivity, real-time fleet monitoring and a pricing engine
that covers complex business cases. Billing and IS integration close the loop, from
the charging session all the way to the accounting entry.

The platform is available **white-label**, with a charge-valorisation engine and
CRM/ERP integration (Odoo). Screenshots available on request.
