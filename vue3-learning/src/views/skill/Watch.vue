<template>
  <h2>one：{{ one }} | two: {{ two.value }}</h2>
  <button @click="one++">改变 one 数据</button>
  <button @click="two.value++">改变 two 数据</button>
</template>

<script setup lang="ts">
import { watch, ref ,reactive} from 'vue'
// 变量1
const one = ref(0)
// 变量2
const two = reactive({
  value: 10
})
// 监听多个变量
// 第一个参数变为数组形式,每个下标对应一个要监听的变量
// 第二个参数的函数传参改为每项数组形式,每个数组对应新旧值的参数
watch(
  [ one, () => two.value ],
  ( [oneNew, oneOld], [twoNew, twoOld] ) => {
    console.log(`one: ${oneNew}(新) ——— ${twoNew}(旧)`)
    console.log(`two: ${oneOld}(新) ——— ${twoOld}(旧)`)
    console.warn('——————————————————————————————————————————————')
  })
</script>


<style scoped>

</style>
