import { ui, type Lang } from './ui';

export const defaultLang: Lang = 'fr';
export const locales: Lang[] = ['fr', 'en'];

/** Extract the active language from a URL pathname (`/en/...` → `en`). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'en') return 'en';
  return 'fr';
}

/** Build a localized, root-relative path. FR has no prefix, EN is under `/en/`. */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const prefix = lang === 'fr' ? '' : '/en';
  return clean ? `${prefix}/${clean}/` : `${prefix}/`;
}

/** Given the current URL, return the same page in the other language. */
export function alternatePath(url: URL, target: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'en') segments.shift();
  const path = segments.join('/');
  return localizePath(path, target);
}

/** Translation accessor bound to a language, falling back to FR. */
export function useTranslations(lang: Lang) {
  return ui[lang] ?? ui.fr;
}
