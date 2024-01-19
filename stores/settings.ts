import { defineStore } from 'pinia'

//using setup stores, rather than option stores:
export const useSettingsStore = defineStore('settings', {
    state: () => {
        return {
            userLanguage: 'eng',
            sentenceLanguage: 'spa',
            repeatCheckbox: false,
            hideCheckbox: false,
            historyOnlyCheckbox: false,
        }
      },
  })
