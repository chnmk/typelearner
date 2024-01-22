import { test, expect, describe } from "vitest";

describe("sample test", () => {
  test("imports useApiFetch composable", async () => {
    const component = await import("@/composables/useApiFetch");
    expect(component).toBeDefined();
  });
});
