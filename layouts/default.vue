<template>
  <!--using vuetify "three columns" wireframe:-->
    <v-app id="inspire">
      <v-app-bar
        class="px-3"
        flat
        density="compact"
        elevation="1"
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
          color="purple"          
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

      <!-- Workaround to instantly load style -->
      <v-main
        style="--v-layout-top: 48px;"
      > 
        <v-container :fluid=true>
          <v-row>
            <v-col
              cols="12"
              lg="2"
            >
              <v-sheet
                rounded="rounded"
                min-height="312"
                elevation="1"
                style="margin-top: 25px;"
              >
                <!-- wireframe -->
                <p class="sheet-header">Settings</p>
                <hr>
                <!--"Interface language" is the correct name here-->
                <v-select
                  label="Translation" 
                  :items="['English', 'Russian']"
                  placeholder="English"
                  @update:modelValue="interfaceLanguageChange($event)"
                  variant="solo"
                  class="vuetify-components"
                  rounded="sm"
                ></v-select>
                <v-select
                  label="Original"
                  :items="['English', 'Spanish', 'Russian', 'Japanese', 'Hebrew']"
                  placeholder="Spanish"
                  @update:modelValue="sentenceLanguageChange($event)"
                  variant="solo"
                  class="vuetify-components"
                  rounded="sm"
                ></v-select>
                <v-checkbox 
                  label="Repeat sentence"
                  class="vuetify-components"
                  v-model="settingsStore.repeatCheckbox"
                ></v-checkbox>
                <!-- wireframe -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              lg="8"
            >
              <v-sheet
                min-height="70vh"
                rounded="rounded"
                elevation="1"
              >
                <!-- wireframe -->
                <!-- dynamic pages:-->
                <NuxtPage />
                <!-- wireframe -->
              </v-sheet>
            </v-col>
  
            <v-col
              cols="12"
              lg="2"
            >
              <v-sheet
                rounded="rounded"
                min-height="312"
                elevation="1"
                style="margin-top: 25px;"
              >
                <!-- wireframe -->
                <p class="sheet-header">Metrics</p>
                <hr>
                <div class="metrics-tab">
                  <span>Timer: </span> 
                    <span class="metrics-numbers">
                      {{ metricsStore.time }}
                    </span><!--
                  --><span class="m-space">&nbsp;</span>s
                  <br>
                  <span>Average: </span>
                    <span class="metrics-numbers">
                      {{ metricsStore.average }}
                    </span><!--
                  --><span class="m-space">&nbsp;</span>s
                  <br>
                  <span>Counter: </span>
                    <span class="metrics-numbers">
                      {{ metricsStore.answers }}
                    </span><!--
                  --><span class="m-space">&nbsp;</span>x
                  <br>
                  <br>
                  <span>Characters per minute: </span>
                    <span class="metrics-numbers">
                      {{ metricsStore.speed }}
                    </span><!--
                  --><span class="m-space">&nbsp;</span>x
                  <br>
                </div>
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
    import { useMetricsStore } from '@/stores/metrics'
    import { useSentencesStore } from '@/stores/sentences'

    // Get the first sentence immediately:
    const metricsStore = useMetricsStore() 
    metricsStore.changeSentence(false, false)

    // access settings store
    const settingsStore = useSettingsStore()
    
    ///=================================

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

    ///=================================

    ///Settings Tab

    //pinia: access sentence store
    const sentencesStore = useSentencesStore() 

    //v-select events
    function interfaceLanguageChange(event: string | null) {
      //TODO: rewrite for better scalability
      sentencesStore.isPreloaded = false
      if (event == "Russian") {
        settingsStore.userLanguage = "rus"
      } else if (event == "English") {
        settingsStore.userLanguage = "eng"
      }
      metricsStore.changeSentence(false, false)
    }

    function sentenceLanguageChange(event: string | null) {
      //TODO: rewrite for better scalability
      sentencesStore.isPreloaded = false
      if (event == "Russian") {
        settingsStore.sentenceLanguage = "rus"
      } else if (event == "English") {
        settingsStore.sentenceLanguage = "eng"
      } else if (event == "Japanese") {
        settingsStore.sentenceLanguage = "jpn"
      } else if (event == "Hebrew") {
        settingsStore.sentenceLanguage = "heb"
      } else if (event == "Spanish") {
        settingsStore.sentenceLanguage = "spa"
      }
      metricsStore.changeSentence(false, false)
    }
    
</script>

<style>
.sheet-header {
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  padding: 5px;
}

.vuetify-components {
  max-width: 90%;
  margin-left: 5%;
}

</style>

<style scoped>
hr {
  margin: 5px 25px 25px 25px;
  color: purple;
}

.metrics-tab {
  margin-left: 5%;
}

.m-space {
  font-size: 9px;
}

.metrics-numbers {
  font-weight: bold;
  font-size: 20px;
}
</style>