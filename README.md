# Beaver Flooring Website

Beaver Flooring Website is a multi-page Next.js marketing site for a Beaverton and Portland metro plumbing business. It is built to help homeowners, property managers, and real estate partners quickly understand services, trust the company, and convert through emergency phone calls or contact-form inquiries.

This repo now includes the actual website application, shared content contracts for services and guides, the planning artifacts that informed the build, and a low-ops in-app contact handler suitable for a Vercel deployment.

## What the repo includes

- `app/`: Next.js App Router pages, layouts, route handlers, and global styles
- `components/`: reusable layout, marketing, form, theme, and SEO components
- `lib/`: typed site data, content contracts, metadata helpers, and JSON-LD builders
- `planning/website/`: sitemap, page briefs, SEO map, design tokens, and UI system specs used as implementation inputs
- `__tests__/`: Jest and React Testing Library coverage for interactive UI and contact-flow behavior

## Stack

- Next.js 15
- React 19
- TypeScript with strict mode
- CSS custom properties for the design-token layer
- Jest + React Testing Library for tests
- ESLint + Prettier for code quality

## Prerequisites

- Node.js 20 or newer
- npm 10 or newer

Check your versions if needed:

```bash
node --version
npm --version
```

## Install and run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Environment variables

Create a `.env.local` file in the repo root when you want to override the default local settings.

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps?q=Beaverton%2C%20Oregon&z=10&output=embed
NEXT_PUBLIC_GA_ID=
```

Notes:

- `NEXT_PUBLIC_SITE_URL` is used for canonical metadata and JSON-LD URLs.
- `GOOGLE_MAPS_EMBED_URL` lets you swap in a production map embed without changing code.
- `NEXT_PUBLIC_GA_ID` is reserved for future analytics wiring. The current site does not yet emit GA events.

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run format
npm run format:check
```

## Contact flow behavior

- The contact form posts to `app/api/contact/route.ts`
- The current implementation validates required fields, rejects malformed payloads, and rate limits repeated requests by source IP
- Every accepted submission is archived as JSONL on the server filesystem
- If `CONTACT_WEBHOOK_URL` is configured, the route also forwards each saved submission to that webhook for email, CRM, or automation handoff
- It stays inside the Next.js app boundary, so the frontend can post directly to `/api/contact`

Additional backend env vars:

```bash
CONTACT_ARCHIVE_PATH=/tmp/beaver-flooring-contact-submissions.jsonl
CONTACT_WEBHOOK_URL=
CONTACT_WEBHOOK_TOKEN=
CONTACT_RATE_LIMIT_MAX=5
CONTACT_RATE_LIMIT_WINDOW_MS=900000
```

Notes:

- `CONTACT_ARCHIVE_PATH` controls where the JSONL archive is written. For local development, you can point this at a repo-local path like `.data/contact-submissions.jsonl` if you want to inspect saved leads.
- `CONTACT_WEBHOOK_URL` is optional. Set it to a Zapier, Make, Resend, Slack, CRM, or custom intake endpoint to push notifications downstream.
- `CONTACT_WEBHOOK_TOKEN` is sent as a bearer token when present.
- `CONTACT_RATE_LIMIT_MAX` and `CONTACT_RATE_LIMIT_WINDOW_MS` tune the per-IP throttle for the contact route.

## Verification checklist

Run these commands:

```bash
npm run lint
npm run test
npm run build
```

Then verify:

- The homepage loads with the emergency banner, header CTAs, and theme toggle
- Required pages render: `/`, `/about`, `/about/team`, `/services`, `/faq`, `/contact`, `/privacy-policy`, `/terms-of-service`, `/testimonials-case-studies`
- Expanded sitemap pages render: service detail routes and the four guide pages
- The contact form shows success for complete submissions and an error for missing or malformed required fields
- Repeated submissions from the same IP eventually return HTTP `429`
- New submissions appear in the configured JSONL archive path, and webhook delivery happens when `CONTACT_WEBHOOK_URL` is set
- The map panel renders with both an iframe and plain-text service-area coverage

## Deployment

The intended hosting target is Vercel.

Typical deployment flow:

```bash
npm run build
```

Set the production environment variables in Vercel before shipping. The recommended production setup is to keep the route in-app, set `CONTACT_WEBHOOK_URL` to the real lead destination, and treat the filesystem archive as a secondary safety copy rather than the primary source of record.

## Planning references

Implementation aligns to these files:

- `planning/website/sitemap.md`
- `planning/website/page-briefs.md`
- `planning/website/seo-map.md`
- `planning/website/foundation-spec.md`
- `planning/website/ui-system-spec.md`
- `planning/website/design-tokens.json`
