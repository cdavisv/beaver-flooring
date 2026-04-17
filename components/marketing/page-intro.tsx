import { SectionHeading } from "@/components/marketing/section-heading";

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section">
      <div className="container stack" style={{ gap: "24px" }}>
        <SectionHeading eyebrow={eyebrow} title={title} copy={description} />
      </div>
    </section>
  );
}
