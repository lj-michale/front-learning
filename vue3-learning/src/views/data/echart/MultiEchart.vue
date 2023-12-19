<template>
  <div class="box">
    <h1>mutl_echart</h1>
    <hr />
    <div class="container">
      <Echart1></Echart1>
      <Echart2></Echart2>
      <Echart3></Echart3>
      <Echart4></Echart4>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Echart1 from "@/views/data/echart/Echart1.vue";
import Echart2 from "@/views/data/echart/Echart2.vue";
import Echart3 from "@/views/data/echart/Echart3.vue";
import Echart4 from "@/views/data/echart/Echart4.vue";

</script>

<style scoped>
.container {
  display: flex;
}
</style>
