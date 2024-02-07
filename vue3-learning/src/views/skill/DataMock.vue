<template>

</template>

<script setup lang="ts">
import {ref,computed, watch, onMounted,reactive} from 'vue';
import { getMockDataInfos } from "@/api/apis/demoApi.ts";

async function fetchDemoApi() {
  const res = await getMockDataInfos()

  // eslint-disable-next-line eqeqeq
  if(res.status == 200) {
    return res
  }
}

let updateTimeLineInfos = reactive([])

onMounted(() => {
  fetchDemoApi().then(response => {
    console.log("开始mock数据调用")
    updateTimeLineInfos.value = response.data.result
    console.log(updateTimeLineInfos.value)
  }).catch(error => {
    console.log(error)
  })
})


</script>

<style scoped>

</style>
