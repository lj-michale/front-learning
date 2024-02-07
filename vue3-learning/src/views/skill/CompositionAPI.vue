<template>
  <div id="app">
    <div id="app1">
      <p>count值:{{count0}}</p>
      <p>price值:{{price}}</p>
      <p>{{ sum }}</p>
      <img v-show="show" alt="Vue logo" src="@/assets/imgs/20231106101903.jpg" />
      <button @click="toggle">显示隐藏图片</button>
      <hr />
      <h2>计数器：{{ count }}</h2>
      <button @click="increment">累加</button>
    </div>
<!--    <div id="app2">
      <h1>值：{{ sum.car.config.isChina }}</h1>
      <button @click="sum.car.config.isChina = !sum.car.config.isChina">改变数据</button>
    </div>-->
    <div id="div3">
      <!-- 绑定属性 -->
      <a v-bind:href="path" style="display: block;">犬小哈教程</a>
      <!-- v-bind 指令简写模式 -->
      <a :href="path" style="display: block;">犬小哈教程</a>
    </div>
    <div id="div4">
      <!-- 通过 v-if 指令判断 isShow 是否为 true, 若是则渲染 <a> 标签，否则不渲染 -->
      <a href="https://www.quanxiaoha.com" v-if="isShow">犬小哈教程</a>
    </div>
    <div id="div5">
      <!-- 通过 v-if 指令判断 isShow 是否为 true, 若是则渲染 <a> 标签 -->
      <a href="https://www.quanxiaoha.com" v-if="isShow2">犬小哈教程</a>
      <!-- 否则渲染下面标签的内容 -->
      <div v-else>www.quanxiaoha.com</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,computed, watch, onMounted,reactive} from 'vue';

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

const sum2 = reactive({
  car: {
    name: '长安汽车',
    money: 15000,
    config: {
      color: 'black',
      isChina: true,
    }
  }
})

// 定义一个 path 响应式变量，用于绑定 href 属性
const path = ref('https://www.quanxiaoha.com')
// 设置 isShow 变量为 true
const isShow = ref(true)
const isShow2 = ref(false)

setTimeout(()=>{
  count0.value = 200;
},3000);

watch(sum,(newVal,oldVal)=>{
  sumChanged(newVal);
})

// 监听复杂响应式对象
// watch(() => sum2.car, (New, Old) => {
//   console.log(`新值:${New.config.isChina} ——— 老值:${Old.config.isChina}`)
// }, { deep: true })

function sumChanged(newSum){
  console.log("您的总价已更新为：",newSum);
}

onMounted(()=>{

})

console.log(count.value);
console.log(price.value);
</script>

