<template>
  <div class="wrap">
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrap {
  position: relative;
  width: 100%;
  height: 200px;
  background-color: aqua;
}
.content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background-color: blueviolet;
}
</style>
