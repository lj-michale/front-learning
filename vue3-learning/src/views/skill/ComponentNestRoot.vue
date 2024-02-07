<template>
  <!-- 第三步：显示组件 -->
  <Header></Header>
  <Main></Main>
  <Aside></Aside>
</template>

<script>
import {ref,computed, watch, onMounted,reactive} from 'vue';
//第一步：引入组件
import Header from '@/views/skill/Header.vue'
import Main from '@/views/skill/Main.vue'
import Aside from '@/views/skill/Aside.vue'

//第二步：注入组件
export default{
  components:{
    Header,
    Main,
    Aside
  }
}
</script>

<style scoped>

</style>


