# KupCAD website

The source of [kupcad.org](https://kupcad.org): the home page and the playground, built with
[Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The documentation is a
site of its own, [docs.kupcad.org](https://docs.kupcad.org) (the `docs` repository). Every push to
`main` publishes this one to GitHub Pages (`.github/workflows/deploy.yml`).

## Running it

Requires the Node version in [`.tool-versions`](.tool-versions) and pnpm (12 or later).

```sh
pnpm install
pnpm dev            # the site at http://localhost:4321, reloading as files change
pnpm check          # astro check: the types of the pages, components and scripts
pnpm build          # the static site in dist/
pnpm preview        # serves dist/
```

pnpm installs no version published less than a day ago; `@kupcad/*`, KupCAD's own, are taken
as soon as they are released (`pnpm-workspace.yaml`).

## What's where

| Path | What it is |
|---|---|
| `src/pages/index.astro` | The home page, its sections a cell each of the frame |
| `src/pages/playground.astro` | The playground, filling the window under the header |
| `src/pages/404.astro` | A page that isn't there |
| `src/site.ts` | The site's name, description and every link: the header, the footer and the pages read them |
| `src/styles/global.css` | Tailwind on the brand's tokens, the site's surfaces named after them, and its few utilities |
| `src/components/` | The header, the footer, the theme switch, links and buttons, the logo and the code |
| `src/components/PlaygroundApp.svelte` | `@kupcad/playground` under a bar of the examples (Load) and Share |
| `src/lib/share.js` | A script in a playground address (`#code=`), written and read |
| `src/examples/` | The scripts the playground starts on; `index.ts` lists them, the first the home page's |
| `src/grammars/kupcad.tmLanguage.json` | KupCAD's TextMate grammar, which highlights the home page's code |
| `public/icon.svg` | KupCAD's icon: the favicon, and drawn in the page (`<use>`), where the theme colours it |

## How it fits together

- **Colours** come from `@kupcad/ui/tokens.css`, the same tokens the playground, the desktop
  app and the docs are drawn with; `global.css` only names the site's surfaces after them and
  maps them to Tailwind's colours (`bg-paper`, `text-ink`, `bg-accent`, …). A colour changes there.
- **The theme** is the system's until the header's switch chooses Light or Dark: it sets
  `data-theme` on the root, which the tokens (and so the site, the playground's viewer and its
  editor) follow, and this browser keeps it (`kupcad-theme`), set again before a page is drawn.
  It needs `@kupcad/ui` 0.1.2 or later, the first whose tokens a page can force.
- **The playground** is `@kupcad/playground` from npm, rendered in the browser alone
  (`client:only`), as its core runs in a Web Worker on WebAssembly. Only `/playground/` loads it:
  the home page has no JavaScript but the theme switch. Load gives it an example by its
  `load()`, which needs `@kupcad/playground` 0.1.2 or later.
- **The IDE** is a site of its own, [kupcad.dev](https://kupcad.dev) (the `dev-pwa` repository):
  a project of scripts kept in the browser, offline and installable. This site links to it beside
  the playground: in the header, the Browser card and the footer (`LINKS.ide`).
- **Shared scripts** travel in the address's fragment: `#code=` and the script's UTF-8 in
  base64url (`src/lib/share.js`). The docs' "Open in playground" links write it, and Share does
  too. The fragment never reaches a server, and the script runs in the worker, with no files
  and no network.

## Keeping in step with KupCAD

- **The playground and the tokens:** `pnpm add @kupcad/playground@latest @kupcad/ui@latest`,
  the two at the same version (the playground depends on that `@kupcad/ui`).
- **The examples** are copies of the kupcad repository's `examples/`; copy one again when it
  changes there (`plate.kup` is this site's own).
- **The grammar** is a copy of the one the kupcad repository generates (`cd core && zig build
  grammar`): copy `packages/kupcad-vscode/syntaxes/kupcad.tmLanguage.json` to `src/grammars/`.
