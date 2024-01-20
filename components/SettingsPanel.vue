<template>
<v-sheet
rounded="rounded"
min-height="412"
elevation="1"
style="margin-top: 25px;"
>
<!-- wireframe -->
<p class="sheet-header">Settings</p>
<hr class="header-hr">
<!--"Interface language" is the correct name here-->
<v-select
  label="Translation" 
  :items="['English', 'Russian']"
  placeholder="English"
  @update:modelValue="interfaceLanguageChange($event)"
  variant="solo"
  class="vuetify-components"
  rounded="sm"
></v-select>
<v-select
  label="Original"
  :items="['English', 'Spanish', 'Russian', 'Japanese', 'Hebrew']"
  placeholder="Spanish"
  @update:modelValue="sentenceLanguageChange($event)"
  variant="solo"
  class="vuetify-components"
  rounded="sm"
></v-select>
<v-checkbox 
  label="Repeat sentence"
  class="vuetify-components"
  v-model="settingsStore.repeatCheckbox"
  :hide-details="true"
  style="--v-input-control-height: 52px"
></v-checkbox>
<v-checkbox 
  label="Hide translation"
  class="vuetify-components"
  v-model="settingsStore.hideCheckbox"
  :hide-details="true"
  style="--v-input-control-height: 52px"
></v-checkbox>
<v-checkbox 
  label="History only"
  class="vuetify-components"
  v-model="settingsStore.historyOnlyCheckbox"
  style="--v-input-control-height: 52px"
  :disabled="historyStore.answersTable.length === 0"
></v-checkbox>
<!-- wireframe -->
</v-sheet>
</template>

<script setup lang="ts">
    import { useHistoryStore } from '@/stores/history'
    import { useSettingsStore } from '@/stores/settings'
    import { useSentencesStore } from '@/stores/sentences'
    import { useMetricsStore } from '@/stores/metrics'

    const metricsStore = useMetricsStore() 
    const historyStore = useHistoryStore()
    const settingsStore = useSettingsStore()
    const sentencesStore = useSentencesStore() 

    //v-select events
    function interfaceLanguageChange(event: string | null) {
      //TODO: rewrite for better scalability
      sentencesStore.isLoaded = false
      sentencesStore.isPreloaded = false
      if (event == "Russian") {
        settingsStore.userLanguage = "rus"
      } else if (event == "English") {
        settingsStore.userLanguage = "eng"
      }
      metricsStore.changeSentence(false)
    }

    function sentenceLanguageChange(event: string | null) {
      //TODO: rewrite for better scalability
      sentencesStore.isLoaded = false
      sentencesStore.isPreloaded = false
      if (event == "Russian") {
        settingsStore.sentenceLanguage = "rus"
      } else if (event == "English") {
        settingsStore.sentenceLanguage = "eng"
      } else if (event == "Japanese") {
        settingsStore.sentenceLanguage = "jpn"
      } else if (event == "Hebrew") {
        settingsStore.sentenceLanguage = "heb"
      } else if (event == "Spanish") {
        settingsStore.sentenceLanguage = "spa"
      }
      metricsStore.changeSentence(false)
    }
</script>