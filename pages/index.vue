<template>
    <div>
        <h1 class="sheet-header">
            typelearner
        </h1>
        <br>
        <v-text-field
            :placeholder=sentencesStore.slicedOriginalText
            @update:modelValue="changeInputValue($event)"
            :modelValue="userInputStore.inputText"
            :color=inputFieldColor
            base-color="purple"
            :class="{ 
                'correct-input': sentencesStore.isTextCorrect, 
                'wrong-input': sentencesStore.isTextWrong 
            }"
            class="vuetify-components"
            rounded="sm"
            >
        </v-text-field>
        <v-btn
            @click='buttonChangeSentence'
            rounded="sm"
            class="change-button"
            >
            Change sentence
        </v-btn>
        <hr>
        <div class="sentences-box" v-if="sentencesStore.isLoaded">
            <div class="original-text">
                {{ sentencesStore.fetchedOriginalText }}
            </div>
            <div class="translated-text">
                {{ sentencesStore.fetchedTranslatedText }}
            </div>
        </div>
        <div class="loading-spinner" v-if="!sentencesStore.isLoaded">
            <v-progress-circular indeterminate />
        </div>
        <div>&nbsp;</div>
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
let inputFieldColor = "purple"

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
        //v-text-field color:
        inputFieldColor = "green"
    } else if (event.length !== 0) {
        sentencesStore.isTextCorrect = false
        sentencesStore.isTextWrong = true
        inputFieldColor = "red"
    } else {
        sentencesStore.isTextCorrect = false
        sentencesStore.isTextWrong = false
        inputFieldColor = "purple"
    }

    if (event == sentencesStore.fetchedOriginalText) {
        inputFieldColor = ""
        clearInterval(intervalVariable)
        metricsStore.changeSentence(true)
    }
}

function buttonChangeSentence() {
    inputFieldColor = ""
    //Input clear should go before clearInterval:
    userInputStore.inputText = ""
    clearInterval(intervalVariable)
    metricsStore.changeSentence(false)
}

</script>

<script lang="ts">
import '~/assets/css/input.css'
</script>

<style scoped>
h1 {
    font-size: 48px;
    color: #EEEEEE;
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
    margin:25px;
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