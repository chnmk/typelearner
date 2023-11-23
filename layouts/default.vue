<template>
    <v-app id="inspire">
      <v-app-bar
        class="px-3"
        flat
        density="compact"
      >
        <v-avatar
          color="purple-lighten-1"
          class="hidden-md-and-up"
          size="32"
        ></v-avatar>
  
        <v-spacer></v-spacer>
  
        <v-tabs
          centered
          color="grey-darken-2"
        >
          <v-tab
            v-for="link in links"
            :key="link"
            :text="link"
          ></v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
  
        <v-avatar
          class="hidden-sm-and-down"
          color="purple-lighten-1"
          size="32"
        ></v-avatar>
      </v-app-bar>
  
      <v-main class="bg-grey-lighten-3">
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
                <!--  -->
                Settings
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
                <!--  -->
                Main Page
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
                <!--  -->
                Metrics
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
</template>

<script setup lang="ts">
    const links = [
      'Practice',
      'History',
      'Profile',
      'About',
    ]
</script>

<script lang="ts">
    export default {
      data: () => ({
        links: [
          'Practice',
          'History',
          'Profile',
          'About',
        ],
      }),
    }
</script>