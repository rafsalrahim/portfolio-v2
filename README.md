# Rafsal Rahim — Personal Portfolio

A premium, statically generated personal portfolio site built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed for deployment on **Cloudflare Pages**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | DM Sans + DM Serif Display + DM Mono (Google Fonts) |
| Deployment | Cloudflare Pages |

---

## Project Structure

```
rafsal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles, CSS variables, utility classes
│   ├── not-found.tsx       # 404 page
│   ├── work/
│   │   ├── page.tsx        # Work page (server component)
│   │   └── WorkPageClient.tsx  # Interactive filter + case studies
│   └── about/
│       └── page.tsx        # About page
│
├── components/
│   ├── Nav.tsx             # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Site footer
│   ├── ui/
│   │   ├── FadeIn.tsx      # Scroll-triggered fade animations
│   │   └── SectionLabel.tsx # Uppercase section label
│   └── sections/
│       ├── HeroSection.tsx
│       ├── CredibilitySection.tsx
│       ├── ServicesSection.tsx
│       ├── FeaturedWorkSection.tsx
│       ├── OpenSourceSection.tsx
│       ├── PhilosophySection.tsx
│       └── ContactSection.tsx
│
├── lib/
│   └── data.ts             # All site content (projects, stats, skills)
│
├── public/
│   ├── _headers            # Cloudflare Pages security headers
│   ├── _redirects          # Cloudflare redirects
│   └── robots.txt
│
├── next.config.js          # Static export config
├── tailwind.config.ts
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build (static export)

```bash
npm run build
```

Output goes to `./out/` — ready to deploy.

---

## Deployment on Cloudflare Pages

1. Push this repo to GitHub or GitLab
2. In Cloudflare Pages dashboard → **Create a project**
3. Connect your repository
4. Set build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18

5. Deploy — Cloudflare handles everything else.

> The `public/_headers` file configures security headers and cache rules automatically via Cloudflare Pages.

---

## Customisation

### Updating Content

All content lives in **`lib/data.ts`**:

- `projects` — case study entries (Work page)
- `openSourceProjects` — GitHub repos (Home + About)
- `credibilityStats` — numbers in credibility bar
- `servicePillars` — "What I build" section
- `skills` — skill tag cloud (About page)

### Adding a New Project

```ts
// lib/data.ts
{
  slug: 'my-new-project',
  title: 'My New Project',
  tagline: 'One-line description',
  category: ['infrastructure'],      // filter categories
  problem: 'The problem I solved...',
  whatIDid: 'What I built...',
  stack: ['Go', 'Docker', 'AWS'],
  outcome: 'What shipped...',
  link: 'https://github.com/...',
  linkLabel: 'View on GitHub',
  featured: true,                    // shows on home page
  year: '2025',
}
```

### Changing Personal Info

Update the following:
- `app/layout.tsx` — SEO metadata, site URL
- `components/Nav.tsx` — email in "Hire me" button
- `components/Footer.tsx` — all links
- `components/sections/ContactSection.tsx` — contact info
- `app/about/page.tsx` — bio, timeline, links

---

## Design Tokens

Key CSS variables in `app/globals.css`:

```css
--background: #fafaf9;        /* warm off-white */
--foreground: #1c1917;        /* near-black */
--muted: #78716c;             /* medium stone */
--border: #e7e5e4;            /* light border */
--surface: #ffffff;           /* card backgrounds */
```

Font stack: **DM Serif Display** (headings) + **DM Sans** (body) + **DM Mono** (code/labels)

---

## Performance Notes

- All pages are statically generated at build time
- Google Fonts loaded with `font-display: swap`
- Images configured as `unoptimized` for static export (add your own optimisation if needed)
- Framer Motion animations use `useInView` with `once: true` — no re-animation on scroll-back
- Bundle size kept minimal — no heavy UI library dependencies

---

## License

MIT — use freely, attribution appreciated.
