import type {
  CaseStudy,
  FaqItem,
  GalleryItem,
  Guide,
  Service,
  TeamMember,
  Testimonial,
} from "@/lib/types";

export const services: Service[] = [
  {
    slug: "residential-plumbing",
    name: "Residential Plumbing",
    summary:
      "Repairs, replacements, inspections, and fixture updates for homes across Beaverton and nearby neighborhoods.",
    audience: "residential",
    emergencyEligible: true,
    primaryCta: "Schedule Service",
    secondaryCta: "Request Estimate",
    heroTitle:
      "Residential plumbing support built around clear communication and tidy job sites.",
    heroDescription:
      "From leaking fixtures to planned upgrades, Beaver Flooring helps homeowners solve plumbing problems without vague timelines or surprise handoffs.",
    problemsSolved: [
      "Persistent leaks and dripping fixtures",
      "Low water pressure or noisy plumbing lines",
      "Fixture replacements and appliance connections",
      "Preventative plumbing inspections before home sales",
    ],
    checklist: [
      "Fixture and shutoff valve checks",
      "Water pressure verification",
      "Drain and vent review",
      "Repair versus replacement recommendations",
    ],
    processSteps: [
      "Confirm symptoms, access points, and any same-day concerns.",
      "Inspect the affected system and explain practical options.",
      "Complete the repair or schedule the replacement work with clear next steps.",
      "Test the system, clean the work area, and document follow-up guidance.",
    ],
    faqItems: [
      {
        question: "Do you provide estimates before work starts?",
        answer:
          "Yes. We outline the expected scope, note any variables we uncover during inspection, and confirm the next step before larger work begins.",
      },
      {
        question: "Can you help with older homes?",
        answer:
          "Yes. We regularly work on older plumbing layouts and can explain when a targeted repair is reasonable versus when a broader upgrade is safer.",
      },
    ],
    relatedGuideSlug: "pricing-estimates",
    seo: {
      title: "Residential Plumbing Services in Beaverton | Beaver Flooring",
      description:
        "Get reliable residential plumbing help for repairs, replacements, and routine service in Beaverton and nearby Portland communities.",
    },
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    summary:
      "Responsive plumbing coordination for retail, office, multi-tenant, and managed properties across the Portland metro area.",
    audience: "commercial",
    emergencyEligible: true,
    primaryCta: "Request Commercial Consultation",
    secondaryCta: "Call For Priority Service",
    heroTitle:
      "Commercial plumbing support that respects tenants, schedules, and property operations.",
    heroDescription:
      "We help property managers and operators keep service disruptions contained with clear communication, documented scope, and dependable follow-through.",
    problemsSolved: [
      "Recurring tenant service calls",
      "Fixture failures in shared-use spaces",
      "Drain, water heater, and shutoff issues",
      "Coordination for occupied commercial properties",
    ],
    checklist: [
      "Property walkthrough and issue log review",
      "Tenant impact and access planning",
      "Scope sequencing for minimal disruption",
      "Close-out notes for maintenance records",
    ],
    processSteps: [
      "Review the issue history, site access needs, and urgency.",
      "Inspect the affected system and align the repair plan with operations.",
      "Coordinate repair windows, materials, and communication touchpoints.",
      "Deliver documented completion notes for owners or managers.",
    ],
    faqItems: [
      {
        question: "Do you coordinate with property managers and tenants?",
        answer:
          "Yes. We plan access, service windows, and communication paths so on-site teams know what to expect before work begins.",
      },
      {
        question: "Can you support ongoing maintenance relationships?",
        answer:
          "Yes. We can help prioritize recurring issues, preventative checks, and service planning for managed properties.",
      },
    ],
    relatedGuideSlug: "service-frequency",
    seo: {
      title: "Commercial Plumbing Services in Portland Metro | Beaver Flooring",
      description:
        "Beaver Flooring supports commercial plumbing needs for property managers, retail spaces, and other Portland metro facilities.",
    },
  },
  {
    slug: "drain-cleaning-repair",
    name: "Drain Cleaning & Repair",
    summary:
      "Fast response for slow drains, clogs, backups, and damaged lines, with guidance on the next right fix.",
    audience: "mixed",
    emergencyEligible: true,
    primaryCta: "Book Drain Service",
    secondaryCta: "Call For Fast Help",
    heroTitle:
      "Drain issues rarely stay small. We help diagnose the cause and fix it before backups escalate.",
    heroDescription:
      "Whether you have one slow fixture or repeated line issues, we focus on symptom history, likely causes, and the most reasonable repair path.",
    problemsSolved: [
      "Recurring sink or shower clogs",
      "Slow drains and foul odors",
      "Main line backups and overflow risk",
      "Drain line wear, root intrusion, or damaged sections",
    ],
    checklist: [
      "Symptom and location review",
      "Drain performance testing",
      "Access and cleanout evaluation",
      "Repair recommendation when cleaning alone will not hold",
    ],
    processSteps: [
      "Identify affected fixtures, frequency, and warning signs.",
      "Clear the immediate blockage or isolate the damaged section.",
      "Recommend follow-up repair, maintenance, or replacement if needed.",
      "Confirm restored flow and document preventive guidance.",
    ],
    faqItems: [
      {
        question: "When is a clog an emergency?",
        answer:
          "Treat it as urgent when multiple fixtures back up, sewage is involved, or water is threatening finished areas.",
      },
      {
        question: "Do you only clean drains or also repair lines?",
        answer:
          "We do both. If a line issue is structural or keeps returning, we explain repair options instead of repeating a temporary fix.",
      },
    ],
    relatedGuideSlug: "pro-vs-diy",
    seo: {
      title: "Drain Cleaning & Drain Repair in Beaverton | Beaver Flooring",
      description:
        "Fast drain cleaning and drain repair for clogged, slow, or damaged lines in Beaverton and the Portland metro area.",
    },
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Services",
    summary:
      "Repair and replacement guidance for standard and tankless systems, with planning around downtime and long-term value.",
    audience: "mixed",
    emergencyEligible: true,
    primaryCta: "Get Water Heater Help",
    secondaryCta: "Ask About Replacement Options",
    heroTitle:
      "Water heater decisions are easier when repair, replacement, and timing are explained clearly.",
    heroDescription:
      "We help homeowners and property teams understand whether a unit is worth repairing, how long replacement takes, and what to expect during installation.",
    problemsSolved: [
      "No hot water or limited recovery",
      "Visible leaks or pressure concerns",
      "Aging systems with reliability questions",
      "Tank and tankless replacement planning",
    ],
    checklist: [
      "Unit age and condition review",
      "Safety and pressure checks",
      "Repairability assessment",
      "Replacement sizing and installation planning",
    ],
    processSteps: [
      "Inspect the system, venting, and surrounding conditions.",
      "Confirm whether repair is sensible based on age, condition, and cost.",
      "Complete the repair or schedule the replacement with a clear timeline.",
      "Test hot water delivery and review care guidance.",
    ],
    faqItems: [
      {
        question: "How long does replacement usually take?",
        answer:
          "Straightforward replacements are often completed in a day, though access issues or code updates can change the schedule.",
      },
      {
        question: "Can you help compare tank and tankless options?",
        answer:
          "Yes. We can walk through household demand, efficiency goals, and installation factors before you commit.",
      },
    ],
    relatedGuideSlug: "project-timeline",
    seo: {
      title: "Water Heater Repair & Replacement in Beaverton | Beaver Flooring",
      description:
        "Need water heater repair or replacement? Beaver Flooring helps homeowners and businesses across Beaverton and nearby areas.",
    },
  },
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    summary:
      "Urgent response for active leaks, backups, and plumbing failures that need immediate containment and professional help.",
    audience: "mixed",
    emergencyEligible: true,
    primaryCta: "Call Emergency Line",
    secondaryCta: "Send Urgent Request",
    heroTitle:
      "When plumbing damage is active, the first goal is to contain risk and get the right help moving.",
    heroDescription:
      "Beaver Flooring supports urgent plumbing calls across the Portland metro area with fast triage, clear arrival expectations, and repair planning that follows the immediate fix.",
    problemsSolved: [
      "Burst or actively leaking supply lines",
      "Overflowing drains or sewage backup",
      "Water heater failure with active leakage",
      "Sudden plumbing issues threatening occupied spaces",
    ],
    checklist: [
      "Immediate phone triage",
      "Safety and shutoff guidance",
      "Arrival window confirmation",
      "Next-step repair planning after stabilization",
    ],
    processSteps: [
      "Confirm what is happening now and whether shutoff help is needed.",
      "Dispatch urgent support and advise on immediate damage control.",
      "Stabilize the issue on site and identify the repair path.",
      "Provide follow-up recommendations for permanent correction.",
    ],
    faqItems: [
      {
        question: "What counts as a plumbing emergency?",
        answer:
          "Call right away for active leaks, sewage issues, loss of water where operations cannot continue, or anything threatening property damage or safety.",
      },
      {
        question: "Should I still submit the form during an emergency?",
        answer:
          "Use the call button first for urgent issues. The form is available if you also need to send details or photos after making contact.",
      },
    ],
    relatedGuideSlug: "pro-vs-diy",
    seo: {
      title: "Emergency Plumbing Service in Beaverton | Beaver Flooring",
      description:
        "Call Beaver Flooring for urgent plumbing help in Beaverton and the Portland metro area. Fast response for serious plumbing issues.",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    customerName: "Erin M.",
    customerType: "Homeowner",
    quote:
      "They explained the leak path, handled the repair the same day, and left the utility room cleaner than they found it.",
    relatedServiceSlugs: ["residential-plumbing"],
    locationLabel: "Beaverton",
    featured: true,
    result: "Stopped a recurring leak before drywall damage spread.",
  },
  {
    id: "t2",
    customerName: "Jordan R.",
    customerType: "Property manager",
    quote:
      "Communication was the difference. We had clear updates for tenants, a documented scope, and no confusion about the next step.",
    relatedServiceSlugs: ["commercial-plumbing"],
    locationLabel: "Portland",
    featured: true,
    result: "Resolved repeated service calls in a mixed-use property.",
  },
  {
    id: "t3",
    customerName: "Natalie P.",
    customerType: "Homeowner",
    quote:
      "We called for an evening drain backup and got practical guidance immediately. The fix held and the follow-up plan made sense.",
    relatedServiceSlugs: ["drain-cleaning-repair", "emergency-plumbing"],
    locationLabel: "Tigard",
    featured: true,
    result: "Contained a backup before it affected two bathrooms.",
  },
  {
    id: "t4",
    customerName: "Avery K.",
    customerType: "Real estate agent",
    quote:
      "Their inspection notes were clear enough for both the seller and buyer to understand, which kept our timeline intact.",
    relatedServiceSlugs: ["residential-plumbing", "water-heater-services"],
    locationLabel: "Lake Oswego",
    featured: false,
    result: "Kept a pending sale moving with clear repair guidance.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Laundry supply leak correction",
    before: "Before: repeated moisture around aging shutoff valves.",
    after:
      "After: updated valves, clean supply connections, and dry wall cavity.",
    alt: "Utility room plumbing updated to stop repeated supply line leakage.",
  },
  {
    title: "Restaurant prep sink drain repair",
    before: "Before: frequent backup during peak service hours.",
    after: "After: restored flow and staged follow-up maintenance plan.",
    alt: "Commercial sink drain repaired for more reliable flow during restaurant service.",
  },
  {
    title: "Water heater replacement",
    before:
      "Before: failing tank with rust around the base and inconsistent hot water.",
    after:
      "After: new heater, clean install area, and tested hot water delivery.",
    alt: "Water heater replacement with restored hot water service and tidy installation.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Occupied duplex leak response",
    service: "Emergency Plumbing",
    challenge:
      "A supply line failure threatened two occupied units during an evening cold snap.",
    solution:
      "We walked the owner through the shutoff, stabilized the leak, and scheduled the permanent repair window immediately after containment.",
    outcome:
      "Water damage stayed limited to one utility area and both tenants had a clear update path.",
  },
  {
    title: "Retail restroom reliability reset",
    service: "Commercial Plumbing",
    challenge:
      "A retail site was dealing with repeated closures caused by drain issues and inconsistent repairs.",
    solution:
      "We documented the symptoms, isolated the failure pattern, and sequenced repair work to avoid peak customer hours.",
    outcome:
      "The site shifted from repeat emergency calls to a predictable maintenance plan.",
  },
];

