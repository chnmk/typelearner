import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

const typelearnerLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // makes the three columns actually visible:
    background: "#EEEEEE",
  },
};

const typelearnerDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // modify later if needed:
    // background: '#000000',
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: "typelearnerLightTheme",
      themes: {
        typelearnerLightTheme,
        typelearnerDarkTheme,
      },
    },
    display: {
      thresholds: {
        xl: 1650,
      },
    },
  });
  app.vueApp.use(vuetify);
});
