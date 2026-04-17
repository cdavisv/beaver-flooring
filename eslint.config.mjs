import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const baseDirectory = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory });

export default [
  {
    ignores: [
      ".next/**",
      "coverage/**",
      "eslint.config.mjs",
      "jest.config.js",
      "next-env.d.ts",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
