import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    summary: z.string(),
    role: z.string(),
    impact: z.string(),
    techs: z.array(z.string()),
    /** External link. When set, cards link out instead of to an internal case study. */
    href: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    lang: z.enum(['fr', 'en']).default('fr'),
    /** Optional detailed case-study blocks (rendered by CaseStudy layout). */
    context: z.string().optional(),
    delivery: z.string().optional(),
    impactDetail: z.string().optional(),
    /** Orders of magnitude shown as a metrics strip (label + value). */
    metrics: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    /** Stronger narrative blocks: problem → stakes → decisions → (delivery) → (impact) → proves. */
    problem: z.string().optional(),
    stakes: z.string().optional(),
    decisions: z.string().optional(),
    proves: z.string().optional(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    period: z.string(),
    role: z.string(),
    domains: z.string(),
    context: z.string(),
    missions: z.array(z.string()),
    impact: z.string(),
    order: z.number(),
    lang: z.enum(['fr', 'en']).default('fr'),
    /** Optional proof layer for recruiters / prospects comparing profiles. */
    orgType: z.string().optional(),
    teamSize: z.string().optional(),
    scope: z.string().optional(),
  }),
});

export const collections = { projects, experience };
