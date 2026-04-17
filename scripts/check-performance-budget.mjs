import fs from "node:fs";
import path from "node:path";

const manifestPath = path.join(
  process.cwd(),
  ".next",
  "app-build-manifest.json",
);
const routeMapPath = path.join(
  process.cwd(),
  ".next",
  "app-path-routes-manifest.json",
);

if (!fs.existsSync(manifestPath)) {
  throw new Error(
    "Missing .next/app-build-manifest.json. Run `npm run build` first.",
  );
}

if (!fs.existsSync(routeMapPath)) {
  throw new Error(
    "Missing .next/app-path-routes-manifest.json. Run `npm run build` first.",
  );
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const routeMap = JSON.parse(fs.readFileSync(routeMapPath, "utf8"));
const pages = manifest.pages ?? {};

function toRoutePattern(appRoute) {
  return new RegExp(
    `^${appRoute.replace(/\[[^/]+\]/g, "[^/]+").replace(/\//g, "\\/")}$`,
  );
}

const budgets = [
  { route: "/", maxBytes: 380_000 },
  { route: "/about", maxBytes: 360_000 },
  { route: "/about/team", maxBytes: 360_000 },
  { route: "/services", maxBytes: 360_000 },
  { route: "/services/emergency-plumbing", maxBytes: 360_000 },
  { route: "/faq", maxBytes: 360_000 },
  { route: "/contact", maxBytes: 380_000 },
  { route: "/privacy-policy", maxBytes: 360_000 },
  { route: "/terms-of-service", maxBytes: 360_000 },
  { route: "/testimonials-case-studies", maxBytes: 360_000 },
  { route: "/guides/pricing-estimates", maxBytes: 360_000 },
];

function getRouteSize(route) {
  const manifestRoute =
    Object.entries(routeMap).find(([, appRoute]) => appRoute === route)?.[0] ??
    Object.entries(routeMap).find(([, appRoute]) =>
      toRoutePattern(appRoute).test(route),
    )?.[0];

  if (!manifestRoute) {
    throw new Error(`Missing route mapping for route: ${route}`);
  }

  const entries = pages[manifestRoute];

  if (!entries || entries.length === 0) {
    throw new Error(`Missing build manifest entry for route: ${route}`);
  }

  return entries
    .filter((entry) => entry.startsWith("static/"))
    .reduce((total, entry) => {
      const filePath = path.join(process.cwd(), ".next", entry);
      if (!fs.existsSync(filePath)) {
        return total;
      }

      return total + fs.statSync(filePath).size;
    }, 0);
}

const failures = budgets.flatMap(({ route, maxBytes }) => {
  const size = getRouteSize(route);
  return size > maxBytes
    ? [`${route} JS budget exceeded: ${size} bytes > ${maxBytes} bytes`]
    : [];
});

if (failures.length > 0) {
  throw new Error(failures.join("\n"));
}

for (const { route, maxBytes } of budgets) {
  const size = getRouteSize(route);
  console.log(`${route}: ${size} bytes (budget ${maxBytes})`);
}
