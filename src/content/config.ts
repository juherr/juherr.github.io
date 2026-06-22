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
  }),
});

export const collections = { projects, experience };
