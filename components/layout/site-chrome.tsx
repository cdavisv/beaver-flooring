import { EmergencyBanner } from "@/components/layout/emergency-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <EmergencyBanner />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
