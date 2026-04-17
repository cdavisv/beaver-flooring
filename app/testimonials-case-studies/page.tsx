import Link from "next/link";
import { CtaBand } from "@/components/marketing/cta-band";
import { GalleryRail } from "@/components/marketing/gallery-rail";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudies, galleryItems, testimonials } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";
import { buildReviewsSchema } from "@/lib/schema";

export const metadata = getBaseMetadata({
  title: "Plumbing Reviews & Case Studies | Beaver Flooring",
  description:
    "Read customer testimonials, project outcomes, and before-and-after plumbing examples from Beaver Flooring clients.",
  path: "/testimonials-case-studies",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={buildReviewsSchema(testimonials)} />
      <PageIntro
        eyebrow="Testimonials & case studies"
        title="Proof that combines local reviews, before-and-after context, and short project stories."
        description="This page is built as the proof hub in the page matrix, linking the most persuasive customer evidence back to the matching service paths."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Before and after"
            title="A quick outcome gallery for repair, restoration, and replacement work."
          />
          <GalleryRail items={galleryItems} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Case studies"
            title="Short project stories aligned to the customer and property types this website targets."
          />
          <div className="grid-2">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="surface-card stack"
                style={{ padding: "24px" }}
              >
                <span className="badge">{study.service}</span>
                <h3 style={{ margin: 0 }}>{study.title}</h3>
                <p className="section-copy" style={{ margin: 0 }}>
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="section-copy" style={{ margin: 0 }}>
                  <strong>Solution:</strong> {study.solution}
                </p>
                <p className="section-copy" style={{ margin: 0 }}>
                  <strong>Outcome:</strong> {study.outcome}
                </p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "24px" }}>
            <Link className="button button-tertiary" href="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>
      <CtaBand
        title="Want the same clear communication on your project?"
        copy="Use the contact page to describe the property, issue, and timing. We will route you to the right service path."
        primaryHref="/contact"
        primaryLabel="Request estimate"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
