<template>
    <div>
        <h1>typelearner</h1>
        <br>
        <div>{{ sentencesStore.fetchedOriginalText }}</div>
        <div>{{ sentencesStore.fetchedTranslatedText }}</div>

        <v-text-field
            :placeholder=sentencesStore.slicedOriginalText
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

// pinia: access the settings store
const sentencesStore = useSentencesStore()

</script>