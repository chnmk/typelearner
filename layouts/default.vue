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
                Settings
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
                Metrics
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

    
</script>

<script lang="ts">
    //wireframe links
    export default {
      data: () => ({
        links: {
          //key is the tab title, value is the page name
          Practice: "index.vue",
          History: "history.vue",
          Profile: "history.vue",
          About: "history.vue"
        }
      }),
    }
    
</script>