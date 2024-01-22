<template>
  <div>
    <h1 class="sheet-header">About page</h1>
    <br />
    <v-card class="description-card">
      <div class="about-text">
        A language learning application with typing practice focus. Inspired by
        <a href="https://play.typeracer.com/">typeracer</a>
        and
        <a href="https://www.keybr.com/">keybr</a>. Provides a typing practice
        environment for random sentences fetched from
        <a href="https://tatoeba.org/">tatoeba.org</a>.
      </div>
      <br />
      <div class="about-text">
        Technologies used:

        <ul class="tech-list">
          <li><a href="https://vuejs.org/">Vue 3</a></li>
          <li><a href="https://nuxt.com/">Nuxt 3</a></li>
          <li><a href="https://pinia.vuejs.org/">Pinia</a></li>
          <li><a href="https://vuetifyjs.com/">Vuetify</a></li>
        </ul>
      </div>
      <br />
      <div class="about-text">
        Source code: <a href="https://github.com/chnmk/typelearner">GitHub</a>.
        <br />
        Sentences source: <a href="https://tatoeba.org/">Tatoeba</a>.
      </div>
    </v-card>
  </div>
</template>

<style scoped>
h1 {
  padding-top: 20px;
  margin-bottom: 10px;
}

.placeholder {
  color: lightgrey;
  font-style: italic;
  text-align: center;
  font-size: 25px;
}

.about-text {
  margin-left: 5%;
}

.description-card {
  width: 60%;
  height: 60%;
  margin: 0% 20% 0% 20%;
  padding: 2%;
}

.tech-list {
  margin-top: 10px;
  margin-left: 35px;
}
</style>
