<template>
    <div>
        <h1>Practice page</h1>
        <div>{{ sentencesStore.fetchedOriginalText }}</div>
        <div>{{ sentencesStore.fetchedTranslatedText }}</div>
        <v-text-field
        :placeholder=sentencesStore.slicedOriginalText
        ></v-text-field>
    </div>
</template>

<script setup lang='ts'>
import { useSentencesStore } from '~/stores/sentences';

// pinia: access the settings store
const sentencesStore = useSentencesStore()

</script>