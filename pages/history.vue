<template>
    <div>
        <h1>History</h1>
        <br>
        <!--<div>{{ historyStore.answersTable }}</div>-->
        <div>
            <p v-if="historyStore.answersTable.length==0" style="color:lightgrey; font-style:italic">Пусто...</p>
            <table class="table-center" v-if="historyStore.answersTable.length>0">
            <thead>
            <tr>
                <th scope="col">Номер</th>
                <th scope="col">Предложение</th>
                <th scope="col">Время</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="value in historyStore.answersTable" :key="value.id">
                <td>{{value.id}}</td>
                <td>{{value.Sentence}}</td>
                <td>{{value.Time}}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script setup>
import { useHistoryStore } from '~/stores/history';
const historyStore = useHistoryStore()

</script>