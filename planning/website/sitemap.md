# Beaver Flooring Website Sitemap

## Foundation Assumptions

- Site archetype: local service business website
- Platform target: Next.js on Vercel
- Primary conversion goals: phone calls, emergency inquiries, quote requests, general contact submissions
- Theme support: light, dark, system toggle on every public page
- Navigation model: shallow primary nav with focused service discovery and strong contact access

## Primary Navigation

- Home
- Services
- Testimonials & Case Studies
- About
- FAQ
- Contact

Utility actions:

- Emergency Call CTA
- Request Estimate CTA
- Theme Toggle

Footer navigation:

- Services
- About
- Testimonials & Case Studies
- FAQ
- Contact
- Privacy Policy
- Terms of Service

## Sitemap

- `/` Home
- `/services` Services hub
- `/services/residential-plumbing` Residential plumbing
- `/services/commercial-plumbing` Commercial plumbing
- `/services/drain-cleaning-repair` Drain cleaning and repair
- `/services/water-heater-services` Water heater services
- `/services/emergency-plumbing` Emergency plumbing
- `/testimonials-case-studies` Testimonials and case studies hub
- `/about` About
- `/about/team` Team
- `/faq` FAQ
- `/contact` Contact
- `/privacy-policy` Privacy policy
- `/terms-of-service` Terms of service
- `/guides/pricing-estimates` Pricing and estimates guide
- `/guides/project-timeline` Project timeline guide
- `/guides/service-frequency` Service frequency guide
- `/guides/pro-vs-diy` Professional vs DIY guide

## Page Hierarchy

Level 1:

- Home
- Services
- Testimonials & Case Studies
- About
- FAQ
- Contact

Level 2:

- Service detail pages
- Team page
- Educational guides
- Legal pages

## Reusable Page Templates

### 1. Primary Landing Template

Used for:

- Home
- Services hub
- Testimonials & Case Studies hub

Sections:

- Emergency service banner
- Hero with primary CTA and trust strip
- Value proposition grid
- Featured services or stories
- Proof block with testimonials and badges
- Service area map or coverage statement
- Contact capture section

### 2. Service Detail Template

Used for:

- All service detail pages

Sections:

- Service hero with intent-specific CTA
- Common problems addressed
- Process steps
- Before and after or outcomes module
- FAQs specific to service
- Related services
- Bottom CTA band

### 3. Company Story Template

Used for:

- About
- Team

Sections:

- Intro hero
- Company background
- Team bios
- Credentials and insurance block
- Service values
- CTA to contact

### 4. Conversion Utility Template

Used for:

- Contact
- FAQ

Sections:

- Intro hero
- Utility content body
- Form or accordion content
- Callout box for urgent needs
- Supporting trust panel

### 5. Legal Template

Used for:

- Privacy policy
- Terms of service

Sections:

- Simple header
- Dated legal content body
- Contact details for policy questions

### 6. Editorial Guide Template

Used for:

- All four supporting guides

Sections:

- Search-intent hero
- Straight answer summary
- Detailed educational sections
- Why hire a professional block
- Local CTA band

## Navigation Tree

```text
Home
Services
Residential Plumbing
Commercial Plumbing
Drain Cleaning & Repair
Water Heater Services
Emergency Plumbing
Testimonials & Case Studies
About
Team
FAQ
Contact
```

## UX Structure Rules

- Keep primary nav to six links plus utility CTAs
- Surface phone and emergency actions in the header on all breakpoints
- Put quote-request CTA above the fold on every revenue page
- Use breadcrumbs on service detail pages and guides
- Keep legal pages out of primary nav and in the footer only

## Implementation Order

AXL: id=ux-sitemap-impl; to=@frontend-dev; pri=hi; c=build-order; st=proposed; art=routes
  foundation -> shared layout -> primary pages -> service detail templates -> guides -> legal pages -> polish
