<template>
  <v-app>
    <AppHeader v-if="sentencesStore.appStarted" />
    <v-main v-if="sentencesStore.appStarted">
      <v-container :fluid="true">
        <v-row>
          <v-col :cols="colsPanels" class="order-1 order-lg-0">
            <SettingsPanel />
          </v-col>
          <v-col :cols="colsMain">
            <v-sheet min-height="70vh" rounded="rounded" elevation="1">
              <NuxtPage />
            </v-sheet>
          </v-col>
          <v-col cols="colsPanels" class="order-2 order-lg-0">
            <MetricsPanel />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <div v-if="!sentencesStore.appStarted" class="loading-spinner">
      <v-progress-circular indeterminate />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import { computed } from "vue";
import { useSentencesStore } from "~/stores/sentences";

// Get the first sentence immediately:
const sentencesStore = useSentencesStore();
sentencesStore.changeSentence();

// Vuetify settings:
const { name } = useDisplay();

const colsPanels = computed(() => {
  switch (name.value) {
    case "xs":
      return 6;
    case "sm":
      return 6;
    case "md":
      return 6;
    case "lg":
      return 3;
    case "xl":
      return 2;
    case "xxl":
      return 1;
  }
  return undefined;
});

const colsMain = computed(() => {
  switch (name.value) {
    case "xs":
      return 12;
    case "sm":
      return 12;
    case "md":
      return 12;
    case "lg":
      return 6;
    case "xl":
      return 8;
    case "xxl":
      return 10;
  }
  return undefined;
});
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

<style scoped>
.loading-spinner {
  color: purple;
  text-align: center;
  margin-top: 20%;
}
</style>
