## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Building the site

- Every colour is a `--kc-*` token of `@kupcad/ui/tokens.css` or a surface `src/styles/global.css`
  names after them, used through Tailwind (`bg-paper`, `text-ink`, `bg-accent`). No hex colours
  in components; a light/dark pair the tokens lack is `light-dark()` in `global.css`.
- Links come from `src/site.ts` (`LINKS`, `NAV`); a link is `Link.astro` (one off the site opens in
  a new tab with `rel="noopener noreferrer"`), a button `ButtonLink.astro`.
- The look is the frame: cells separated by the frame's colour (`frame` utility, the gap between
  them), small uppercase labels (`eyebrow`), huge uppercase headings (`display`). No images.
- A section's repeated rows or cards are a data array in the page's frontmatter, mapped once.
- Pages ship no JavaScript but the theme switch; the playground is the one island
  (`client:only="svelte"`).
- `npm run check` and `npm run build` pass before a change is done; look at the pages in a
  browser, light and dark, wide and phone-width, with no sideways scrolling.
