import Link from "next/link";
import type { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="surface-card stack" style={{ padding: "24px" }}>
      <span className="badge">
        {service.audience === "commercial"
          ? "Commercial"
          : service.audience === "residential"
            ? "Residential"
            : "Residential & commercial"}
      </span>
      <h3 style={{ margin: 0, fontSize: "1.4rem" }}>{service.name}</h3>
      <p className="section-copy" style={{ margin: 0 }}>
        {service.summary}
      </p>
      <ul style={{ paddingLeft: "20px", margin: 0, color: "var(--fg-muted)" }}>
        {service.problemsSolved.slice(0, 3).map((problem) => (
          <li key={problem}>{problem}</li>
        ))}
      </ul>
      <Link
        className="button button-tertiary"
        href={`/services/${service.slug}`}
      >
        Explore service
      </Link>
    </article>
  );
}
