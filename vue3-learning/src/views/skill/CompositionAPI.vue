<template>
  <p>count值:{{count0}}</p>
  <p>price值:{{price}}</p>
  <p>{{ sum }}</p>
  <img v-show="show" alt="Vue logo" src="@/assets/imgs/20231106101903.jpg" />
  <button @click="toggle">显示隐藏图片</button>
  <hr />
  <h2>计数器：{{ count }}</h2>
  <button @click="increment">累加</button>
</template>
<script setup lang="ts">
import {ref,computed, watch, onMounted} from 'vue';

// 下面这一块代码只负责处理数量、单价、总价逻辑
const count0 = ref(10);
const price = ref(9.9);
const show = ref(true)
const toggle = () => {
  show.value = !show.value
}
// 计数器
const count = ref(0)
const increment = () => {
  count.value ++
}
const sum = computed(()=>{
  return count0.value*price.value;
})

setTimeout(()=>{
  count0.value = 200;
},3000);

watch(sum,(newVal,oldVal)=>{
  sumChanged(newVal);
})

function sumChanged(newSum){
  console.log("您的总价已更新为：",newSum);
}

onMounted(()=>{

})

console.log(count.value);
console.log(price.value);
</script>

