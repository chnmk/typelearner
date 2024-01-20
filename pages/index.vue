<template>
  <div>
    <h1 class="sheet-header">typelearner</h1>
    <br />
    <v-text-field
      :placeholder="sentencesStore.slicedOriginalText"
      :update:model-value="checkIfEmpty()"
      :model-value="userInputStore.inputText"
      :color="inputFieldColor"
      base-color="purple"
      :class="{
        'correct-input': sentencesStore.isTextCorrect,
        'wrong-input': sentencesStore.isTextWrong,
      }"
      class="vuetify-components"
      rounded="sm"
      @update:model-value="changeInputValue($event)"
    >
    </v-text-field>
    <v-btn rounded="sm" class="change-button" @click="buttonChangeSentence">
      Change sentence
    </v-btn>
    <hr />
    <div v-if="sentencesStore.isLoaded" class="sentences-box">
      <div class="original-text" @click.right.prevent @copy.prevent>
        {{ sentencesStore.fetchedOriginalText }}
      </div>
      <div
        v-if="!settingsStore.hideCheckbox"
        class="translated-text"
        @click.right.prevent
        @copy.prevent
      >
        {{ sentencesStore.fetchedTranslatedText }}
      </div>
    </div>
    <div v-if="!sentencesStore.isLoaded" class="loading-spinner">
      <v-progress-circular indeterminate />
    </div>
    <div>&nbsp;</div>
  </div>
</template>

<script setup lang="ts">
import { useMetricsStore } from "~/stores/metrics";
import { useSentencesStore } from "~/stores/sentences";
import { useUserInputStore } from "~/stores/userInput";
import { useSettingsStore } from "~/stores/settings";
import "~/assets/css/input.css";

// pinia: access the stores
const metricsStore = useMetricsStore();
const sentencesStore = useSentencesStore();
const userInputStore = useUserInputStore();
const settingsStore = useSettingsStore();

let intervalVariable = setInterval(metricsStore.addTimer, 1000);
clearInterval(intervalVariable);

// TODO: move inputFieldColor to sentences store
let inputFieldColor = "purple";

function changeInputValue(event: string) {
  // Write input to the input store:
  userInputStore.inputText = event;

  // Automatically start the timer when writing the first letter:
  if (
    metricsStore.isTimerStarted === false &&
    userInputStore.inputText !== ""
  ) {
    metricsStore.isTimerStarted = true;
    intervalVariable = setInterval(metricsStore.addTimer, 1000);
  }

  // Make input text green, red or grey depending on whether it's correct:
  if (
    event === sentencesStore.fetchedOriginalText.slice(0, event.length) &&
    event.length !== 0
  ) {
    sentencesStore.isTextCorrect = true;
    sentencesStore.isTextWrong = false;
    // v-text-field color:
    inputFieldColor = "green";
  } else if (event.length !== 0) {
    sentencesStore.isTextCorrect = false;
    sentencesStore.isTextWrong = true;
    inputFieldColor = "red";
  } else {
    sentencesStore.isTextCorrect = false;
    sentencesStore.isTextWrong = false;
    inputFieldColor = "purple";
  }

  if (event === sentencesStore.fetchedOriginalText) {
    inputFieldColor = "";
    clearInterval(intervalVariable);
    metricsStore.changeSentence(true);
  }
}

function buttonChangeSentence() {
  inputFieldColor = "";
  // Input clear should go before clearInterval:
  userInputStore.inputText = "";
  clearInterval(intervalVariable);
  metricsStore.changeSentence(false);
}

function checkIfEmpty() {
  // Reset timer on language change or input clear
  if (userInputStore.inputText === "") {
    clearInterval(intervalVariable);
    metricsStore.isTimerStarted = false;
    metricsStore.time = 0;
  }
}
</script>

<style scoped>
h1 {
  font-size: 48px;
  color: #eeeeee;
  text-shadow:
    1px 1px 2px purple,
    -1px 1px 2px purple,
    -1px -1px 2px purple,
    1px -1px 2px purple;
}

.change-button {
  max-width: 30%;
  margin-left: 5%;
  min-width: 170px;
  border: 1px solid purple;
}

hr {
  margin: 25px;
  /*
    color: purple;
    */
}

.sentences-box {
  border: 2px solid purple;
  margin: 0% 5% 0% 5%;
  height: 350px;
  border-radius: 5px;
}

.loading-spinner {
  color: purple;
  text-align: center;
  margin-top: 10%;
}

.original-text {
  font-weight: bold;
  font-size: 29px;
  max-width: 90%;
  margin-top: 20px;
  margin-left: 30px;
  /*
    text-align: center;
    */
}

.translated-text {
  font-size: 25px;
  max-width: 90%;
  margin-left: 30px;
  /*
    text-align: center;
    */
}
</style>
