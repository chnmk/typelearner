import { defineVitestConfig } from "@nuxt/test-utils/config";
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "happy-dom",
    exclude: [...configDefaults.exclude, "tests/useApiFetch.test.ts"],
    environmentOptions: {
      nuxt: {
        overrides: {
          app: {
            baseURL: "/",
          },
        },
      },
    },
  },
});
