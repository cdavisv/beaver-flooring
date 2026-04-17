import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="surface-card stack" style={{ padding: "24px" }}>
      <span className="badge">
        {item.customerType} • {item.locationLabel}
      </span>
      <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.7 }}>
        “{item.quote}”
      </p>
      <div>
        <p style={{ margin: 0, fontWeight: 700 }}>{item.customerName}</p>
        <p style={{ margin: "6px 0 0", color: "var(--fg-muted)" }}>
          {item.result}
        </p>
      </div>
    </article>
  );
}
