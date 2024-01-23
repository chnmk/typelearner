// @vitest-environment nuxt
import { test, expect, describe } from "vitest";

describe.concurrent("api fetch test", () => {
  test("russian -> english random page", async () => {
    await useApiFetch("eng", "rus").then((fetchedObj) => {
      expect(fetchedObj).toBeDefined();
    });
  });
  test("japanese -> russian random page", async () => {
    await useApiFetch("rus", "jpn").then((fetchedObj) => {
      expect(fetchedObj).toBeDefined();
    });
  });
  test("english -> english random page", async () => {
    await useApiFetch("eng", "eng").then((fetchedObj) => {
      expect(fetchedObj).toBeDefined();
    });
  });
  test("spanish -> english page 100", async () => {
    await useApiFetch("eng", "spa", 100).then((fetchedObj) => {
      expect(fetchedObj).toBeDefined();
    });
  });
  test("hebrew -> english page '100'", async () => {
    await useApiFetch("eng", "heb", "100").then((fetchedObj) => {
      expect(fetchedObj).toBeDefined();
    });
  });
});