export const faqCategories: {
  title: string;
  items: FaqItem[];
}[] = [
  {
    title: "Pricing and estimates",
    items: [
      {
        question: "How do plumbing estimates work?",
        answer:
          "We start with the issue, access conditions, and urgency. Straightforward repairs can often be scoped quickly, while broader work may need a more detailed inspection before pricing is finalized.",
      },
      {
        question: "Will you explain what could change the price?",
        answer:
          "Yes. We call out known variables such as concealed damage, code updates, or replacement decisions so you understand what may affect the final scope.",
      },
    ],
  },
  {
    title: "Project timelines",
    items: [
      {
        question: "How quickly can work be scheduled?",
        answer:
          "Emergency issues are prioritized immediately. Standard service timing depends on urgency, access, and materials, but we give a practical expectation instead of a generic window.",
      },
      {
        question: "What slows a plumbing project down?",
        answer:
          "Access constraints, hidden system conditions, specialty materials, and occupied-property coordination can all affect the timeline.",
      },
    ],
  },
  {
    title: "Service frequency",
    items: [
      {
        question: "How often should plumbing be inspected?",
        answer:
          "Homes benefit from periodic checks when issues recur or before major transactions. Commercial and managed properties usually need a more proactive maintenance rhythm.",
      },
      {
        question: "Do drains need maintenance before they clog?",
        answer:
          "If a building has recurring slowdown, seasonal demand, or prior backups, preventative drain maintenance is often less disruptive than waiting for a failure.",
      },
    ],
  },
  {
    title: "Professional vs DIY",
    items: [
      {
        question: "When should I stop troubleshooting and call a plumber?",
        answer:
          "Call when shutoff access is unclear, water damage is active, sewage is involved, or the same problem keeps returning after a temporary fix.",
      },
      {
        question: "Can small leaks wait?",
        answer:
          "Small leaks often become bigger repair scopes if they continue unnoticed, especially around walls, cabinetry, or flooring materials.",
      },
    ],
  },
  {
    title: "Emergency response",
    items: [
      {
        question: "What should I do first during a plumbing emergency?",
        answer:
          "If you can do so safely, shut off the local fixture or main water supply, protect people and valuables, then call us for immediate guidance.",
      },
      {
        question: "Do you cover the full Portland metro area?",
        answer:
          "Yes. We serve Beaverton and nearby Portland communities for both urgent response and scheduled work.",
      },
    ],
  },
];

