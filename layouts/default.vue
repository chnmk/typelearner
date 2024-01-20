<template>
  <v-app>
    <AppHeader />
    <!-- Workaround to instantly load style -->
    <v-main style="--v-layout-top: 48px">
      <v-container :fluid="true">
        <v-row>
          <v-col cols="12" md="3" lg="2">
            <SettingsPanel />
          </v-col>
          <v-col cols="12" md="6" lg="8">
            <v-sheet min-height="70vh" rounded="rounded" elevation="1">
              <NuxtPage />
            </v-sheet>
          </v-col>
          <v-col cols="12" md="3" lg="2">
            <MetricsPanel />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useMetricsStore } from "@/stores/metrics";

// Get the first sentence immediately:
const metricsStore = useMetricsStore();
metricsStore.changeSentence(false);
</script>

<style>
.sheet-header {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding: 5px;
}

.header-hr {
  margin: 5px 25px 25px 25px;
  color: purple;
}

.vuetify-components {
  max-width: 90%;
  margin-left: 5%;
}

.vuetify-checkbox {
  margin-bottom: 0%;
}
</style>
