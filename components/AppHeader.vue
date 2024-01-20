<template>
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