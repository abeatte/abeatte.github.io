---
inclusion: fileMatch
fileMatchPattern: "**/*.css"
---

# Styling Guide

## CSS Architecture

This project uses three vanilla CSS files — no CSS modules, Tailwind, Sass, or CSS-in-JS. All styles are global.

- `public/css/default.css` — CSS reset, base typography, grid system, links, buttons, forms
- `public/css/layout.css` — Component-specific styles (header, about, resume, portfolio, footer)
- `public/css/media-queries.css` — Responsive breakpoints

All three are imported in `app/layout.tsx`. Add new styles to the appropriate file based on scope.

## Grid System

12-column grid based on Skeleton CSS. Use column classes:

```css
.one.column, .two.columns, .three.columns, ... .twelve.columns
```

Container pattern: `.row` > `.columns` children. The grid uses percentage widths with 4% gutters.

## Fonts

Two Google Fonts loaded in `app/layout.tsx` via CSS variables:

- `var(--font-opensans)` — Primary sans-serif (headings, nav, body)
- `var(--font-librebaskerville)` — Serif accent (subheadings, descriptions)

Always reference fonts via these CSS variables, never by name directly.

## Color Palette

- Background: `#0f0f0f` (body), `#2B2B2B` (sections), `#1a1a1a` (darker sections)
- Accent: `#11ABB0` (teal — links, highlights, buttons)
- Text: `#fff` (headings), `#A8A8A8` / `#7A7A7A` (body text), `#838C95` (muted)
- Nav active: `#F06000` (orange)
- Overlay: `rgba(44, 44, 44, .8)` (portfolio hover)

## Responsive Breakpoints

Four breakpoints in `media-queries.css`:

- `max-width: 1024px` — Large tablets
- `max-width: 900px` — Small tablets
- `max-width: 767px` — Mobile wide (nav collapses, profile pic hides)
- `max-width: 480px` — Mobile narrow

## Conventions

- Use kebab-case for class names and IDs.
- Section IDs match react-scroll element names: `home`, `about`, `resume`, `portfolio`, `footer`.
- Hover effects use CSS transitions (typically 0.3s ease-in-out).
- The portfolio grid uses `.bgrid-halves` for 2-column layout with `.s-bgrid-halves` for responsive.
- No `!important` unless absolutely necessary (only used on background-size and .hidden utility).
