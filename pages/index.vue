<template>
    <div>
        <h1>Practice page</h1>
        Current language: {{ settingsStore.sentenceLanguage }}
    </div>
</template>

<script setup lang='ts'>
import { useSettingsStore } from '@/stores/settings'

// pinia: access the settings store
const settingsStore = useSettingsStore()

</script>