# Asgard Dynamics Website

Professional landing website for [Asgard Dynamics](https://asgarddynamics.io) — a technology company building software products, intelligent systems, automation platforms, and future-focused digital solutions.

## Tech Stack

- **React 19** with **Vite**
- Single global CSS file (no CSS framework)
- Fully static — no backend, database, or authentication

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (included with Node.js)

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. Vite will hot-reload as you edit files.

### Build for production

```bash
npm run build
```

Output is written to the `dist/` folder. Preview the production build locally:

```bash
npm run preview
```

## Deployment

This is a static site and deploys easily to any static host. Recommended options:

### Vercel

1. Push the project to GitHub.
2. Import the repository at [vercel.com](https://vercel.com).
3. Vercel auto-detects Vite — no extra configuration needed.
4. Set the custom domain to `asgarddynamics.io`.

### Netlify

1. Push the project to GitHub.
2. Connect the repo at [netlify.com](https://netlify.com).
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add the custom domain `asgarddynamics.io`.

### Other hosts

Upload the contents of `dist/` to any static file host (Cloudflare Pages, GitHub Pages, AWS S3, etc.).

## Project Structure

```
src/
├── assets/
│   └── logo.png          # Official Asgard Dynamics logo
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Capabilities.jsx
│   ├── Products.jsx
│   ├── Process.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── ForwardArrows.jsx # Brand arrow motif (>>>)
├── App.jsx
├── main.jsx
└── index.css             # Global styles and design system
```

## Brand Colors

| Token        | Hex       | Usage                    |
|--------------|-----------|--------------------------|
| Strong Red   | `#E30613` | Primary actions, accents |
| Dark Grey    | `#575756` | Text, secondary elements |
| Background   | `#FFFFFF` | Main background          |
| Alt Background | `#F7F7F6` | Section alternation    |

## License

© 2026 Asgard Dynamics. All rights reserved.
