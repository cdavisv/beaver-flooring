import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { GalleryRail } from "@/components/marketing/gallery-rail";
import { Hero } from "@/components/marketing/hero";
import { MapPanel } from "@/components/marketing/map-panel";
import { ProofStrip } from "@/components/marketing/proof-strip";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServiceCard } from "@/components/marketing/service-card";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import {
  faqCategories,
  galleryItems,
  services,
  testimonials,
} from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";
import { buildFaqSchema } from "@/lib/schema";

export const metadata = getBaseMetadata({
  title: "Beaver Flooring Plumbing Services in Beaverton & Portland Metro",
  description:
    "Beaver Flooring provides residential, commercial, and emergency plumbing services across Beaverton and the Portland metro area. Call for fast, professional help.",
  path: "/",
});

export default function HomePage() {
  const featuredFaqs = faqCategories
    .flatMap((group) => group.items)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={buildFaqSchema(featuredFaqs)} />
      <Hero
        eyebrow="Beaverton plumbing partner"
        title="Professional plumbing help with fast emergency response and clear next steps."
        description="Beaver Flooring supports homeowners, property managers, and real estate partners with residential, commercial, drain, water heater, and emergency plumbing services across the Portland metro area."
        actions={[
          {
            href: businessInfo.phoneHref,
            label: "Call now",
            variant: "secondary",
          },
          { href: "/contact", label: "Request estimate", variant: "primary" },
        ]}
        aside={
          <div className="surface-card stack" style={{ padding: "28px" }}>
            <p className="eyebrow">Why people call us</p>
            <h2 style={{ margin: 0, fontSize: "1.7rem" }}>
              A polished service experience, even when the issue is urgent.
            </h2>
            <ul
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "var(--fg-muted)",
              }}
            >
              <li>Emergency call triage and rapid dispatch guidance</li>
              <li>Residential and commercial plumbing support</li>
              <li>Clear repair versus replacement recommendations</li>
              <li>Service-area coverage throughout Portland metro</li>
            </ul>
          </div>
        }
      />

      <section className="section-tight">
        <div className="container">
          <ProofStrip
            items={[
              { label: "Coverage", value: "Beaverton + Portland metro" },
              { label: "Credentials", value: businessInfo.license },
              { label: "Protection", value: businessInfo.insurance },
              { label: "Availability", value: businessInfo.emergencyHours },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Core services"
            title="Choose the service path that matches the problem and the property."
            copy="Every service page includes scope guidance, what we solve, and the fastest contact path for that type of work."
          />
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Proof"
            title="Local outcomes that show the work and the communication."
            copy="We built the site around credibility because clarity and trust matter before a homeowner or property manager ever fills out a form."
          />
          <div className="grid-3">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link
              className="button button-tertiary"
              href="/testimonials-case-studies"
            >
              View testimonials and case studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Before and after"
            title="Representative project outcomes across repair, maintenance, and replacement work."
            copy="The gallery uses proof-led summaries so visitors can quickly understand the improvement, not just look at a placeholder image."
          />
          <GalleryRail items={galleryItems} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Service area"
            title="Built for local discovery and quick contact across the Portland metro area."
            copy="We support Beaverton first, while covering nearby communities where response speed and clear scheduling still matter."
          />
          <MapPanel />
        </div>
      </section>

      <section className="section">
        <div className="container content-shell">
          <div>
            <SectionHeading
              eyebrow="FAQ preview"
              title="Answers that reduce friction before someone reaches out."
              copy="The full FAQ page expands on pricing, timing, maintenance rhythm, emergency response, and when it makes sense to call a pro."
            />
            <FaqAccordion items={featuredFaqs} />
            <div style={{ marginTop: "24px" }}>
              <Link className="button button-tertiary" href="/faq">
                See all FAQs
              </Link>
            </div>
          </div>
          <div className="stack">
            <SectionHeading
              eyebrow="Request service"
              title="Start with a form, then keep the phone line ready for urgent issues."
              copy="The launch version uses a low-ops server-side contact handler inside the Next.js app so leads can be captured without a separate backend service."
            />
            <ContactForm />
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a plumbing partner for urgent repairs or planned work?"
        copy="Call for immediate help or send a request with location, service type, and the best callback window."
        primaryHref="/contact"
        primaryLabel="Request service"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
