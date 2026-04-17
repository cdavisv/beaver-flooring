# Beaver Flooring Foundation Spec

## Chosen Approach

Considered approaches:

1. Docs-only IA package focused on sitemap and page copy planning.
   Feasibility: high. Completeness: low for downstream engineering. Risk: leaves architectural ambiguity.

2. Foundation package with IA, SEO, CSS token system, layout rules, content contracts, and repo topology.
   Feasibility: high. Completeness: high. Risk: low because it keeps decisions reversible while removing developer ambiguity.

3. Full Next.js scaffold plus design system implementation.
   Feasibility: medium. Completeness: high. Risk: outside the UX-architect scope for this step and too opinionated without app-owner approval.

Selected: approach 2 because it satisfies the role requirements, unblocks implementation, and keeps the repository aligned with the current workflow stage.

## Brand And Theme Model

- Visual direction: corporate, warm-neutral, trustworthy
- Accent model: navy base with warm gray surfaces and copper/gold emphasis
- Theme support: `light`, `dark`, `system`
- Theme implementation default: `data-theme` on `html` with OS preference fallback

## Design Tokens

Use semantic tokens only. No hardcoded hex values inside component styles.

### Color Tokens

```css
:root {
  --color-bg-canvas: var(--color-stone-050);
  --color-bg-surface: var(--color-sand-000);
  --color-bg-elevated: var(--color-sand-025);
  --color-bg-accent: var(--color-navy-700);
  --color-fg-default: var(--color-slate-900);
  --color-fg-muted: var(--color-slate-600);
  --color-fg-inverse: var(--color-sand-000);
  --color-border-soft: var(--color-stone-200);
  --color-border-strong: var(--color-stone-400);
  --color-action-primary: var(--color-copper-500);
  --color-action-primary-hover: var(--color-copper-600);
  --color-action-secondary: var(--color-navy-700);
  --color-action-secondary-hover: var(--color-navy-800);
  --color-state-success: var(--color-moss-600);
  --color-state-warning: var(--color-amber-500);
  --color-state-danger: var(--color-rust-600);
}
```

Primitive palette names:

- `stone`
- `sand`
- `slate`
- `navy`
- `copper`
- `moss`
- `amber`
- `rust`

### Typography Tokens

```css
:root {
  --font-display: "Source Serif 4", serif;
  --font-body: "Source Sans 3", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-md: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.375rem;
  --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;
  --text-4xl: 3rem;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
}
```

### Spacing Tokens

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;
  --space-10: 8rem;
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --shadow-soft: 0 8px 24px rgb(15 23 42 / 0.08);
  --shadow-strong: 0 20px 48px rgb(15 23 42 / 0.18);
  --container-sm: 40rem;
  --container-md: 64rem;
  --container-lg: 80rem;
}
```

## Breakpoint Strategy

- Mobile first
- `480px`: large mobile
- `768px`: tablet
- `1024px`: laptop
- `1280px`: desktop

Use fluid sizing between breakpoints where possible. Avoid component-only breakpoint drift by centralizing media query tokens.

## Layout Framework

- Grid for page shells, service card matrices, proof sections, and footer columns
- Flexbox for nav alignment, button groups, trust strips, and inline metadata
- Shared page container should clamp width to `--container-lg`
- Default section rhythm: `var(--space-8)` on desktop, `var(--space-6)` on mobile

### Core Layout Objects

- `.o-shell`: root page frame with sticky header and footer
- `.o-container`: centered content wrapper
- `.o-section`: vertical rhythm wrapper
- `.o-grid-auto`: responsive repeat grid
- `.o-sidebar`: content plus aside pattern for guides and contact pages
- `.o-stack`: vertical flex stack with configurable gap
- `.o-cluster`: inline flex row with wrap

## Component Architecture

Recommended naming:

- `o-` for layout objects
- `c-` for components
- `u-` for single-purpose utilities
- `is-` / `has-` for state classes

Core components:

- `c-site-header`
- `c-theme-toggle`
- `c-emergency-banner`
- `c-hero`
- `c-service-card`
- `c-proof-strip`
- `c-testimonial-card`
- `c-gallery-rail`
- `c-faq-accordion`
- `c-contact-form`
- `c-map-panel`
- `c-team-card`
- `c-legal-content`

## Repo Topology Recommendation

```text
app/
  (marketing)/
    layout.tsx
    page.tsx
    about/page.tsx
    about/team/page.tsx
    contact/page.tsx
    faq/page.tsx
    privacy-policy/page.tsx
    services/page.tsx
    services/[slug]/page.tsx
    terms-of-service/page.tsx
    testimonials-case-studies/page.tsx
    guides/[slug]/page.tsx
components/
  layout/
  marketing/
  forms/
  seo/
content/
  services/
  guides/
  testimonials/
lib/
  schema/
  seo/
  utils/
styles/
  tokens.css
  themes.css
  objects.css
  components.css
planning/
  website/
```

## Data Contracts

### Service Contract

```ts
type ServiceEntry = {
  slug: string;
  name: string;
  summary: string;
  audience: "residential" | "commercial" | "mixed";
  emergencyEligible: boolean;
  problemsSolved: string[];
  processSteps: string[];
  faqItems: { question: string; answer: string }[];
  proofIds: string[];
  seo: {
    title: string;
    description: string;
  };
};
```

### Testimonial Contract

```ts
type TestimonialEntry = {
  id: string;
  customerName: string;
  customerType: "homeowner" | "property-manager" | "real-estate";
  quote: string;
  relatedServiceSlugs: string[];
  locationLabel: string;
  featured: boolean;
};
```

### FAQ Contract

```ts
type FaqEntry = {
  question: string;
  answer: string;
  category: "pricing" | "timeline" | "frequency" | "pro-vs-diy" | "emergency";
};
```

## Schema Compliance Plan

- Generate JSON-LD centrally in `lib/schema`
- Keep schema inputs typed and page-owned
- Validate presence of `name`, `description`, `areaServed`, and contact fields before rendering `LocalBusiness` data
- Keep testimonial content attributable before using `Review` schema

## Responsive UX Rules

- Header actions collapse into a two-row pattern on smaller screens before using a menu drawer
- Contact CTAs remain visible above form fold on mobile
- Service cards should stack to one column below `768px`
- Gallery rail becomes swipeable on touch devices

## Implementation Priorities

1. Scaffold route topology and shared layout
2. Create tokens, theme variables, and typography system
3. Build header, footer, emergency banner, and CTA primitives
4. Implement page templates
5. Wire structured content contracts and schema helpers
6. Populate content and proof modules
7. Add analytics events and QA pass

## Low-Ops Defaults

- Forms: serverless submission path with email notification
- Map: Google Maps embed instead of custom map stack
- Content source: local structured content files first
- Auth: no public auth; defer admin login selection until editing workflow is defined

## Open Assumptions To Preserve

- Service area subpages are deferred until unique localized content exists
- Offerings are normalized from the workflow brief because service list was not explicitly provided
- Brand voice is inferred as clear, corporate, and trustworthy because no copy guide was provided
