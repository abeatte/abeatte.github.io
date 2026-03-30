---
inclusion: always
---

# Coding Conventions

## TypeScript

- TypeScript strict mode is OFF (`strict: false` in tsconfig). Don't add strict type annotations unless fixing a bug.
- Minimal type usage — the codebase uses `any` for data types (e.g., `Data` type in dataProvider). Match this style.
- Use `.tsx` for all component files, `.ts` for non-JSX files.
- Target: ES2017, module: esnext, JSX: react-jsx.

## Components

- All components are functional components using hooks. No class components.
- Default exports for all components: `export default function ComponentName()`.
- Components live in `src/Components/` with PascalCase filenames matching the component name.
- Each component is a single file — no barrel exports, no index files.
- Components access site data via the `useSiteData()` hook from `app/dataProvider.tsx`.
- Use `react-scroll`'s `Element` wrapper to make sections scrollable targets, and `Link` for scroll navigation.
- Use `FontAwesomeIcon` from `@fortawesome/react-fontawesome` for icons. Brand icons come from `fab` (registered in App.tsx), solid icons are imported per-component.
- Suspense boundaries with `<Loading />` fallback for async data sections.

## Pages (App Router)

- Pages use catch-all routes: `app/[[...slug]]/page.tsx`.
- Each page has a companion `*Client.tsx` file that uses `next/dynamic` with `{ ssr: false }` to load the actual component.
- Always include `generateStaticParams` returning `[{ slug: [''] }]` for static export compatibility.
- Page components are thin wrappers — logic lives in `src/Components/`.

## Naming

- Components & files: PascalCase (`Header.tsx`, `Portfolio.tsx`)
- Functions & variables: camelCase (`useSiteData`, `projectImage`)
- CSS classes: kebab-case (`banner-text`, `portfolio-item`, `nav-wrap`)
- HTML IDs: kebab-case (`nav-wrap`, `go-top`, `portfolio-wrapper`)

## Imports

- Use named imports for utilities: `import { Element, Link } from 'react-scroll'`
- Use default imports for components: `import Header from './Header'`
- `classnames` package is used for conditional CSS classes: `import classNames from 'classnames'`
- No path aliases configured — use relative paths.

## Data

- All content is in `public/data.json`. Never hardcode content that belongs in data.json.
- Data shape: `{ main, resume, portfolio, secret }` — see data.json for structure.
- To add new content sections, add to data.json and update the `Data` type in `app/dataProvider.tsx`.
