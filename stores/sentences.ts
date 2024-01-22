import { defineStore } from "pinia";
import { useHistoryStore } from "./history";
import { useSettingsStore } from "@/stores/settings";

// Using setup stores, rather than option stores:
export const useSentencesStore = defineStore("sentences", {
  state: () => {
    return {
      fetchedOriginalText: "Loading...",
      slicedOriginalText: "Loading...",
      fetchedTranslatedText: "Loading...",
      fetchedOriginalPreload: "Loading...",
      slicedOriginalPreload: "Loading...",
      fetchedTranslatedPreload: "Loading...",
      isLoaded: false,
      appStarted: false,
      isPreloaded: false,
      isTextCorrect: false,
      isTextWrong: false,
    };
  },
  actions: {
    // Resets metrics and decides on how to get a new sentence,
    // from history (useHistorySentence()) or from API (fetchSentence()):
    changeSentence() {
      const userInputStore = useUserInputStore();
      const settingsStore = useSettingsStore();
      const metricsStore = useMetricsStore();
      // Reset values:
      userInputStore.inputText = "";
      this.isTextCorrect = false;
      this.isTextWrong = false;
      metricsStore.isTimerStarted = false;
      metricsStore.time = 0;
      // Fetch next sentence:
      if (
        settingsStore.repeatCheckbox === false &&
        settingsStore.historyOnlyCheckbox === false
      ) {
        this.fetchSentence();
      } else if (
        settingsStore.repeatCheckbox === false &&
        settingsStore.historyOnlyCheckbox === true
      ) {
        this.useHistorySentence();
      }
    },

    // fetchSentence() is triggered by changeSentence() in metrics store.
    // fetchSentence() and preloadSentence() are currently implemented as separate functions.
    async fetchSentence() {
      // Check if a preloaded sentence already exists. If not, load a new sentence:
      if (!this.isPreloaded) {
        // Import settings store to check required languages:
        const settingsStore = useSettingsStore();

        // Fetch random API page:
        const { fetchedObj } = await useApiFetch(
          settingsStore.userLanguage,
          settingsStore.sentenceLanguage,
        );

        // Get random sentence and translation from the fethced page:
        const randomElement = Math.floor(Math.random() * 10);
        this.fetchedOriginalText = fetchedObj.data[randomElement].text;

        // Sometimes the [0][0] object is empty for translations to russian language. Workaround:
        try {
          try {
            this.fetchedTranslatedText =
              fetchedObj.data[randomElement].translations[0][0].text;
            // console.log("OBJECT_DEFAULT")
          } catch (err) {
            this.fetchedTranslatedText =
              fetchedObj.data[randomElement].translations[1][0].text;
            // console.log("OBJECT_WORKAROUND")
          }
          // In case both #0 and #1 translations are empty (it has never happened so far):
        } catch (err) {
          this.fetchedOriginalText = "error (handle later)";
        }

        // slicedOriginalText variable is used to display "..." at the end of long input placeholders.
        if (this.fetchedOriginalText.length > 10) {
          this.slicedOriginalText =
            this.fetchedOriginalText.slice(0, 10) + "...";
        } else {
          this.slicedOriginalText = this.fetchedOriginalText;
        }

        // Start preloading the next sentence right away:
        this.isLoaded = true;
        this.preloadSentence();

        // If there already is a preloaded sentence, overwrite data and preload a new one:
      } else {
        this.fetchedOriginalText = this.fetchedOriginalPreload;
        this.slicedOriginalText = this.slicedOriginalPreload;
        this.fetchedTranslatedText = this.fetchedTranslatedPreload;
        this.isPreloaded = false;
        this.isLoaded = true;
        this.preloadSentence();
      }
      this.appStarted = true;
    },

    // Preload is necessary to avoid delay between the sentences.
    // Differences from fetchSentence() function are marked with comments:
    async preloadSentence() {
      const settingsStore = useSettingsStore();

      const { fetchedObj } = await useApiFetch(
        settingsStore.userLanguage,
        settingsStore.sentenceLanguage,
      );

      const randomElement = Math.floor(Math.random() * 10);
      // fetchedOriginalText -> fetchedOriginalPreload
      this.fetchedOriginalPreload = fetchedObj.data[randomElement].text;

      try {
        try {
          // fetchedTranslatedText -> fetchedTranslatedPreload
          this.fetchedTranslatedPreload =
            fetchedObj.data[randomElement].translations[0][0].text;
        } catch (err) {
          // fetchedTranslatedText -> fetchedTranslatedPreload
          this.fetchedTranslatedPreload =
            fetchedObj.data[randomElement].translations[1][0].text;
        }
      } catch (err) {
        // fetchedOriginalText -> fetchedOriginalPreload
        this.fetchedOriginalPreload = "error (handle later)";
      }

      // fetchedOriginalText -> fetchedOriginalPreload
      if (this.fetchedOriginalPreload.length > 10) {
        // slicedOriginalText -> slicedOriginalPreload, fetchedOriginalText -> fetchedOriginalPreload
        this.slicedOriginalPreload =
          this.fetchedOriginalPreload.slice(0, 10) + "...";
      } else {
        // slicedOriginalPreload -> slicedOriginalPreload, fetchedOriginalText -> fetchedOriginalPreload
        this.slicedOriginalText = this.fetchedOriginalPreload;
      }

      this.isPreloaded = true;
      // console.log("Preload finished!")
    },

    // Used on sentence change
    // when "History only" checkbox is enabled and "Repeat sentence" is not:
    useHistorySentence() {
      const historyStore = useHistoryStore();
      const rng = Math.floor(Math.random() * historyStore.answersTable.length);

      this.fetchedOriginalText = historyStore.answersTable[rng].Sentence;
      this.slicedOriginalText = historyStore.answersTable[rng].Sentence;
      this.fetchedTranslatedText = historyStore.answersTable[rng].Sentence;
      this.isPreloaded = false;
    },
  },
});
