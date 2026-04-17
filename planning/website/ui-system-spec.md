# Beaver Flooring UI System Spec

## Purpose

This document defines the visual system and component-level rules for the Beaver Flooring business website so downstream implementation can ship a consistent, accessible Next.js marketing site without inventing page-by-page UI patterns.

## System Principles

1. Trust before flourish. Use visual weight to foreground phone, estimate, and emergency actions over decorative treatments.
2. Reuse before variation. Secondary pages should be assembled from shared section patterns, not custom one-off layouts.
3. Accessibility before brand preference. If a branded color treatment misses WCAG AA, adjust the treatment instead of the rule.
4. Calm corporate warmth. The palette should feel established and professional, with warmth coming from sand, stone, and copper rather than bright saturation.

## Visual Direction

- Tone: corporate, dependable, local-service
- Palette: warm neutrals with navy structure and copper emphasis
- Art direction: clean photography, real crews, jobsite detail, materials, and before/after proof
- Texture: use soft tonal panels, rule lines, and restrained shadow; avoid glossy gradients or loud glassmorphism

## Theme Strategy

- Support `light`, `dark`, and `system`
- Default public experience: `light`
- Dark theme requirement: maintain the same information hierarchy and CTA prominence, not an inverted novelty theme
- Theme toggle placement: persistent in header utility area and repeated in footer utilities if implemented

## Typography Scale

| Token | Desktop Use | Mobile Use | Notes |
| --- | --- | --- | --- |
| `text-4xl` | Home hero headline | Rarely used | Reserve for primary hero only |
| `text-3xl` | Section headline | Hero headline | Use display face |
| `text-2xl` | Subsection headline | Section headline | Use on proof, FAQ, and service intros |
| `text-xl` | Card headline | Card headline | Keep line length compact |
| `text-lg` | Lead paragraph | Body emphasis | Use sparingly |
| `text-md` | Default body | Default body | Main paragraph size |
| `text-sm` | Metadata, labels | Metadata, labels | Minimum body-adjacent size |
| `text-xs` | Legal/supporting notes | Legal/supporting notes | Never for core CTA copy |

Typography rules:

- H1 count: one per page
- Max text line length: `70ch` for long-form body copy
- Button label case: title case
- Eyebrow labels: uppercase with wide tracking only for short section identifiers

## Layout And Spacing

- Base grid: 8px system
- Section padding: `48px` mobile, `64px` desktop, `96px` for hero and large proof sections when space allows
- Max content width: `1280px`
- Reading column width: `640px` to `720px`
- Card gap: `24px` desktop, `16px` mobile
- Form row gap: `16px`
- Sticky header minimum height: `72px` desktop, `64px` mobile

Responsive rules:

- Below `768px`, stack mixed-media sections vertically with copy before media unless urgency or proof requires the opposite
- At `768px` and above, service cards can move to 2-up; 3-up is reserved for desktop widths
- CTA button groups should stack on mobile when the combined width would force truncation

## Accessibility Baseline

- Text contrast: minimum `4.5:1`
- Large text contrast: minimum `3:1`
- Non-text focus/interactive indicators: minimum `3:1`
- Tap targets: minimum `44px x 44px`
- Focus style: visible 2px outline plus 2px offset using `focusRing` token
- Keyboard behavior: every accordion, nav action, gallery control, and theme toggle must be operable without a pointer
- Screen reader support: icon-only buttons require accessible labels; emergency banner links must be descriptive, not just "Learn more"
- Motion: respect `prefers-reduced-motion`; remove parallax, autoplay, and non-essential hover motion

## Core Components

### Site Header

- Structure: brand, primary nav, phone CTA, estimate CTA, theme toggle
- Desktop spacing: `24px` between nav groups
- Mobile behavior: preserve phone and estimate actions in view before collapsing nav links
- States:
  - default: transparent or surface-matched over hero
  - scrolled: solid surface with bottom border
  - focus-within: elevated focus treatment around nav cluster

### Emergency Banner

- Placement: site-wide above header
- Height: `44px` min
- Content: short urgency statement, service hours qualifier, emergency phone CTA
- Color treatment: high-contrast copper or navy band depending on theme
- Do not rotate multiple announcements in this area

### Buttons

Variants:

- primary: copper fill, inverse text, shadow only on hover-capable devices
- secondary: navy fill, inverse text
- tertiary: text with underline or low-emphasis outline
- urgent: visually tied to emergency banner, reserved for emergency plumbing flows

