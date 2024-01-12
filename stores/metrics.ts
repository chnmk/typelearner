import { defineStore } from 'pinia'
import { useSentencesStore } from '@/stores/sentences'
import { useUserInputStore } from '@/stores/userInput'
import { useHistoryStore } from '@/stores/history'

//using setup stores, rather than option stores:
export const useMetricsStore = defineStore('metrics', {
    state: () => {
        return {
            time: 0,
            answers: 0,
            average: 0,
            speed: 0,
            isTimerStarted: false,
        }
      },
      actions: {
        changeSentence(isSentenceCorrect: boolean, isSameSentence: boolean) {
            //Load "fetchSentence()" from sentences store:
            const sentencesStore = useSentencesStore()
            //Load user input from input store:
            const userInputStore = useUserInputStore()
            //Load history table from history store:
            const historyStore = useHistoryStore()

            //Check if the sentence should be counted in metrics:
            if (isSentenceCorrect == true) {
                //Create a new entry to the table:
                historyStore.answerId++
                historyStore.answersTable.unshift({id: historyStore.answerId, Sentence: sentencesStore.fetchedOriginalText, Time: this.time})
                //TODO: handle long history properly:
                if (historyStore.answersTable.length > 7) {
                    historyStore.answersTable.pop()
                }
                //Calculate average time:
                this.average = Math.round(historyStore.answersTable.map(x => x.Time).reduce((a, b) => a + b, 0) / historyStore.answersTable.map(x => x.Time).length)
                //Calculate time spent on this sentence:
                historyStore.answersSpeed.push((sentencesStore.fetchedOriginalText.length/this.time)*60)
                //Calculate characters per minute:
                this.speed = Math.round(historyStore.answersSpeed.reduce((a, b) => a + b, 0) / historyStore.answersSpeed.length)
                //Increase answers counter:
                this.answers++
            }

            //Clear the input and metrics:
            userInputStore.inputText = ""
            sentencesStore.isTextCorrect = false
            sentencesStore.isTextWrong = false
            this.isTimerStarted = false
            this.time = 0

            //Fetch next sentence:
            if (isSameSentence === false) {
                sentencesStore.fetchSentence()
            }
        },

        addTimer() {
            this.time++
        },
      }
  })
