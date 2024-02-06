<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>

</style>
