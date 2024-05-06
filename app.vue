<template>
  <div>
    <NuxtLayout> </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "typelearner",
  meta: [
    { name: "description", content: "Yet another language learning app." },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
});
</script>
