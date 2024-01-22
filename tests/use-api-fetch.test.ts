import { test, expect, describe } from "vitest";

describe("api fetch test", () => {
  test("english -> english random page", async () => {
    const { fetchedObj } = await useApiFetch("eng", "eng");
    expect(fetchedObj).toBeDefined();
  });
  test("russian -> english random page", async () => {
    const { fetchedObj } = await useApiFetch("eng", "rus");
    expect(fetchedObj).toBeDefined();
  });
  test("spanish -> english random page", async () => {
    const { fetchedObj } = await useApiFetch("eng", "spa");
    expect(fetchedObj).toBeDefined();
  });
  test("hebrew -> english random page", async () => {
    const { fetchedObj } = await useApiFetch("eng", "heb");
    expect(fetchedObj).toBeDefined();
  });
  test("japanese -> english random page", async () => {
    const { fetchedObj } = await useApiFetch("eng", "jpn");
    expect(fetchedObj).toBeDefined();
  });

  // ===============================

  test("english -> russian random page", async () => {
    const { fetchedObj } = await useApiFetch("rus", "eng");
    expect(fetchedObj).toBeDefined();
  });
  test("russian -> russian random page", async () => {
    const { fetchedObj } = await useApiFetch("rus", "rus");
    expect(fetchedObj).toBeDefined();
  });
  test("spanish -> russian random page", async () => {
    const { fetchedObj } = await useApiFetch("rus", "spa");
    expect(fetchedObj).toBeDefined();
  });
  test("hebrew -> russian random page", async () => {
    const { fetchedObj } = await useApiFetch("rus", "heb");
    expect(fetchedObj).toBeDefined();
  });
  test("japanese -> russian random page", async () => {
    const { fetchedObj } = await useApiFetch("rus", "jpn");
    expect(fetchedObj).toBeDefined();
  });

  // ===============================

  test("english -> english page 100", async () => {
    const { fetchedObj } = await useApiFetch("eng", "eng", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("russian -> english page 100", async () => {
    const { fetchedObj } = await useApiFetch("eng", "rus", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("spanish -> english page 100", async () => {
    const { fetchedObj } = await useApiFetch("eng", "spa", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("hebrew -> english page 100", async () => {
    const { fetchedObj } = await useApiFetch("eng", "heb", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("japanese -> english page 100", async () => {
    const { fetchedObj } = await useApiFetch("eng", "jpn", 100);
    expect(fetchedObj).toBeDefined();
  });

  // ===============================

  test("english -> russian page 100", async () => {
    const { fetchedObj } = await useApiFetch("rus", "eng", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("russian -> russian page 100", async () => {
    const { fetchedObj } = await useApiFetch("rus", "rus", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("spanish -> russian page 100", async () => {
    const { fetchedObj } = await useApiFetch("rus", "spa", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("hebrew -> russian page 100", async () => {
    const { fetchedObj } = await useApiFetch("rus", "heb", 100);
    expect(fetchedObj).toBeDefined();
  });
  test("japanese -> russian page 100", async () => {
    const { fetchedObj } = await useApiFetch("rus", "jpn", 100);
    expect(fetchedObj).toBeDefined();
  });
});
