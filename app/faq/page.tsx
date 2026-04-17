import { CtaBand } from "@/components/marketing/cta-band";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { PageIntro } from "@/components/marketing/page-intro";
import { JsonLd } from "@/components/seo/json-ld";
import { faqCategories } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";
import { buildFaqSchema } from "@/lib/schema";

export const metadata = getBaseMetadata({
  title: "Plumbing FAQ: Estimates, Timelines & Repairs | Beaver Flooring",
  description:
    "Get answers about plumbing estimates, timelines, service frequency, and when to hire a professional plumber.",
  path: "/faq",
});

export default function FaqPage() {
  const allItems = faqCategories.flatMap((category) => category.items);

  return (
    <>
      <JsonLd data={buildFaqSchema(allItems)} />
      <PageIntro
        eyebrow="FAQ"
        title="Answers about estimates, timelines, maintenance rhythm, and when a plumbing issue becomes urgent."
        description="The FAQ is grouped by the topics called out in the planning package so visitors can move from common questions into the matching guide, service page, or contact path."
      />
      <section className="section">
        <div className="container stack">
          {faqCategories.map((category) => (
            <section key={category.title} className="stack">
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                }}
              >
                {category.title}
              </h2>
              <FaqAccordion items={category.items} />
            </section>
          ))}
        </div>
      </section>
      <CtaBand
        title="Still have a question about your property or repair scope?"
        copy="Use the contact form for project details, or call directly if the issue is urgent and active."
        primaryHref="/contact"
        primaryLabel="Ask your question"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
