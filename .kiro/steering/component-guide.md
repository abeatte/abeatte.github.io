---
inclusion: fileMatch
fileMatchPattern: "src/Components/**"
---

# Component Development Guide

## Adding a New Section Component

1. Create `src/Components/NewSection.tsx` with this pattern:

```tsx
import { Element } from 'react-scroll';
import { useSiteData } from '../../app/dataProvider';

export default function NewSection() {
  const siteData = useSiteData();

  return (
    <Element name='newsection'>
      <section id="newsection">
        <div className="row">
          {/* content */}
        </div>
      </section>
    </Element>
  );
}
```

2. Add the component to `src/Components/App.tsx` inside the `<Suspense>` block.
3. Add a nav link in `src/Components/Header.tsx` using react-scroll's `Link`.
4. Add any new data to `public/data.json` and update the `Data` type in `app/dataProvider.tsx`.
5. Add section styles to `public/css/layout.css` and responsive overrides to `public/css/media-queries.css`.

## Adding a New Page Route

1. Create `app/newpage/[[...slug]]/page.tsx`:

```tsx
import { NewPageClientOnly } from './newpageClient'

export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default function Page() {
  return <NewPageClientOnly />
}
```

2. Create the companion client file `app/newpage/[[...slug]]/newpageClient.tsx`:

```tsx
'use client'

import dynamic from 'next/dynamic'

const NewPage = dynamic(() => import('../../../src/Components/NewPage'), { ssr: false })

export function NewPageClientOnly() {
  return <NewPage />
}
```

3. Create the component in `src/Components/NewPage.tsx`.

## Key Patterns

- Every scrollable section wraps content in `<Element name='sectionname'>`.
- Navigation links use `<Link smooth={true} duration={500} to="sectionname">`.
- FontAwesome brand icons are globally registered via `library.add(fab)` in App.tsx. Solid icons are imported per-component.
- The `Konami` component in Header.tsx toggles a hidden nav item — this is the easter egg that reveals the Playground link.
- Google Analytics is initialized once in App.tsx via `useEffect`.
