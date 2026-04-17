import { businessInfo, siteUrl } from "@/lib/site";
import type { FaqItem, Service, Testimonial } from "@/lib/types";

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "Plumber"],
    name: businessInfo.name,
    url: siteUrl,
    telephone: businessInfo.phoneDisplay,
    email: businessInfo.email,
    areaServed: businessInfo.serviceAreas,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beaverton",
      addressRegion: "OR",
      addressCountry: "US",
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessInfo.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/services`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo.description,
    areaServed: businessInfo.serviceAreas,
    provider: {
      "@type": "Plumber",
      name: businessInfo.name,
      telephone: businessInfo.phoneDisplay,
    },
  };
}

export function buildReviewsSchema(items: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: items.length.toString(),
    bestRating: "5",
  };
}
