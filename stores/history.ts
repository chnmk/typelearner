import { defineStore } from 'pinia'

interface answersTableType {
  id: number
  Sentence: string
  Time: number
}

interface answersDataType {
  Sliced: string,
  Translated: string 
}

//using setup stores, rather than option stores:
export const useHistoryStore = defineStore('history', {
    state: () => {
        return {
            answerId: 0,
            answersTable: [] as answersTableType[],
            answersSpeed: [] as number[],
            answersData: [] as answersDataType[]
        }
      },
  })
