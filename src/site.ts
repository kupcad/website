// What the site says about itself and where it links: the header, the footer and the pages read
// these, so a link changes in one place.

export const SITE = {
  name: 'KupCAD',
  title: 'KupCAD: parametric CAD as code',
  description:
    'KupCAD is a Ruby-inspired language for parametric CAD. Write a part as a script, give it parameters, and export it as STL, 3MF, glTF, STEP, SVG or DXF.',
};

export const LINKS = {
  playground: '/playground/',
  /** The IDE: a project of scripts in the browser, kept there, offline, installable (the dev-pwa repository) */
  ide: 'https://kupcad.dev/',
  docs: 'https://docs.kupcad.org/',
  reference: 'https://docs.kupcad.org/reference/',
  language: 'https://docs.kupcad.org/reference/language/syntax/',
  geometry: 'https://docs.kupcad.org/reference/geometry/shapes/',
  parameters: 'https://docs.kupcad.org/reference/inputs/parameters/',
  exports: 'https://docs.kupcad.org/reference/geometry/export/',
  cli: 'https://docs.kupcad.org/reference/tooling/cli/',
  github: 'https://github.com/kupcad/kupcad',
  releases: 'https://github.com/kupcad/kupcad/releases/latest',
  vscode: 'https://github.com/kupcad/kupcad/tree/main/packages/kupcad-vscode',
  desktop: 'https://github.com/kupcad/kupcad/tree/main/packages/kupcad-desktop',
  npm: 'https://www.npmjs.com/package/@kupcad/playground',
  license: 'https://github.com/kupcad/kupcad/blob/main/LICENSE-FAQ.md',
};

/** The header's and the footer's links, the playground's and the IDE's apart: they are the call to action. */
export const NAV = [
  { label: 'Docs', href: LINKS.docs },
  { label: 'GitHub', href: LINKS.github },
  { label: 'Download', href: LINKS.releases },
];

/** Where this browser keeps the theme chosen (ThemeSelect): `light` or `dark`, none for the system's. */
export const THEME_KEY = 'kupcad-theme';

/** Whether `href` leaves the site: such a link opens in a new tab, giving the page no handle on this one. */
export const isExternal = (href: string) => /^https?:\/\//.test(href);
