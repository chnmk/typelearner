<template>
  <div>
    <h1 class="sheet-header">{{ $t("About") }}</h1>
    <br />
    <div class="about-contents">
      <v-card class="description-card">
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
    </div>
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

.about-contents {
  padding-bottom: 3%;
}

.description-card {
  width: 60%;
  height: 60%;
  margin: 0% 20% 0% 20%;
  padding: 2%;
}

.about-text {
  margin-left: 5%;
}

.tech-list {
  margin-top: 10px;
  margin-left: 35px;
}
</style>
