# Beaver Flooring Page Briefs

## Shared UX Rules

- Every primary page must show a primary CTA above the fold
- Header includes phone CTA, estimate CTA, and theme toggle
- Footer includes license number, insurance info, and BBB badge placeholder
- Emergency banner appears site-wide and can link to emergency plumbing contact flow
- Mobile-first layout with stacked content up to tablet breakpoint

## Home

- Goal: establish trust fast and route users to contact or the right service
- Audience: all visitor segments, especially urgent residential leads
- Primary CTA: Call now
- Secondary CTA: Request estimate
- Modules: Emergency banner, hero with location-led promise, service category cards, testimonials preview, before/after gallery preview, service area map preview, team credibility strip, FAQ preview, contact form teaser
- Suggested schema: `LocalBusiness`, `Plumber`, `FAQPage`

## Services Hub

- Goal: help users self-select the right service path
- Primary CTA: Request estimate
- Secondary CTA: Call for emergency help
- Modules: services overview grid, residential vs commercial split, process overview, why choose Beaver Flooring, related testimonials, service area reassurance
- Suggested schema: `ItemList`, `Service`

## Residential Plumbing

- Goal: convert homeowners needing standard plumbing help
- Primary CTA: Schedule service
- Modules: problems solved, service checklist, repair/replacement decision aid, residential testimonial, FAQ block
- Suggested schema: `Service`, `FAQPage`

## Commercial Plumbing

- Goal: convert property managers and commercial operators
- Primary CTA: Request commercial consultation
- Modules: commercial capabilities, response and coordination process, property types served, case study spotlight
- Suggested schema: `Service`

## Drain Cleaning & Repair

- Goal: capture high-intent search traffic for drain issues
- Primary CTA: Book drain service
- Modules: symptoms and warning signs, service process, when to call fast, related FAQ
- Suggested schema: `Service`, `FAQPage`

## Water Heater Services

- Goal: convert replacement and repair leads
- Primary CTA: Get water heater help
- Modules: repair vs replacement guidance, unit types supported, timeline expectations, testimonial
- Suggested schema: `Service`

## Emergency Plumbing

- Goal: turn urgent searches into direct calls
- Primary CTA: Call emergency line
- Secondary CTA: Send urgent request
- Modules: immediate-response messaging, emergency issue list, service radius summary, trust and response expectations
- Suggested schema: `EmergencyService` via `Service` + `LocalBusiness`

## Testimonials & Case Studies

- Goal: prove reliability with local evidence
- Primary CTA: Request estimate
- Modules: featured reviews, before/after gallery, short case studies by service type, review CTA
- Suggested schema: `Review`, `AggregateRating`, `ImageGallery`

## About

- Goal: humanize the company and reinforce credibility
- Primary CTA: Meet the team
- Secondary CTA: Contact us
- Modules: company overview, mission and values, credentials, service philosophy, community/local connection
- Suggested schema: `Organization`

## Team

- Goal: build trust through identifiable people and experience
- Primary CTA: Contact the team
- Modules: team grid, bio cards, certifications or specialties
- Suggested schema: `Person`, `Organization`

## FAQ

- Goal: reduce friction before contact
- Primary CTA: Ask your question
- Modules: pricing and estimates, project timelines, service frequency, professional vs DIY, emergency response
- Suggested schema: `FAQPage`

## Contact

- Goal: maximize lead capture across phone, form, and map interactions
- Primary CTA: Submit request
- Secondary CTA: Call now
- Modules: contact form, emergency contact callout, phone and email, service area map, hours and response window
- Suggested schema: `ContactPage`, `LocalBusiness`

## Privacy Policy

- Goal: meet legal and trust expectations
- Modules: data collection summary, form submission handling, analytics disclosure, contact for privacy requests

## Terms of Service

- Goal: document business terms for website use and service inquiry expectations
- Modules: website use terms, estimate disclaimer, scheduling and availability disclaimer, liability boundaries

## Supporting Guides

### Pricing And Estimates Guide

- Goal: rank for cost-intent informational queries and funnel to contact
- CTA: Request a tailored estimate

### Project Timeline Guide

- Goal: set expectations and reduce hesitation
- CTA: Ask about your project timeline

### Service Frequency Guide

- Goal: capture maintenance intent and repeat-service planning
- CTA: Schedule preventative service

### Professional Vs DIY Guide

- Goal: convert informational traffic by clarifying risks and thresholds
- CTA: Talk to a licensed pro

## Content Model

- Service pages should pull from a shared service contract with these fields: `slug`, `name`, `summary`, `audience`, `problemsSolved[]`, `processSteps[]`, `faqItems[]`, `relatedTestimonials[]`, `primaryCta`, `secondaryCta`, `schemaType`

## Component Priority

AXL: id=ux-page-briefs-1; to=@frontend-dev; pri=hi; c=handoff; st=proposed; art=components
1=site shell; 2=hero+cta band; 3=service card grid; 4=testimonial card; 5=gallery rail; 6=faq accordion; 7=contact form; 8=map block; 9=legal template