export const guides: Guide[] = [
  {
    slug: "pricing-estimates",
    title: "Plumbing Pricing & Estimates Guide",
    description:
      "Learn what affects plumbing pricing and how to request an accurate estimate for your home or property.",
    summary:
      "The clearest estimates come from good symptom history, accurate access notes, and an honest conversation about urgency versus long-term value.",
    sections: [
      {
        title: "What usually drives plumbing cost",
        body: [
          "The issue itself is only one part of the estimate. Access conditions, fixture quality, code-related upgrades, and whether the problem has caused secondary damage all change the scope.",
          "Good contractors explain the difference between a targeted repair, a likely durable repair, and a full replacement so you can compare options honestly.",
        ],
      },
      {
        title: "How to make your estimate more accurate",
        body: [
          "Share photos, describe when the issue started, and note whether it affects one fixture or several. Mention recent remodels, prior repairs, or water shutoff concerns.",
          "For commercial properties, access details and tenant coordination matter because they affect labor windows and planning.",
        ],
      },
    ],
    ctaLabel: "Request A Tailored Estimate",
    relatedServiceSlugs: ["residential-plumbing", "commercial-plumbing"],
  },
  {
    slug: "project-timeline",
    title: "Plumbing Project Timeline Guide",
    description:
      "Understand typical plumbing project timelines, what can change them, and how to plan your service window.",
    summary:
      "Most plumbing timelines are shaped by access, materials, and whether the project can stay narrowly focused or expands after inspection.",
    sections: [
      {
        title: "What affects the schedule",
        body: [
          "A same-day repair is very different from a replacement that needs ordering, permit coordination, or occupant scheduling. Scope clarity early in the process helps keep timelines realistic.",
          "Occupied homes and active commercial properties usually need more communication touchpoints even when the physical work is straightforward.",
        ],
      },
      {
        title: "Planning around the service window",
        body: [
          "Ask whether water shutoff is needed, what areas must stay clear, and whether follow-up visits are likely. That helps you prepare without over-planning around uncertainty.",
          "If you have a sale, tenant move-in, or business reopening on the calendar, mention it early so the work plan reflects that deadline.",
        ],
      },
    ],
    ctaLabel: "Ask About Your Timeline",
    relatedServiceSlugs: ["water-heater-services", "commercial-plumbing"],
  },
  {
    slug: "service-frequency",
    title: "How Often Should Plumbing Be Serviced?",
    description:
      "Learn how often to schedule plumbing service and preventative maintenance for homes and commercial properties.",
    summary:
      "Preventative service intervals depend on property use, prior issues, and how costly a surprise failure would be for that space.",
    sections: [
      {
        title: "Homes versus commercial properties",
        body: [
          "Most homes do not need constant service, but repeated symptoms, older plumbing, or upcoming transactions make inspections valuable.",
          "Commercial spaces and managed properties generally benefit from a more scheduled rhythm because repeat disruptions cost more and affect more people.",
        ],
      },
      {
        title: "Signs that maintenance should be scheduled sooner",
        body: [
          "Recurring clogs, noisy pipes, shifting water pressure, and visible corrosion all point to systems that deserve attention before the next failure.",
          "If multiple tenants or family members report the same issue in different areas, treat that as a system pattern instead of isolated bad luck.",
        ],
      },
    ],
    ctaLabel: "Schedule Preventative Service",
    relatedServiceSlugs: ["commercial-plumbing", "drain-cleaning-repair"],
  },
  {
    slug: "pro-vs-diy",
    title: "Professional Plumber vs DIY: When To Call",
    description:
      "Know when a plumbing issue can wait and when it is safer to call a professional plumber.",
    summary:
      "Basic observation is useful. Guesswork on active leaks, drain backups, or concealed plumbing usually makes risk and repair cost worse.",
    sections: [
      {
        title: "Good reasons to stop and call",
        body: [
          "Call a licensed professional when the repair affects supply lines, hidden plumbing, drainage backups, or anything that could damage finishes quickly.",
          "If you are unsure where to shut water off or cannot tell whether the issue is isolated, that is already a strong signal to bring in help.",
        ],
      },
      {
        title: "Where DIY tends to create bigger problems",
        body: [
          "Temporary fixes can conceal the real failure, delay the proper repair, and spread damage into cabinetry, walls, or shared building systems.",
          "Drain chemicals, overtightened fittings, and misread leak locations are common examples where the attempted fix changes the repair scope.",
        ],
      },
    ],
    ctaLabel: "Talk To A Licensed Pro",
    relatedServiceSlugs: ["drain-cleaning-repair", "emergency-plumbing"],
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Caleb Mercer",
    role: "Owner & Lead Project Coordinator",
    bio: "Keeps scopes, scheduling, and customer communication aligned from first call through close-out.",
    certifications: ["Licensed contractor", "Project scheduling"],
  },
  {
    name: "Lena Park",
    role: "Residential Service Lead",
    bio: "Focuses on homeowner repair decisions, system troubleshooting, and clear explanations around replacement timing.",
    certifications: ["Fixture and piping service", "Water heater installs"],
  },
  {
    name: "Marco Ruiz",
    role: "Commercial Response Technician",
    bio: "Coordinates multi-tenant and active-property plumbing work with an emphasis on speed, documentation, and minimal disruption.",
    certifications: [
      "Commercial troubleshooting",
      "Drain and emergency response",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getGuideBySlug(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getTestimonialsForService(slug: string) {
  return testimonials.filter((testimonial) =>
    testimonial.relatedServiceSlugs.includes(slug),
  );
}
