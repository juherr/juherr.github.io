import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { localizePath } from '../i18n/utils';

/** Entries live in `<lang>/<slug>.md`; strip the language prefix for clean URLs. */
export function cleanSlug(slug: string): string {
  return slug.replace(/^(fr|en)\//, '');
}

export async function getProjects(lang: Lang): Promise<CollectionEntry<'projects'>[]> {
  const items = await getCollection('projects', ({ data }) => data.lang === lang);
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects(lang: Lang): Promise<CollectionEntry<'projects'>[]> {
  return (await getProjects(lang)).filter((p) => p.data.featured);
}

export async function getExperience(lang: Lang): Promise<CollectionEntry<'experience'>[]> {
  const items = await getCollection('experience', ({ data }) => data.lang === lang);
  return items.sort((a, b) => a.data.order - b.data.order);
}

/** Where a project card should point: external link, or its internal case study. */
export function projectHref(entry: CollectionEntry<'projects'>, lang: Lang): string {
  if (entry.data.href) return entry.data.href;
  return localizePath(`projets/${cleanSlug(entry.slug)}`, lang);
}

/** Whether the project links out (no internal case study page). */
export function isExternal(entry: CollectionEntry<'projects'>): boolean {
  return Boolean(entry.data.href);
}
