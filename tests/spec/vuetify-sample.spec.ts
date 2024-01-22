import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import AppHeader from "@/components/AppHeader.vue";

const vuetify = createVuetify({
  components,
  directives,
});

global.ResizeObserver = require("resize-observer-polyfill");

test("displays header text", () => {
  const wrapper = mount(
    {
      template: "<v-layout><AppHeader></AppHeader></v-layout>",
    },
    {
      props: {},
      global: {
        components: {
          AppHeader,
        },
        plugins: [vuetify],
      },
    },
  );

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain("Practice");
});
