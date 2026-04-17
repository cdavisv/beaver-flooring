import { ContactForm } from "@/components/forms/contact-form";
import { CtaBand } from "@/components/marketing/cta-band";
import { MapPanel } from "@/components/marketing/map-panel";
import { PageIntro } from "@/components/marketing/page-intro";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = getBaseMetadata({
  title: "Contact Beaver Flooring Plumbing | Beaverton, OR",
  description:
    "Contact Beaver Flooring for plumbing service, emergency help, or project questions in Beaverton and the Portland metro area.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Reach Beaver Flooring by phone or form, with a separate path for urgent issues."
        description="This page is built to convert fast on mobile: the emergency callout stays visible, the lead form captures the required scope fields, and the map block pairs geographic proof with plain-text service area details."
      />

      <section className="section">
        <div className="container content-shell">
          <div className="stack">
            <div className="surface-card stack" style={{ padding: "24px" }}>
              <p className="eyebrow">Direct contact</p>
              <p style={{ margin: 0, fontSize: "1.5rem", fontWeight: 700 }}>
                {businessInfo.phoneDisplay}
              </p>
              <p className="section-copy" style={{ margin: 0 }}>
                {businessInfo.hours}
              </p>
              <p className="section-copy" style={{ margin: 0 }}>
                Emergency line available for active leaks, backups, and urgent
                failures that threaten property or operations.
              </p>
            </div>
            <ContactForm urgent />
          </div>
          <div className="stack">
            <div className="surface-card stack" style={{ padding: "24px" }}>
              <p className="eyebrow">Response expectations</p>
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: 0,
                  color: "var(--fg-muted)",
                }}
              >
                <li>
                  Form requests receive a confirmation and follow-up window.
                </li>
                <li>
                  Urgent plumbing issues should call first, then send details.
                </li>
                <li>
                  Service area coverage includes Beaverton and nearby Portland
                  communities.
                </li>
              </ul>
            </div>
            <MapPanel />
          </div>
        </div>
      </section>

      <CtaBand
        title="Need immediate plumbing help?"
        copy="Call the emergency line for active leaks, backups, or plumbing failures that cannot wait for a scheduled slot."
        primaryHref={businessInfo.phoneHref}
        primaryLabel="Call emergency line"
        secondaryHref="/services/emergency-plumbing"
        secondaryLabel="Emergency service details"
      />
    </>
  );
}
