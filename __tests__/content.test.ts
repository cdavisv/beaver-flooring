import {
  getGuideBySlug,
  getServiceBySlug,
  services,
  guides,
} from "@/lib/content";

describe("content contracts", () => {
  it("covers all expected core services", () => {
    expect(services.map((service) => service.slug)).toEqual(
      expect.arrayContaining([
        "residential-plumbing",
        "commercial-plumbing",
        "drain-cleaning-repair",
        "water-heater-services",
        "emergency-plumbing",
      ]),
    );
  });

  it("keeps guide and service lookup helpers aligned", () => {
    expect(getServiceBySlug("residential-plumbing")?.name).toBe(
      "Residential Plumbing",
    );
    expect(getGuideBySlug("pricing-estimates")?.title).toBe(
      "Plumbing Pricing & Estimates Guide",
    );
    expect(guides).toHaveLength(4);
  });
});
