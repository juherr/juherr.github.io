# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The personal site of **Julien Herr** (independent CTO & Tech Lead), served at the apex
domain **juherr.dev**. It is a `<user>.github.io` repository, but it is **no longer
published directly from `main`** — it is an [Astro](https://astro.build) + Tailwind CSS
static site built by CI and deployed to GitHub Pages via GitHub Actions.

> **One-time setup:** GitHub repo → Settings → Pages → *Build and deployment* →
> **Source: GitHub Actions** (not "Deploy from a branch"). The workflow does the rest.

## Stack

- **Astro 4** (static output, zero JS by default). Two small islands of vanilla JS:
  the theme toggle and the mobile menu (plain `<script>` tags, no UI framework).
- **Tailwind CSS 3** via `@astrojs/tailwind`, `darkMode: 'class'`. Token colors are
  CSS variables (`src/styles/global.css`); Tailwind maps them (`bg-surface`, `text-ink`,
  `text-accent`, `font-display`, …) in `tailwind.config.mjs`.
- **Content Collections** for projects + experience (`src/content/`, schemas in
  `src/content/config.ts`).
- **Astro i18n**: FR is the default (no prefix), EN lives under `/en/`.

## Architecture

- `src/styles/global.css` — design tokens (`:root` light + `.dark`), base styles,
  the hero `acflow` keyframe, focus-visible ring, reduced-motion.
- `src/i18n/ui.ts` — all interface labels and page copy, FR + EN (single source).
  `src/i18n/utils.ts` — `getLangFromUrl`, `localizePath`, `alternatePath`.
- `src/config/site.ts` — contact/links (email assembled at runtime, CV, socials).
- `src/content/{projects,experience}/{fr,en}/*.md` — typed content. English entries
  mirror French ones under the `en/` folder; `cleanSlug()` strips the lang prefix so
  URLs are `/projets/<slug>` and `/en/projets/<slug>`.
- `src/layouts/Base.astro` — `<head>`, fonts, SEO/OG, hreflang, the no-flash inline
  theme script; renders `Header` + `<slot>` + `Footer`.
- `src/layouts/CaseStudy.astro` — project detail page (driven by collection data).
- `src/components/` — `Header`, `Footer`, `ThemeToggle`, `LangSwitch`, `MobileMenu`,
  `NodeGraph` (hero SVG), `CtaBanner`, and `sections/` (one component per page body,
  each taking a `lang` prop and reused by the FR and EN routes).
- `src/pages/` — FR routes at the root, EN mirror under `src/pages/en/`. Each route
  is a thin wrapper: `Base` + the matching `sections/` component. The home is `index`,
  case studies are `projets/[slug].astro` (+ `en/`).
- `public/` — `CNAME` (juherr.dev), `assets/logo-juherr.png`, `dead-link.png` (404).
  The portrait lives in `src/assets/julien.png` (optimized via `astro:assets`).

## Commands

- `npm run dev` — local dev server.
- `npm run build` — static build to `dist/`.
- `npm run check` — `astro check` (type-check). CI runs this before building.
- `npm run preview` — serve the built `dist/`.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`: install → `astro check` →
`astro build` → upload `dist/` as a Pages artifact → deploy. The custom domain comes
from `public/CNAME` (copied into `dist/`).

## Adding content

- **A project / case study:** add `src/content/projects/fr/<slug>.md` (and the EN
  mirror). Set `featured: true` to show it on the home page; give it `context`,
  `delivery`, `impactDetail` for a richer case-study page. Omit `href` for an internal
  case study, or set `href` to link out (no internal page generated).
- **An experience entry:** add `src/content/experience/{fr,en}/<order>-<name>.md`.
- **Interface copy:** edit `src/i18n/ui.ts` (keep FR and EN in sync).
