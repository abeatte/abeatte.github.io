---
inclusion: always
---

# Project Overview

This is a personal portfolio website for Art Beatte IV, a Sr. Software Engineer. It's built with Next.js 16 and React 18, deployed as a static site to GitHub Pages at artbeatte.com.

## Tech Stack

- Next.js 16 (static export mode, output to `build/`)
- React 18 with TypeScript 5.9 (strict mode disabled)
- CSS: Three vanilla CSS files (no CSS modules, no Tailwind, no preprocessors)
- Icons: FontAwesome (brands + solid)
- Navigation: react-scroll for smooth scrolling between sections
- Analytics: react-ga (Google Analytics)
- Deploy: gh-pages to GitHub Pages

## Project Structure

```
app/                        # Next.js App Router pages
  [[...slug]]/              # Main portfolio catch-all route
  playground/[[...slug]]/   # Hidden easter egg route (Konami code)
  privacyPolicy/            # Privacy policy page
  dataProvider.tsx           # React Context for site data
  layout.tsx                # Root layout (fonts, DataProvider wrapper)

src/Components/             # All UI components
  App.tsx                   # Root component (GA init, section composition)
  Header.tsx                # Fixed nav bar with Konami code easter egg
  Intro.tsx                 # Hero banner section
  About.tsx                 # Bio section
  Resume.tsx                # Work + education history
  Portfolio.tsx             # Project showcase grid
  Footer.tsx                # Social links + copyright
  Loading.tsx               # Suspense fallback
  Playground.tsx            # Easter egg wrapper
  Secret.tsx                # Easter egg content

public/
  data.json                 # All site content (single source of truth)
  css/                      # Global stylesheets
  images/                   # All images and assets
  docs/                     # Resume PDFs
```

## Data Flow

All site content lives in `public/data.json` with four sections: `main`, `resume`, `portfolio`, `secret`. The `DataProvider` in `app/dataProvider.tsx` wraps the app via React Context. Components access data through the `useSiteData()` hook which uses React 18's `use()` API.

## Routing Pattern

Pages use catch-all routes (`[[...slug]]`) with `generateStaticParams` for static export. Client components are loaded via `next/dynamic` with `ssr: false` since the site relies on browser-only libraries (react-scroll, react-konami-code).

## Build & Deploy

- `npm run dev` — local dev server
- `npm run build` — static export to `build/`
- `npm run deploy` — builds then deploys to GitHub Pages via gh-pages
- `npm run start` — serves the built static files locally
