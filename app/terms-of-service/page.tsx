import { PageIntro } from "@/components/marketing/page-intro";
import { getBaseMetadata } from "@/lib/seo";

export const metadata = getBaseMetadata({
  title: "Terms of Service | Beaver Flooring",
  description:
    "Review Beaver Flooring website terms of service, estimate disclaimers, and website-use terms.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms of service"
        title="Website use terms and service inquiry expectations."
        description="Last updated April 17, 2026."
      />
      <section className="section">
        <div className="container page-prose">
          <h2>Website use</h2>
          <p>
            This website is provided to help visitors learn about Beaver
            Flooring plumbing services and contact the business for support. Use
            of the site must be lawful and may not interfere with the site or
            its forms.
          </p>
          <h2>Estimate disclaimer</h2>
          <p>
            Information provided on the site is general. Project pricing and
            timelines are subject to inspection, access conditions, material
            availability, and code or safety requirements discovered during
            service.
          </p>
          <h2>Scheduling and availability</h2>
          <p>
            Service windows and emergency response timing depend on call volume,
            location, and job conditions. Submission of a website form does not
            guarantee an appointment until Beaver Flooring confirms the request.
          </p>
          <h2>Liability boundaries</h2>
          <p>
            Beaver Flooring is not liable for damages resulting from reliance on
            general website content without a property-specific assessment. In
            an emergency, call directly rather than relying on form submission
            alone.
          </p>
        </div>
      </section>
    </>
  );
}
