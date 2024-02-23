<template>
  <div class="w">
    <div class="c">自适应</div>
    <div class="l">定宽</div>
    <div class="r">定宽</div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.w {
  /* margin-left对应左边元素l的宽度，margin-right对应右边元素r的宽度 */
  margin-left: 400px;
  margin-right: 400px;
}
.l, .c, .r {
  height: 600px;
  float: left;
}
.l {
  width: 400px;
  background-color: aqua;
  position: relative;
  /* 为了让l元素从当前行移动到第一行同一位置*/
  margin-left: -100%;
  /* 移动到中间元素左侧正确位置 */
  left: -400px;
}
.c {
  width: 100%;
  background-color: blueviolet;
}
.r {
  width: 400px;
  background-color: brown;
  position: relative;
  /* 为了让l元素从当前行移动到上一行*/
  margin-left: -400px;
  right: -400px;
}
</style>
