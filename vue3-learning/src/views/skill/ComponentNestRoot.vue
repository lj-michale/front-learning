<template>
  <Header></Header>
  <Main></Main>
  <Aside></Aside>
</template>

<script>
import {ref,computed, watch, onMounted,reactive} from 'vue';
import Header from '@/views/skill/Header.vue'
import Main from '@/views/skill/Main.vue'
import Aside from '@/views/skill/Aside.vue'

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


