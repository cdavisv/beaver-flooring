import Link from "next/link";

type HeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "tertiary" | "urgent";
};

export function Hero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions: HeroAction[];
  aside: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="container hero-grid">
        <div className="stack" style={{ gap: "24px" }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
              lineHeight: 1.02,
              maxWidth: "13ch",
            }}
          >
            {title}
          </h1>
          <p
            className="section-copy"
            style={{ margin: 0, fontSize: "1.15rem" }}
          >
            {description}
          </p>
          <div className="button-row">
            {actions.map((action) => (
              <Link
                key={action.href}
                className={`button button-${action.variant ?? "primary"}`}
                href={action.href}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div>{aside}</div>
      </div>
    </section>
  );
}
