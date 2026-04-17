import { businessInfo, defaultMapEmbed } from "@/lib/site";

export function MapPanel() {
  return (
    <div className="content-shell">
      <div className="stack">
        <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Service area</h2>
        <p className="section-copy" style={{ margin: 0 }}>
          We support homeowners and commercial clients across Beaverton,
          Portland, and nearby communities, with emergency response prioritized
          for urgent plumbing issues.
        </p>
        <div className="cluster">
          {businessInfo.serviceAreas.map((area) => (
            <span key={area} className="badge">
              {area}
            </span>
          ))}
        </div>
      </div>
      <iframe
        title="Map of Beaver Flooring service area"
        src={defaultMapEmbed}
        style={{
          width: "100%",
          minHeight: "320px",
          border: 0,
          borderRadius: "20px",
          boxShadow: "var(--shadow-soft)",
        }}
        loading="lazy"
      />
    </div>
  );
}
