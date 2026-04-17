"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <label className="cluster" style={{ fontWeight: 600 }}>
      <span className="sr-only">Select color theme</span>
      <select
        aria-label="Color theme"
        value={theme}
        onChange={(event) =>
          setTheme(event.target.value as "light" | "dark" | "system")
        }
        style={{
          minHeight: "44px",
          borderRadius: "999px",
          border: "1px solid var(--border-strong)",
          padding: "0 14px",
          background: "var(--bg-surface)",
          color: "var(--fg-default)",
        }}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </label>
  );
}
