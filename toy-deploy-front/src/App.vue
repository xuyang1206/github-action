<template>
  <h1>Test for github action</h1>
  <button @click="addPV">更新应用的PV</button>
  <p>当前的PV: {{ count }}</p>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const count = ref(0)
const addPV = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_SERVER}/count`)
  count.value = res.data.count
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
