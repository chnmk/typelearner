import { defineStore } from "pinia";

import { test, expect, describe } from "vitest";
import { urlBuilder } from "../composables/url-builder";
import type { fetchedObjectStructure } from "../composables/fetched-object-structure";

describe("url builder test", () => {
  test("gets eng -> rus page", () => {
    defineStore("test store", {
      actions: {
        async testFetch() {
          const fetchedObject: fetchedObjectStructure =
            await $fetch<fetchedObjectStructure>(
              urlBuilder("rus", "eng"),
            ).catch((error) => error.data);
          expect(fetchedObject).toBeDefined();
        },
      },
    });
  });
});
