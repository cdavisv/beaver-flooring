import { CtaBand } from "@/components/marketing/cta-band";
import { PageIntro } from "@/components/marketing/page-intro";
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
        <div className="container grid-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
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
