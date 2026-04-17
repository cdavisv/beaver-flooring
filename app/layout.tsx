import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { getBaseMetadata } from "@/lib/seo";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = getBaseMetadata({
  title: "Beaver Flooring Plumbing Services in Beaverton & Portland Metro",
  description:
    "Beaver Flooring provides residential, commercial, and emergency plumbing services across Beaverton and the Portland metro area.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSans.variable} ${sourceSerif.variable} ${ibmPlexMono.variable}`}
      >
        <ThemeProvider>
          <JsonLd data={buildOrganizationSchema()} />
          <JsonLd data={buildWebsiteSchema()} />
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
