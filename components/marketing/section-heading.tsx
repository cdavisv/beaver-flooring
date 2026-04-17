export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="stack" style={{ gap: "12px", marginBottom: "24px" }}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading">{title}</h2>
      {copy ? (
        <p className="section-copy" style={{ margin: 0 }}>
          {copy}
        </p>
      ) : null}
    </div>
  );
}
