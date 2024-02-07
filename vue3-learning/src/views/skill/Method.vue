<template>
  <div id="div0">
    <div id="div1">
      <button @click="increment">Count is: {{ count }}</button>
      <button @click="fn">点击count+1</button>
      <button @click="fn2">点击修改对象</button>
      <button @click="fn3">点击修改数组</button>
      <h1>{{count2}}</h1>
      <h1>{{obj.name}}--{{obj.age}}</h1>
      <span v-for="(item, index) in arr3" :key="index">{{item}}</span>
    </div>
    <div class="div2">
      <input type="text" v-model="msg" />
      <div class="div2"><p v-for="(el,index) in arr2" :key="index" @click="msg=el">{{el}}</p></div>  //点击时将input内容变为el
    </div>
    <div id="div3">
      <h2>倒计时：{{time}}</h2>
    </div>
    <div id="div4">
      <input v-model="msgs" />
      <h5>{{msgs}}</h5>
    </div>
    <div id="div5">
      <h1>{{ data }}</h1>
      <button @click="data = 'Hello Vue3'">修改子组件的数据</button>
      <!-- 简写：<Hello :data="data" @update="data = $event" /> -->
      <Hello :data="data" @update="changeData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {watch,reactive, ref, onMounted } from 'vue'
//创建响应式的数据
let count2 = ref(0)
let obj = ref({name:"ljy",age:"21"})
let arr = ref([1,2,3,4,5])
//修改基本数据
let fn=()=>{
  //使用响应式数据
  count2.value++
}
//修改对象
let fn2 = () => {
  obj.value={name:'jack',age:'30'}
}
//修改数组
let fn3 = () => {
  arr.value = [6,7,8,9,10]
}
const msgs = "小乔"
const count = ref(0)
//假数据
let arr3=["酸菜鱼","鱼香肉丝","麻婆豆腐","青椒肉丝","宫保鸡丁","璧山兔","来凤鱼"]
let msg=ref(null)
let arr2=reactive([])
//监听ref定义的响应式数据
watch(msg,(newvalue,oldvalue)=>{
  arr3.forEach((el,index)=>{
    if(el.indexOf(newvalue)!=-1) {
      arr2.push(el)
      arr3.splice(index,1)
    }
  })
})
let flag = false

let time = ref(10)
let timer = setInterval(()=>{
  time.value--
},1000)
const data = ref("Hello World")
// 通过调用该事件完成修改数据的操作
const changeData = (value: string) => {
  data.value = value
}
watch(time,(newvalue)=>{
  if(newvalue<=0){
    clearInterval(timer)
    alert("时间到")
  }
})

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<style scoped>
input{
  height: 20px;
  border-radius: 10px;
}
.div2{
  background-color: antiquewhite;
  width: 200px;
}
p{
  cursor: pointer;
}
</style>

