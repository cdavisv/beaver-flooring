import type { NavItem } from "@/lib/types";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://beaver-flooring.example.com";

export const businessInfo = {
  name: "Beaver Flooring",
  tagline:
    "Residential, commercial, and emergency plumbing across Beaverton and Portland metro.",
  phoneDisplay: "(503) 555-0148",
  phoneHref: "tel:+15035550148",
  email: "service@beaverflooring.com",
  serviceAreas: [
    "Beaverton",
    "Portland",
    "Tigard",
    "Lake Oswego",
    "Hillsboro",
    "Gresham",
  ],
  address: "Beaverton, Oregon",
  hours: "Mon-Sat 7:00 AM-7:00 PM",
  emergencyHours: "24/7 emergency dispatch for urgent plumbing issues",
  license: "CCB #203541",
  insurance: "Fully licensed and insured",
  bbb: "BBB badge placeholder",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/testimonials-case-studies", label: "Testimonials & Case Studies" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/testimonials-case-studies", label: "Testimonials & Case Studies" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export const defaultMapEmbed =
  process.env.GOOGLE_MAPS_EMBED_URL ??
  "https://www.google.com/maps?q=Beaverton%2C%20Oregon&z=10&output=embed";
