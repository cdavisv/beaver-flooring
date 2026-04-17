import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TeamCard } from "@/components/marketing/team-card";
import { teamMembers } from "@/lib/content";
import { getBaseMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = getBaseMetadata({
  title: "Meet The Beaver Flooring Team | Beaver Flooring",
  description:
    "Meet the Beaver Flooring team and learn about the people behind our residential and commercial plumbing service.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <PageIntro
        eyebrow="Meet the team"
        title="Experienced service leads with the communication discipline local clients expect."
        description="This page exists because local-service credibility improves when visitors can see identifiable people, roles, and specialties before making contact."
      />
      <section className="section">
        <div className="container stack">
          <SectionHeading
            eyebrow="Team roles"
            title="The people responsible for communication, field execution, and project follow-through."
            copy="Each role is presented here so homeowners, property managers, and real estate partners can see who they are trusting before they call."
          />
          <div className="grid-3">
            {teamMembers.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready to work with the Beaver Flooring team?"
        copy="Send project details through the contact page or call directly if the plumbing issue is urgent."
        primaryHref="/contact"
        primaryLabel="Contact the team"
        secondaryHref={businessInfo.phoneHref}
        secondaryLabel="Call now"
      />
    </>
  );
}
