import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = getBaseMetadata({
  title: "Privacy Policy | Beaver Flooring",
  description:
    "Read the Beaver Flooring website privacy policy and how contact form or analytics data is handled.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy policy"
        title="How Beaver Flooring handles website inquiries and visitor data."
        description="Last updated April 17, 2026."
      />
      <section className="section">
        <div className="container page-prose">
          <h2>Information we collect</h2>
          <p>
            We collect the information you submit through the contact form,
            including your name, phone number, email, location, service type,
            callback preference, and message. We also use standard analytics to
            understand page visits and broad traffic trends.
          </p>
          <h2>How we use it</h2>
          <p>
            Inquiry details are used to respond to service requests, schedule
            work, and improve the website experience. We do not collect payment
            information on this website.
          </p>
          <h2>Third-party services</h2>
          <p>
            The site may use Vercel hosting, analytics tooling, and a map embed
            to support the public experience. These services can process limited
            technical information such as IP address, browser type, and usage
            events.
          </p>
          <h2>Your choices</h2>
          <p>
            To ask about, correct, or request deletion of submitted inquiry
            data, contact Beaver Flooring through the contact page or by phone.
          </p>
        </div>
      </section>
      <CtaBand
        title="Need a property-specific answer instead of a policy summary?"
        copy="Use the contact page for scheduling, estimate, or data-handling questions, or call directly if the plumbing issue is urgent."
        primaryHref="/contact"
        primaryLabel="Contact Beaver Flooring"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
