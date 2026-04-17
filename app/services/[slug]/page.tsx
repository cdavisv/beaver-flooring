import { notFound } from "next/navigation";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getGuideBySlug,
  getServiceBySlug,
  getTestimonialsForService,
  services,
} from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";
import { buildFaqSchema, buildServiceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return getBaseMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedGuide = getGuideBySlug(service.relatedGuideSlug);
  const serviceTestimonials = getTestimonialsForService(service.slug);

  return (
    <>
      <JsonLd data={buildServiceSchema(service)} />
      <JsonLd data={buildFaqSchema(service.faqItems)} />
      <PageIntro
        eyebrow="Service detail"
        title={service.heroTitle}
        description={service.heroDescription}
      />

      <section className="section-tight">
        <div className="container grid-2">
          <div className="surface-card stack" style={{ padding: "24px" }}>
            <p className="eyebrow">Problems solved</p>
            <ul
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "var(--fg-muted)",
              }}
            >
              {service.problemsSolved.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card stack" style={{ padding: "24px" }}>
            <p className="eyebrow">Typical service checklist</p>
            <ul
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "var(--fg-muted)",
              }}
            >
              {service.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-shell">
          <div>
            <SectionHeading
              eyebrow="Process"
              title="How this service usually moves from first contact to close-out."
              copy="The process steps stay simple on purpose so users can see what happens next without reading a procedural wall of text."
            />
            <div className="stack">
              {service.processSteps.map((step, index) => (
                <div
                  key={step}
                  className="surface-card stack"
                  style={{ padding: "20px" }}
                >
                  <p className="eyebrow">Step {index + 1}</p>
                  <p style={{ margin: 0, color: "var(--fg-muted)" }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="stack">
            {relatedGuide ? (
              <div className="surface-card stack" style={{ padding: "24px" }}>
                <p className="eyebrow">Related guide</p>
                <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
                  {relatedGuide.title}
                </h2>
                <p className="section-copy" style={{ margin: 0 }}>
                  {relatedGuide.summary}
                </p>
                <a
                  className="button button-tertiary"
                  href={`/guides/${relatedGuide.slug}`}
                >
                  Read the guide
                </a>
              </div>
            ) : null}
            <div className="surface-card stack" style={{ padding: "24px" }}>
              <p className="eyebrow">Contact paths</p>
              <p style={{ margin: 0, color: "var(--fg-muted)" }}>
                Scheduled work should use the form. Emergency conditions should
                call immediately so we can start triage right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {serviceTestimonials.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Related proof"
              title={`What clients say about ${service.name.toLowerCase()} support.`}
            />
            <div className="grid-3">
              {serviceTestimonials.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="FAQs"
            title={`Common questions about ${service.name.toLowerCase()}.`}
          />
          <FaqAccordion items={service.faqItems} />
        </div>
      </section>

      <CtaBand
        title={`Ready to book ${service.name.toLowerCase()} support?`}
        copy="Share the issue, location, and preferred timing through the contact page, or call now if the problem is urgent."
        primaryHref="/contact"
        primaryLabel={service.primaryCta}
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel={
          service.emergencyEligible ? "Call now" : service.secondaryCta
        }
      />
    </>
  );
}
