<template>
  <v-sheet
    rounded="rounded"
    min-height="412"
    elevation="1"
    style="margin-top: 25px"
  >
    <p class="sheet-header">{{ $t("settings") }}</p>
    <hr class="header-hr" />
    <v-select
      v-model="locale"
      label="Interface"
      :items="['English', 'Russian']"
      placeholder="English"
      variant="solo"
      class="vuetify-components"
      rounded="sm"
      @update:model-value="interfaceLanguageChange($event)"
    ></v-select>
    <v-select
      label="Sentences"
      :items="['English', 'Spanish', 'Russian', 'Japanese', 'Hebrew']"
      placeholder="Spanish"
      variant="solo"
      class="vuetify-components"
      rounded="sm"
      @update:model-value="sentenceLanguageChange($event)"
    ></v-select>
    <v-checkbox
      v-model="settingsStore.repeatCheckbox"
      label="Repeat sentence"
      class="vuetify-components"
      :hide-details="true"
      style="--v-input-control-height: 52px"
    ></v-checkbox>
    <v-checkbox
      v-model="settingsStore.hideCheckbox"
      label="Hide translation"
      class="vuetify-components"
      :hide-details="true"
      style="--v-input-control-height: 52px"
    ></v-checkbox>
    <v-checkbox
      v-model="settingsStore.historyOnlyCheckbox"
      label="History only"
      class="vuetify-components"
      style="--v-input-control-height: 52px"
      :disabled="historyStore.answersTable.length === 0"
    ></v-checkbox>
  </v-sheet>
</template>

<script setup lang="ts">
import { useHistoryStore } from "@/stores/history";
import { useSettingsStore } from "@/stores/settings";
import { useSentencesStore } from "@/stores/sentences";
import { useMetricsStore } from "@/stores/metrics";

const { locale } = useI18n();

const metricsStore = useMetricsStore();
const historyStore = useHistoryStore();
const settingsStore = useSettingsStore();
const sentencesStore = useSentencesStore();

// v-select events
function interfaceLanguageChange(event: string | null) {
  // TODO: rewrite for better scalability
  sentencesStore.isLoaded = false;
  sentencesStore.isPreloaded = false;
  if (event === "Russian") {
    settingsStore.userLanguage = "rus";
  } else if (event === "English") {
    settingsStore.userLanguage = "eng";
  }
  metricsStore.saveMetrics(false);
  sentencesStore.changeSentence();
}

function sentenceLanguageChange(event: string | null) {
  // TODO: rewrite for better scalability
  sentencesStore.isLoaded = false;
  sentencesStore.isPreloaded = false;
  if (event === "Russian") {
    settingsStore.sentenceLanguage = "rus";
  } else if (event === "English") {
    settingsStore.sentenceLanguage = "eng";
  } else if (event === "Japanese") {
    settingsStore.sentenceLanguage = "jpn";
  } else if (event === "Hebrew") {
    settingsStore.sentenceLanguage = "heb";
  } else if (event === "Spanish") {
    settingsStore.sentenceLanguage = "spa";
  }
  metricsStore.saveMetrics(false);
  sentencesStore.changeSentence();
}
</script>
