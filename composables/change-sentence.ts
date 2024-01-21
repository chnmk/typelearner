import { useSettingsStore } from "@/stores/settings";
import { useUserInputStore } from "@/stores/userInput";
import { useMetricsStore } from "@/stores/metrics";
import { useSentencesStore } from "@/stores/sentences";

export function changeSentence() {
  const userInputStore = useUserInputStore();
  const settingsStore = useSettingsStore();
  const metricsStore = useMetricsStore();
  const sentencesStore = useSentencesStore();

  // Reset values:
  userInputStore.inputText = "";
  sentencesStore.isTextCorrect = false;
  sentencesStore.isTextWrong = false;
  metricsStore.isTimerStarted = false;
  metricsStore.time = 0;

  // Fetch next sentence:
  if (
    settingsStore.repeatCheckbox === false &&
    settingsStore.historyOnlyCheckbox === false
  ) {
    sentencesStore.fetchSentence();
  } else if (
    settingsStore.repeatCheckbox === false &&
    settingsStore.historyOnlyCheckbox === true
  ) {
    sentencesStore.useHistorySentence();
  }
}
