<template>
    <div>
        <h1>typelearner</h1>
        <br>
        <div><b>{{ sentencesStore.fetchedOriginalText }}</b></div>
        <div>{{ sentencesStore.fetchedTranslatedText }}</div>

        <v-text-field
            :placeholder=sentencesStore.slicedOriginalText
            @update:modelValue="changeInputValue($event)"
            :modelValue="userInputStore.inputText"
            :class="{ 'correct-input': sentencesStore.isTextCorrect, 'wrong-input': sentencesStore.isTextWrong }"
            :color=inputFieldColor
            >
        </v-text-field>

        <v-btn
            @click='buttonChangeSentence'
            >
            Change sentence
        </v-btn>
    </div>
</template>

<script setup lang='ts'>
import { useMetricsStore } from '~/stores/metrics';
import { useSentencesStore } from '~/stores/sentences';
import { useUserInputStore } from '~/stores/userInput';

//pinia: access the stores
const metricsStore = useMetricsStore()
const sentencesStore = useSentencesStore()
const userInputStore = useUserInputStore()

//Declare setInterval globally 
//Todo: move intervalVariable to metrics store (if possible)
let intervalVariable = setInterval(metricsStore.addTimer, 1000)
clearInterval(intervalVariable)

//for "color" property on v-text-field
//TODO: move inputFieldColor to sentences store
let inputFieldColor = ""

function changeInputValue(event: string) {
    //Write input to the input store:
    userInputStore.inputText = event

    //Automatically start the timer when writing the first letter:
    if ((metricsStore.isTimerStarted == false) && (userInputStore.inputText != "")) {
        metricsStore.isTimerStarted = true
        intervalVariable = setInterval(metricsStore.addTimer, 1000)
    }

    //Make input text green, red or grey depending on whether it's correct:
    if ((event == sentencesStore.fetchedOriginalText.slice(0, event.length)) && (event.length !== 0)) {
        sentencesStore.isTextCorrect = true
        sentencesStore.isTextWrong = false
        inputFieldColor = "green"
    } else if (event.length !== 0) {
        sentencesStore.isTextCorrect = false
        sentencesStore.isTextWrong = true
        inputFieldColor = "red"
    } else {
        sentencesStore.isTextCorrect = false
        sentencesStore.isTextWrong = false
        inputFieldColor = ""
    }

    if (event == sentencesStore.fetchedOriginalText) {
        inputFieldColor = ""
        clearInterval(intervalVariable)
        metricsStore.changeSentence(true)
    }
}

function buttonChangeSentence() {
    inputFieldColor = ""
    clearInterval(intervalVariable)
    metricsStore.changeSentence(false)
}

</script>

<script lang="ts">
import '~/assets/css/input.css'
</script>