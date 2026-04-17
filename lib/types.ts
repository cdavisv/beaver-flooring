export type NavItem = {
  href: string;
  label: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  customerName: string;
  customerType: string;
  quote: string;
  relatedServiceSlugs: string[];
  locationLabel: string;
  featured: boolean;
  result: string;
};

export type GalleryItem = {
  title: string;
  before: string;
  after: string;
  alt: string;
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  audience: "residential" | "commercial" | "mixed";
  emergencyEligible: boolean;
  primaryCta: string;
  secondaryCta: string;
  heroTitle: string;
  heroDescription: string;
  problemsSolved: string[];
  checklist: string[];
  processSteps: string[];
  faqItems: FaqItem[];
  relatedGuideSlug: string;
  seo: {
    title: string;
    description: string;
  };
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  sections: {
    title: string;
    body: string[];
  }[];
  ctaLabel: string;
  relatedServiceSlugs: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  certifications: string[];
};

export type CaseStudy = {
  title: string;
  service: string;
  challenge: string;
  solution: string;
  outcome: string;
};
