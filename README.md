# Beaver Flooring Website

Beaver Flooring Website is a planned multi-page business website for a Portland-metro plumbing service brand. This repository currently contains the UX architecture, information architecture, SEO foundation, and implementation handoff needed before the Next.js application is scaffolded.

The site is intended for homeowners, property managers, and real estate partners who need plumbing services in Beaverton and the broader Portland metro area. The delivery target is a professional, mobile-first, lead-generation website deployed on Vercel with strong local SEO, clear service differentiation, and prominent emergency-service calls to action.

## What Is In This Repo Today

- `planning/website/sitemap.md`: sitemap, nav tree, page hierarchy, and reusable page templates
- `planning/website/page-briefs.md`: page-by-page UX briefs, content hierarchy, CTA plan, and schema coverage
- `planning/website/seo-map.md`: metadata map, URL plan, keyword intent, and internal-linking guidance
- `planning/website/foundation-spec.md`: CSS system, layout framework, component architecture, content model, and implementation priorities
- `planning/website/design-tokens.json`: machine-readable design tokens for color, typography, spacing, layout, and component sizing
- `planning/website/ui-system-spec.md`: UI component specs, interaction states, accessibility rules, and repeated section patterns

## Intended Stack

- Framework: Next.js
- Hosting: Vercel
- Styling: CSS custom properties with semantic design tokens
- Analytics: Google Analytics
- Integrations: contact forms with email notifications, Google Maps embed, click-to-call links, social links

## Current Status

This branch does not yet include a scaffolded Next.js app, `package.json`, or runnable local server. The current deliverable is the project foundation package that downstream implementation agents will build from.

## Prerequisites

- Git, to clone or inspect the repository
- A text editor or IDE to review the planning files
- Node.js is not yet required on this branch because no runnable application files have been added yet

## Review The Planning Package

```bash
git clone https://github.com/cdavisv/beaver-flooring.git
cd beaver-flooring
find planning -maxdepth 2 -type f | sort
```

## Planned Environment Variables For The App Build

These are planning assumptions for the upcoming Next.js implementation, not active runtime requirements on this branch.

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`
- `CONTACT_FORM_TO_EMAIL`
- `GOOGLE_MAPS_EMBED_URL`

## Planned First Bootstrap After App Scaffold Exists

These commands are not available yet on this branch because the app has not been scaffolded.

```bash
npm install
npm run dev
```

## Verification Checklist For This Branch

- `README.md` reflects the actual repo state and notes that the app is not scaffolded yet
- `planning/website/sitemap.md` exists
- `planning/website/page-briefs.md` exists
- `planning/website/seo-map.md` exists
- `planning/website/foundation-spec.md` exists
- `planning/website/design-tokens.json` exists
- `planning/website/ui-system-spec.md` exists

## Delivery Assumptions

- Brand positioning uses a corporate, trustworthy tone with warm-neutral colors and navy/copper accents
- The site should ship with a light/dark/system theme toggle by default
- The lowest-ops implementation path is a statically rendered Next.js marketing site on Vercel with managed form delivery and no custom auth for public visitors
