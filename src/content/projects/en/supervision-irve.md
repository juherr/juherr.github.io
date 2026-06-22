---
title: "EV charging supervision platform"
domain: "EVSE · CSMS"
summary: "CSMS running in production across several hundred charge points: OCPP, monitoring, device management, pricing, billing and IS integration."
role: "Architect & tech lead"
impact: "100s charge points"
techs: ["Kotlin", "Spring Boot", "OCPP 1.6 / 2.x", "PostgreSQL", "Docker", "Cloudflare"]
featured: true
order: 1
lang: "en"
context: "An e-mobility operator running several hundred charge points, needing reliable monitoring and correct billing."
delivery: "OCPP connectivity, real-time monitoring, device management, pricing engine, billing and IS integration."
impactDetail: "Platform in production, day-to-day operations under control and a reusable technical base for new scopes."
---

A complete CSMS operated day to day: connecting charge points, monitoring the fleet,
pricing, billing and feeding the operator's information system.

The core handles OCPP connectivity, real-time fleet monitoring and a pricing engine
that covers complex business cases. Billing and IS integration close the loop, from
the charging session all the way to the accounting entry.
