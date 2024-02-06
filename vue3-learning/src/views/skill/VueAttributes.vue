<template>
  <div id="main">
    <div id="attributte">
      <h5>组合式API使用示例:</h5>
      <button @click="increment">点击了：{{ count0 }} 次</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted , reactive, toRefs} from 'vue'
// 响应式状态
const count0 = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count0.value++
}

// 生命周期钩子
onMounted(() => {
  console.log(`计数器初始值为 ${count0.value}。`)
})

</script>

<style scoped>

</style>
