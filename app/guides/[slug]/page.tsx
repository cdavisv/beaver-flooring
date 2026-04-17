import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
import { getGuideBySlug, getServiceBySlug, guides } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return getBaseMetadata({
    title: `${guide.title} | Beaver Flooring`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <PageIntro
        eyebrow="Guide"
        title={guide.title}
        description={guide.summary}
      />
      <section className="section">
        <div className="container content-shell">
          <div className="page-prose">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          <aside className="stack">
            <div className="surface-card stack" style={{ padding: "24px" }}>
              <p className="eyebrow">Related services</p>
              {guide.relatedServiceSlugs.map((serviceSlug) => {
                const service = getServiceBySlug(serviceSlug);

                if (!service) {
                  return null;
                }

                return (
                  <Link key={service.slug} href={`/services/${service.slug}`}>
                    {service.name}
                  </Link>
                );
              })}
            </div>
            <div className="surface-card stack" style={{ padding: "24px" }}>
              <p className="eyebrow">Need a project-specific answer?</p>
              <p className="section-copy" style={{ margin: 0 }}>
                The guide gives general direction. Use the contact page for a
                property-specific recommendation and next-step scope.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <CtaBand
        title="Need help applying this guidance to your property?"
        copy="Use the contact form for project details or call now if the issue is active and urgent."
        primaryHref="/contact"
        primaryLabel={guide.ctaLabel}
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
