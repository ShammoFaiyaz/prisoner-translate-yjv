# Prisoner Intelligent Translation Platform (PITP) – Dashboard

React + TypeScript + Vite + TailwindCSS dashboard for the Prisoner Intelligent Translation Platform (PITP).

## Tech

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router (multi-page layout)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Netlify

Single-Page App routing is configured:

- `netlify.toml` and `public/_redirects` route all paths to `index.html`.

## Structure

- `src/layouts/DashboardLayout.tsx` – shared sidebar + content shell
- `src/pages/*` – individual routed pages (Overview, Monitor, Security, Operations, Legal, Health, Languages, Vision 2030)
- `src/components/*` – reusable cards, tables, and sections

## License

Private project – All rights reserved.


