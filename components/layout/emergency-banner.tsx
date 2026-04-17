import Link from "next/link";
import { businessInfo } from "@/lib/site";

export function EmergencyBanner() {
  return (
    <div
      style={{
        background: "var(--copper-600)",
        color: "#fff",
        padding: "10px 0",
      }}
    >
      <div
        className="container cluster"
        style={{ justifyContent: "space-between" }}
      >
        <span>
          Emergency plumbing response available across Beaverton and Portland
          metro.
        </span>
        <Link className="button button-urgent" href={businessInfo.phoneHref}>
          Call emergency line
        </Link>
      </div>
    </div>
  );
}
