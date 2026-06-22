/** Site-wide constants (links, contact). Single source of truth. */
export const site = {
  name: 'Julien Herr',
  // Assembled at runtime to keep the address out of static scrapers.
  email: ['me', 'juherr.dev'].join('@'),
  cvUrl: 'https://juherr.dev/cv',
  social: {
    linkedin: 'https://www.linkedin.com/in/juherr/',
    github: 'https://github.com/juherr',
  },
} as const;

export const mailto = `mailto:${site.email}`;
