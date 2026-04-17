import Link from "next/link";
import { footerLinks, businessInfo } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      style={{
        marginTop: "auto",
        borderTop: "1px solid var(--border-soft)",
        background: "color-mix(in srgb, var(--bg-surface) 92%, transparent)",
      }}
    >
      <div className="container section">
        <div className="grid-3">
          <div className="stack">
            <h2 style={{ margin: 0, fontFamily: "var(--font-display)" }}>
              Beaver Flooring
            </h2>
            <p className="section-copy" style={{ margin: 0 }}>
              Responsive plumbing help for homeowners, property managers, and
              real estate partners across the Portland metro area.
            </p>
          </div>

          <div className="stack">
            <h3 style={{ margin: 0 }}>Browse</h3>
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="stack">
            <h3 style={{ margin: 0 }}>Trust & contact</h3>
            <span>{businessInfo.phoneDisplay}</span>
            <span>{businessInfo.hours}</span>
            <span>{businessInfo.license}</span>
            <span>{businessInfo.insurance}</span>
            <span>{businessInfo.bbb}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
