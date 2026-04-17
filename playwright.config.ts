import { defineConfig, devices } from "@playwright/test";
import path from "node:path";

const port = 3100;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  retries: 0,
  timeout: 30_000,
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start",
    port,
    reuseExistingServer: false,
    env: {
      PORT: String(port),
      NEXT_PUBLIC_SITE_URL: `http://127.0.0.1:${port}`,
      CONTACT_ARCHIVE_PATH: path.join(
        process.cwd(),
        ".tmp",
        "contact-e2e.jsonl",
      ),
      CONTACT_RATE_LIMIT_MAX: "10",
      CONTACT_RATE_LIMIT_WINDOW_MS: "900000",
    },
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
