import Link from "next/link";

export function CtaBand({
  title,
  copy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  copy: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="section-tight">
      <div
        className="container surface-card"
        style={{
          padding: "32px",
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--bg-accent) 90%, transparent), color-mix(in srgb, var(--action-primary) 56%, transparent))",
          color: "var(--fg-inverse)",
        }}
      >
        <div
          className="content-shell"
          style={{ gridTemplateColumns: "minmax(0, 1fr) auto" }}
        >
          <div className="stack" style={{ gap: "12px" }}>
            <p className="eyebrow" style={{ color: "var(--sand-100)" }}>
              Ready to talk?
            </p>
            <h2 className="section-heading" style={{ color: "inherit" }}>
              {title}
            </h2>
            <p
              style={{
                margin: 0,
                maxWidth: "56ch",
                color: "inherit",
                opacity: 0.92,
              }}
            >
              {copy}
            </p>
          </div>
          <div className="button-row">
            <Link className="button button-primary" href={primaryHref}>
              {primaryLabel}
            </Link>
            <Link className="button button-tertiary" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
