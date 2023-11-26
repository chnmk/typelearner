import { defineStore } from 'pinia'
import { useSentencesStore } from '@/stores/sentences'

//using setup stores, rather than option stores:
export const useUserInputStore = defineStore('userInput', {
    state: () => {
        return {
            inputText: ""
        }
    },
  })
