import type { GalleryItem } from "@/lib/types";

export function GalleryRail({ items }: { items: GalleryItem[] }) {
  return (
    <div
      style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {items.map((item) => (
        <article
          key={item.title}
          className="surface-card stack"
          style={{ padding: "24px" }}
        >
          <div
            aria-hidden="true"
            style={{
              borderRadius: "16px",
              minHeight: "220px",
              background:
                "linear-gradient(160deg, rgba(31, 58, 82, 0.95), rgba(185, 119, 56, 0.85))",
            }}
          />
          <h3 style={{ margin: 0 }}>{item.title}</h3>
          <p style={{ margin: 0, color: "var(--fg-muted)" }}>{item.before}</p>
          <p style={{ margin: 0, color: "var(--fg-default)", fontWeight: 600 }}>
            {item.after}
          </p>
          <p className="sr-only">{item.alt}</p>
        </article>
      ))}
    </div>
  );
}
