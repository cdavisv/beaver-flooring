import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function getBaseMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  const url = new URL(path, siteUrl);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Beaver Flooring",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
