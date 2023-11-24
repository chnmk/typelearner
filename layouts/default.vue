<template>
  <!--using vuetify "three columns" wireframe:-->
    <v-app id="inspire">
      <v-app-bar
        class="px-3"
        flat
        density="compact"
      >
        <!--theme switch button in the top-left corner (mobile layout)-->
        <v-avatar
          color="grey-darken-1"
          class="hidden-md-and-up"
          size="32"
          @click="toggleTheme"
        >
          <v-icon 
            icon="mdi-theme-light-dark"
          ></v-icon>
        </v-avatar>
  
        <v-spacer></v-spacer>
  
        <v-tabs
          centered
          color="grey-darken-2"
        >
          <v-tab
            v-for="link, key in links"
            :key="key"
            :text="key"
            :to="link"
          ></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
  
        <!--theme switch button in the top-right corner (desktop layout)-->
        <v-avatar
          class="hidden-sm-and-down"
          color="grey-darken-1"
          size="32"
          @click="toggleTheme"
          >
          <v-icon 
            icon="mdi-theme-light-dark"
          ></v-icon>
        </v-avatar>
      </v-app-bar>
  
      <!-- 
      default: 
      <v-main class="bg-grey-lighten-3"> 
      (overwrites light and dark themes)
      -->
      <v-main> 
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!-- wireframe -->
                <h1>Settings</h1>
                <br>
                <v-select
                  label="Interface Language"
                  :items="['Russian', 'English']"
                  placeholder="Russian"
                  @update:modelValue="interfaceLanguageChange($event)"
                ></v-select>
                <v-select
                  label="Sentences Language"
                  :items="['English', 'Russian', 'Japanese', 'Hebrew']"
                  placeholder="English"
                  @update:modelValue="sentenceLanguageChange($event)"
                ></v-select>
                <!-- wireframe -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              md="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <!-- wireframe -->
                <!-- dynamic pages:-->
                <NuxtPage />
                <!-- wireframe -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              md="2"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
                <!-- wireframe -->
                <h1>Metrics</h1>
                <div>Timer: {{ metricsStore.time }}</div>
                <div>Average: {{ metricsStore.average }}</div>
                <div>Counter: {{ metricsStore.answers }}</div>
                <br>
                <div>Characters per minute: {{ metricsStore.speed }}</div>
                <!-- wireframe -->
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>

<script setup lang="ts">
    import { useTheme } from 'vuetify'
    import { useSettingsStore } from '@/stores/settings'

    ///Header Tab

    //wireframe links
    const links = {
      //key is the tab title, value is the page name
      Practice: "/",
      History: "history",
      Profile: "profile",
      About: "about"
    }

    //toggle theme
    const theme = useTheme()
    function toggleTheme () {
      theme.global.name.value = theme.global.current.value.dark ? 'typelearnerLightTheme' : 'typelearnerDarkTheme'
    }

    ///Settings Tab

    // pinia: access the settings store
    const settingsStore = useSettingsStore()

    //v-select events
    function interfaceLanguageChange(event: string | null) {
      //todo: rewrite for better scalability
      if (event == "Russian") {
        settingsStore.userLanguage = "rus"
      } else if (event == "English") {
        settingsStore.userLanguage = "eng"
      } 
    }

    function sentenceLanguageChange(event: string | null) {
      //todo: rewrite for better scalability
      if (event == "Russian") {
        settingsStore.sentenceLanguage = "rus"
      } else if (event == "English") {
        settingsStore.sentenceLanguage = "eng"
      } else if (event == "Japanese") {
        settingsStore.sentenceLanguage = "jpn"
      } else if (event == "Hebrew") {
        settingsStore.sentenceLanguage = "heb"
      }
    }

    ///Metrics Tab

    // pinia: access the metrics store
    const metricsStore = useMetricsStore() 

    //...
    
</script>