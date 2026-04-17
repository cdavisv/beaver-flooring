import Link from "next/link";
import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { ServiceCard } from "@/components/marketing/service-card";
import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { services, testimonials } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = getBaseMetadata({
  title: "Plumbing Services for Homes & Businesses | Beaver Flooring",
  description:
    "Explore Beaver Flooring plumbing services, from residential repairs to commercial support and emergency response in the Portland metro area.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Residential, commercial, drain, water heater, and emergency plumbing services."
        description="This hub is designed to help visitors self-select into the right service detail page while still giving enough trust, process, and proof to convert without friction."
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container grid-2">
          <div className="surface-card stack" style={{ padding: "24px" }}>
            <p className="eyebrow">How engagement starts</p>
            <ul
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "var(--fg-muted)",
              }}
            >
              <li>Start with the service page that matches the issue.</li>
              <li>
                Use the contact form for scheduled work or estimate requests.
              </li>
              <li>Call immediately for emergency plumbing conditions.</li>
            </ul>
          </div>
          <div className="surface-card stack" style={{ padding: "24px" }}>
            <p className="eyebrow">Related guidance</p>
            <Link href="/guides/pricing-estimates">
              Pricing and estimates guide
            </Link>
            <Link href="/guides/project-timeline">Project timeline guide</Link>
            <Link href="/guides/service-frequency">
              Service frequency guide
            </Link>
            <Link href="/guides/pro-vs-diy">Professional vs DIY guide</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Related proof"
            title="Recent service outcomes across the same customer segments this site targets."
            copy="Service discovery pages convert better when proof is tied back to real service types and locations."
          />
          <div className="grid-3">
            {testimonials.slice(0, 3).map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Need help choosing the right service path?"
        copy="Call for urgent guidance or send the property details and we will route you to the right next step."
        primaryHref="/contact"
        primaryLabel="Request estimate"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call for emergency help"
      />
    </>
  );
}
