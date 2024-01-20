<template>
     <v-sheet
                rounded="rounded"
                min-height="412"
                elevation="1"
                style="margin-top: 25px;"
              >
                <!-- wireframe -->
                <p class="sheet-header">Metrics</p>
                <hr class="header-hr">
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
</template>

<script setup lang="ts">
    import { useMetricsStore } from '@/stores/metrics'
    const metricsStore = useMetricsStore() 
</script>

<style scoped>
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
