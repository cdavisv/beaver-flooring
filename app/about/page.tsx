import Link from "next/link";
import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
import { ProofStrip } from "@/components/marketing/proof-strip";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TeamCard } from "@/components/marketing/team-card";
import { teamMembers } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = getBaseMetadata({
  title: "About Beaver Flooring Plumbing Team | Beaver Flooring",
  description:
    "Learn about Beaver Flooring, our plumbing experience, service values, and commitment to dependable work in the Portland metro area.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Beaver Flooring"
        title="A service-first plumbing company built for dependable communication and practical repair guidance."
        description="The brand name may be established, but the current site positioning is intentionally plumbing-focused. This page reinforces the local-service story, credentials, and operating approach behind that shift."
      />

      <section className="section-tight">
        <div className="container">
          <ProofStrip
            items={[
              { label: "Based in", value: businessInfo.address },
              { label: "Coverage", value: "Residential + commercial plumbing" },
              { label: "Response", value: "Emergency and scheduled service" },
              { label: "Trust", value: businessInfo.insurance },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div className="stack">
            <SectionHeading
              eyebrow="How we work"
              title="We focus on clear scope, honest options, and clean handoffs."
              copy="That matters whether the job is a same-day residential repair or a commercial coordination issue with tenants and time pressure."
            />
            <p className="section-copy" style={{ margin: 0 }}>
              Beaver Flooring is positioned as a plumbing partner for the
              Portland metro area, with communication practices designed around
              fast decision-making. We explain what we know, what still needs
              inspection, and which option is the right fit for the property and
              budget.
            </p>
            <p className="section-copy" style={{ margin: 0 }}>
              The business is built to support homeowners, commercial property
              managers, and real estate professionals who need a contractor that
              can move quickly without becoming vague.
            </p>
          </div>
          <div className="surface-card stack" style={{ padding: "24px" }}>
            <p className="eyebrow">Values</p>
            <ul
              style={{
                paddingLeft: "20px",
                margin: 0,
                color: "var(--fg-muted)",
              }}
            >
              <li>Clear arrival and scheduling expectations</li>
              <li>
                Repair versus replacement guidance that is easy to compare
              </li>
              <li>Respect for occupied homes and commercial properties</li>
              <li>
                Documentation that supports owners, tenants, and transactions
              </li>
            </ul>
            <Link className="button button-tertiary" href="/about/team">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title="The team visitors expect to see before they trust a local contractor."
            copy="The full team page expands on specialties, but this page previews the people behind day-to-day service."
          />
          <div className="grid-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to talk with the team behind your project?"
        copy="Use the contact page for scheduling questions, estimate requests, or urgent plumbing issues that need a call right away."
        primaryHref="/contact"
        primaryLabel="Contact Beaver Flooring"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
