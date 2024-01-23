// @vitest-environment nuxt
import { expect, it } from "vitest";
import { mockComponent, mountSuspended } from "@nuxt/test-utils/runtime";
import App from "~/app.vue";

mockComponent("SomeComponent", async () => {
  const { h } = await import("vue");
  return {
    setup() {
      return () => h("div", null, "Mocked");
    },
  };
});

it("should mock", async () => {
  const component = await mountSuspended(App);
  expect(component.html()).toContain(`class="loading-spinner"`);
});
