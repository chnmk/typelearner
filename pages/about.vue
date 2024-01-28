<template>
  <div>
    <h1 class="sheet-header">{{ $t("About") }}</h1>
    <br />
    <v-card class="description-card" elevation="5">
      <div class="about-text">
        {{ $t("ALanguageLearningApp") }}
        <a href="https://play.typeracer.com/">typeracer</a>
        {{ $t("and") }}
        <a href="https://www.keybr.com/">keybr</a>.
        {{ $t("ProvidesATyping") }}
        <a href="https://tatoeba.org/">tatoeba.org</a>.
      </div>
      <br />
      <div class="about-text">
        {{ $t("techused") }}

        <ul class="tech-list">
          <li><a href="https://vuejs.org/">Vue 3</a></li>
          <li><a href="https://nuxt.com/">Nuxt 3</a></li>
          <li><a href="https://pinia.vuejs.org/">Pinia</a></li>
          <li><a href="https://vuetifyjs.com/">Vuetify</a></li>
        </ul>
      </div>
      <br />
      <div class="about-text">
        {{ $t("sourcecode") }}
        <a href="https://github.com/chnmk/typelearner">GitHub</a>.
        <br />
        {{ $t("sentsource") }} <a href="https://tatoeba.org/">Tatoeba</a>.
      </div>
    </v-card>
    <br />
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

.description-card {
  width: 60%;
  height: 60%;
  margin: 0% 20% 0% 20%;
  padding: 2% 5% 2% 5%;
  text-align: justify;
}

.about-text {
  font-size: 18px;
}

.tech-list {
  margin-top: 10px;
  margin-left: 35px;
}
</style>
