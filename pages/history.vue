<template>
  <div>
    <h1 class="sheet-header">{{ $t("history") }}</h1>
    <br />
    <div>
      <p v-if="historyStore.answersTable.length == 0" class="placeholder">
        {{ $t("CompleteYourFirst") }}
      </p>
      <v-card class="table-card" hover>
        <table v-if="historyStore.answersTable.length > 0" class="table-center">
          <thead>
            <tr>
              <th class="table-numbers" scope="col">#</th>
              <th class="table-numbers" scope="col">
                {{ $t("tablesentence") }}
              </th>
              <th class="table-numbers" scope="col">
                {{ $t("tabletime") }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="value in historyStore.answersTable" :key="value.id">
              <td class="table-numbers">
                <b>{{ value.id }}</b>
              </td>
              <td class="table-text">{{ value.Sentence }}</td>
              <td class="table-numbers">
                {{ value.Time
                }}<!--
                  --><span class="m-space">&nbsp;</span>s
              </td>
            </tr>
          </tbody>
        </table>
      </v-card>
      <br />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHistoryStore } from "~/stores/history";
const historyStore = useHistoryStore();
</script>

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

.table-card {
  margin: auto;
  width: 75%;

}

table {
  display: block;
  border: 3px solid purple;
  border-radius: 5px;
  border-collapse: collapse;
  max-height: 500px;
  overflow: auto;
}

.table-numbers {
  border: 2px solid gray;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  width: 10%;
}

.table-text {
  border: 2px solid gray;
  padding: 5px;
  text-align: left;
  font-size: 20px;
  width: 80%;
}

.m-space {
  font-size: 9px;
}
</style>
