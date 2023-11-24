import { defineStore } from 'pinia'

//using setup stores, rather than option stores:
export const useSentencesStore = defineStore('sentences', {
    state: () => {
        return {
            fetchedOriginalText: "Loading...",
            slicedOriginalText: "Loading...",
            fetchedTranslatedText: "Loading...",
            fetchedOriginalPreload: "Loading...",
            slicedOriginalPreload: "Loading...",
            fetchedRussianPreload: "Loading...",
        }
      },
  })
