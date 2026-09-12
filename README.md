# Frontend System Design — LLD Practice

Practicing frontend Low-Level Design (component-level) patterns commonly asked in interviews.
Each component is built with reusability, accessibility, and clean state design in mind.

## Progress

| Component | Status | Key Concepts Practiced |
|---|---|---|
| Shimmer / CardSkeleton | ✅ Done | Reusable loading-state components |
| Modal | ✅ Done | Controlled state via `onClose` callback, `children` composition, portals |
| Accordion | ✅ Done | Single vs multi-expand state modeling, semantic `<button>`, ARIA (`aria-expanded`, `aria-controls`) |
| Tabs | 🔲 Not started | Compound component pattern |
| Data Table | 🔲 Not started | Sorting/filtering props, virtualization awareness |
| Toast / Notification | 🔲 Not started | Global state outside React tree, queueing |
| Form + Validation | 🔲 Not started | Controlled inputs, error state design |
| Protected Route | 🔲 Not started | Route guarding, HOC/wrapper pattern |

## Structure

```
LLD-patterns/
  Modal.tsx
  Accordian.tsx
  shimmer/
    Shimmer.tsx
    CardSkeleton.tsx
```

Each component lives as a single file if it's self-contained, or a folder if it naturally splits into
multiple pieces (e.g. header/panel, or list/item).

## Notes / Learnings per component

### Accordion
- State modeled as `openIds: string[]` — one array drives both single and multi-expand modes.
- On click: if the id is already in `openIds`, remove it (close). If not, add it — in single mode by
  replacing the array with just that id, in multi mode by appending to the existing array.
- Used semantic `<button>` instead of `<div onClick>` for built-in keyboard accessibility.
- Added `aria-expanded` and `aria-controls` to link the header to its panel for screen readers.
- Used a stable field (title/id) as the React `key` instead of array index, since index breaks if the
  list is ever reordered or filtered.

### Modal
- State (`isOpen`) lives in the parent; Modal receives an `onClose` callback rather than the raw
  `setState` setter — keeps Modal decoupled from *how* the parent manages its state.
- Uses `children` for body content instead of a fixed "content" prop, for flexibility.
- Follow-ups worth mentioning in an interview even if not fully implemented: portal to
  `document.body`, Escape-key handling, backdrop click + `stopPropagation`, body scroll lock,
  `role="dialog"` + `aria-modal` + focus return on close.

### Shimmer / CardSkeleton
- Reusable loading-state placeholder matching the final card layout, so content doesn't jump/shift
  once real data loads.

## Approach

- Design the state shape and props API before writing any JSX.
- Prefer controlled, "dumb" child components (state lives in the parent, child just reports events)
  over children managing their own internal state — this is the pattern behind both Modal and
  Accordion above.
- Add accessibility (semantic elements, ARIA attributes, keyboard support) as a standard part of each
  component, not an afterthought.

---

<details>
<summary>Project setup (Next.js boilerplate)</summary>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js)

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)
for more details.

</details>