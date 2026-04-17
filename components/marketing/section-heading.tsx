export function SectionHeading({
  eyebrow,
  title,
  copy,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  as?: "h1" | "h2";
}) {
  const HeadingTag = as;

  return (
    <div className="stack" style={{ gap: "12px", marginBottom: "24px" }}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <HeadingTag className="section-heading">{title}</HeadingTag>
      {copy ? (
        <p className="section-copy" style={{ margin: 0 }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
