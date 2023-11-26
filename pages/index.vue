<template>
    <div>
        <h1>typelearner</h1>
        <br>
        <div><b>{{ sentencesStore.fetchedOriginalText }}</b></div>
        <div>{{ sentencesStore.fetchedTranslatedText }}</div>

        <v-text-field
            :placeholder=sentencesStore.slicedOriginalText
            @update:modelValue="changeInputValue($event)"
            class="wrong-input"
            color="red"
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

// pinia: access the settings store
const sentencesStore = useSentencesStore()
const userInputStore = useUserInputStore()

function changeInputValue(event: string) {
    console.log(event)
    userInputStore.inputText = event
}

</script>

<script lang="ts">
import '~/assets/css/input.css'
</script>