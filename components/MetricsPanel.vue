<template>
  <v-sheet
    rounded="rounded"
    min-height="412"
    elevation="1"
    style="margin-top: 25px"
  >
    <p class="sheet-header">Metrics</p>
    <hr class="header-hr" />
    <div class="metrics-tab">
      <v-card class="metrics-card" hover>
        <div class="metrics-div">
          <span class="counter-left">Timer: </span>
          <span class="counter-right">
            <span class="metrics-numbers">{{ metricsStore.time }}</span>
            <span class="m-space"> s</span>
          </span>
        </div>
        <div class="metrics-div">
          <span class="counter-left">Average: </span>
          <span class="counter-right">
            <span class="metrics-numbers">{{ metricsStore.average }}</span>
            <span class="m-space"> s</span>
          </span>
        </div>
        <div class="metrics-div">
          <span class="counter-left">Counter: </span>
          <span class="counter-right">
            <span class="metrics-numbers">{{ metricsStore.answers }}</span>
            <span class="m-space"> x</span>
          </span>
        </div>
      </v-card>
      <br />
      <v-card class="metrics-card" hover>
        <div class="metrics-div">
          <span class="counter-left">Char / Min: </span>
          <span class="counter-right">
            <span class="metrics-numbers">{{ metricsStore.cpm }}</span>
            <span class="m-space"> x</span>
          </span>
        </div>
        <div class="metrics-div">
          <span class="counter-left">Words / Min: </span>
          <span class="counter-right">
            <span class="metrics-numbers">{{ metricsStore.wpm }}</span>
            <span class="m-space"> x</span>
          </span>
        </div>
        <br />
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useMetricsStore } from "@/stores/metrics";
const metricsStore = useMetricsStore();
</script>

<style scoped>
.metrics-tab {
  margin-left: 8%;
  margin-right: 8%;
  font-size: 16px;
}

.metrics-card {
  padding: 10px 16px 10px 16px;
}

.metrics-div {
  display: inline-block;
  width: 100%;
}

.counter-left {
  float: left;
  margin-top: 8px;
}

.counter-right {
  float: right;
}

.metrics-numbers {
  font-weight: bold;
  font-size: 27px;
}

.m-space {
  font-size: 15px;
}
</style>
