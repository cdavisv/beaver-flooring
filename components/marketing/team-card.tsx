import type { TeamMember } from "@/lib/types";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="surface-card stack" style={{ padding: "24px" }}>
      <div
        aria-hidden="true"
        style={{
          aspectRatio: "4 / 5",
          borderRadius: "16px",
          background:
            "linear-gradient(180deg, rgba(185, 119, 56, 0.2), rgba(31, 58, 82, 0.8))",
        }}
      />
      <div className="stack" style={{ gap: "8px" }}>
        <h3 style={{ margin: 0 }}>{member.name}</h3>
        <p
          style={{ margin: 0, color: "var(--action-primary)", fontWeight: 700 }}
        >
          {member.role}
        </p>
        <p className="section-copy" style={{ margin: 0 }}>
          {member.bio}
        </p>
      </div>
      <div className="cluster">
        {member.certifications.map((item) => (
          <span key={item} className="badge">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
