<template>
    <div>
        <h1>typelearner</h1>
        <br>
        <div><b>{{ sentencesStore.fetchedOriginalText }}</b></div>
        <div>{{ sentencesStore.fetchedTranslatedText }}</div>

        <v-text-field
            :placeholder=sentencesStore.slicedOriginalText
            @update:modelValue="changeInputValue($event)"
            :class="{ 'correct-input': sentencesStore.isTextCorrect, 'wrong-input': sentencesStore.isTextWrong }"
            :color=inputFieldColor
            >
        </v-text-field>

        <v-btn
            @click='sentencesStore.changeSentence()'
            >
            Change sentence
        </v-btn>
    </div>
</template>

<script setup lang='ts'>
import { useSentencesStore } from '~/stores/sentences';
import { useUserInputStore } from '~/stores/userInput';

//pinia: access the settings store
const sentencesStore = useSentencesStore()
const userInputStore = useUserInputStore()

//for "color" property on v-text-field
let inputFieldColor = ""

function changeInputValue(event: string) {
    userInputStore.inputText = event
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
}

</script>

<script lang="ts">
import '~/assets/css/input.css'
</script>