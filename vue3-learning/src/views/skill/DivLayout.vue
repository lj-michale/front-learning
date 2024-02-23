<template>
  <div class="l">定宽</div>
  <div class="r">自适应</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.l, .r {
  height: 600px;
}
.l {
  width: 400px;
  background-color: aqua;
  float: left;
}
.r {
  background-color: blueviolet;
  margin-left: 400px;
}

</style>
