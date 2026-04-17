export function ProofStrip({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="trust-strip">
      {items.map((item) => (
        <div key={item.label} className="surface-card stat-card">
          <p className="eyebrow" style={{ marginBottom: "8px" }}>
            {item.label}
          </p>
          <p style={{ margin: 0, fontWeight: 700, fontSize: "1.05rem" }}>
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
