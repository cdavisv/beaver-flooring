"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { businessInfo, navItems } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(16px)",
        background: "color-mix(in srgb, var(--bg-surface) 90%, transparent)",
        borderBottom: "1px solid var(--border-soft)",
      }}
    >
      <div className="container" style={{ padding: "14px 0" }}>
        <div
          className="cluster"
          style={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <div className="stack" style={{ gap: "4px" }}>
            <Link href="/" style={{ fontWeight: 800, fontSize: "1.1rem" }}>
              Beaver Flooring
            </Link>
            <span style={{ color: "var(--fg-muted)", fontSize: "0.9rem" }}>
              Beaverton and Portland metro plumbing services
            </span>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            className="button button-tertiary"
            onClick={() => setMenuOpen((current) => !current)}
            style={{ display: "inline-flex" }}
          >
            Menu
          </button>
        </div>

        <div
          id="site-nav"
          style={{
            display: menuOpen ? "grid" : "none",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <nav aria-label="Primary navigation">
            <div className="cluster">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "var(--action-primary)" : "inherit",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="cluster">
            <Link
              className="button button-secondary"
              href={businessInfo.phoneHref}
            >
              {businessInfo.phoneDisplay}
            </Link>
            <Link className="button button-primary" href="/contact">
              Request Estimate
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
