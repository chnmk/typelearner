import { defineStore } from 'pinia'

//using setup stores, rather than option stores:
export const useMetricsStore = defineStore('metrics', {
    state: () => {
        return {
            time: 0,
            answers: 0,
            average: 0,
            speed: 0,
            speedHistory: []
        }
      },
  })
