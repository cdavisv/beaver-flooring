"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="stack">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="surface-card"
            style={{ overflow: "hidden" }}
          >
            <button
              aria-expanded={isOpen}
              className="cluster"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              style={{
                width: "100%",
                minHeight: "56px",
                justifyContent: "space-between",
                padding: "16px 20px",
                border: 0,
                background: "transparent",
                color: "inherit",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              <span style={{ fontWeight: 700 }}>{item.question}</span>
              <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen ? (
              <div style={{ padding: "0 20px 20px", color: "var(--fg-muted)" }}>
                <p style={{ margin: 0, lineHeight: 1.7 }}>{item.answer}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