States:

- default
- hover
- active
- focus-visible
- disabled
- loading

Rules:

- Minimum button height `44px`, default `48px`
- Loading state keeps label width stable and announces busy state to assistive tech
- Disabled state must remain readable and distinct without relying on opacity alone

### Service Card

- Padding: `24px`
- Contents: icon or eyebrow, service title, short summary, bullet list or chips, CTA
- Layout: equal-height within a row on desktop; natural height on mobile
- Use cases: service hub, related services, homepage category grid

### Proof Strip

- Formats: badges row, stats row, credential callout
- Items to support: license number, insurance note, BBB badge placeholder, response-time claim with qualifier
- Avoid more than four proof items in a single row on desktop

### Testimonial Card

- Contents: quote, name, audience type, location label, related service tag
- Quote length target: `140` to `220` characters in featured grid
- Featured variant may include outcome summary or before/after caption

### Before/After Gallery Rail

- Use horizontally scrollable cards on mobile and grid on desktop
- Every image pair needs alt text that describes the job outcome, not just "before" or "after"
- Controls must be keyboard accessible and pause any motion by default

### FAQ Accordion

- Header target height: `56px` preferred
- Open state: chevron rotation optional, content spacing fixed
- Support deep-linking to categories or individual questions if feasible in implementation
- Never hide all FAQs behind JS-only behavior; content should remain available with progressive enhancement

### Contact Form

- Fields: name, phone, email, service type, location, message, optional preferred callback time
- Validation: inline text plus field-level error styling
- Required markers: text-based, not color-only
- Success state: confirmation message with expected response time and alternate phone CTA

### Map Panel

- Pair embedded map with plain-text service area summary so location info survives blocked embeds
- Desktop split: approx `60/40` map-to-details ratio
- Mobile order: service area summary before embed

### Team Card

- Contents: portrait, name, role, short bio, optional certification tags
- Keep bio line length short and consistent to avoid visual imbalance

### Legal Content Block

- Max width: `72ch`
- Include visible last-updated label near page title
- Anchor links for long legal sections recommended

## Reusable Section Patterns

### Hero + CTA Band

- Layout: headline, short proof-led subcopy, primary CTA, secondary CTA, trust microcopy
- Optional companion panel: service area list, contact card, or featured review
- Keep the first viewport focused on one core action

### Service Matrix

- Use for home and services hub
- 2-up tablet, 3-up desktop
- Include one "emergency" card variant with stronger emphasis

### Proof + Credentials Section

- Combine testimonial preview, badges, and operating assurances
- Best used after service explanation and before longer supporting content

### FAQ Preview Section

- Cap preview at 4 to 6 items on marketing pages
- Always include a path to the full FAQ page

### CTA Footer Band

- Use on services, guides, case studies, and about pages
- Include one primary action, one alternate contact path, and a short reassurance line

## Image And Icon Guidance

- Photography priority: real plumbing work, tools, technicians, installations, service vans, and property contexts from the Portland metro climate/use case
- Avoid generic flooring imagery because the project brief positions the brand as plumbing-focused
- Icon style: simple line or duotone icons with consistent stroke weight
- Preferred image ratio set:
  - hero/support image: `4:3`
  - gallery item: `3:2`
  - team portrait: `4:5`

## Developer Handoff Notes

- Implement tokens from [`design-tokens.json`](./design-tokens.json) as the source of truth for CSS variables
- Prefer component props for variants and sizes; avoid page-local style forks
- Repeated sections should be data-driven where possible so guides, services, and proof sections can reuse the same renderer
- Ensure form, accordion, and mobile nav behaviors work with progressive enhancement and server-rendered content

## Design QA Checklist

- Verify all CTA/button states against theme tokens in both light and dark themes
- Check heading hierarchy and one-H1 rule on every page template
- Confirm keyboard navigation order through header, banner, forms, accordions, and gallery controls
- Audit touch targets on mobile screenshots at `390px` width
- Recheck color contrast after any brand-image overlays or tinted photo treatments
- Confirm repeated templates use the same spacing, card padding, and CTA patterns across pages

## Assumptions

- Public site does not require custom authenticated UI for launch
- Booking flow should begin as a form plus phone CTA, not a custom calendar integration
- Icons and badges can start as placeholders if owner-provided brand assets are unavailable
