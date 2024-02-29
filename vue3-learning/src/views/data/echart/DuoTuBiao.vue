<template>
  <b><p>echarts多图表展示</p></b>
  <div class="main">
    <div class="q-pa-sm1">
      <div class="col col1">

      </div>
      <div class="col col2">

      </div>
      <div class="col col3">

      </div>
      <div class="col col4">

      </div>
      <div class="col col5">

      </div>
    </div>
    <div class="q-pa-sm2">
      <div class="col col1">

      </div>
      <div class="col col2">

      </div>
      <div class="col col3">

      </div>
      <div class="col col4">

      </div>
      <div class="col col5">

      </div>
    </div>
    <div class="q-pa-sm3">
      <div class="col col1">

      </div>
      <div class="col col2">

      </div>
      <div class="col col3">

      </div>
      <div class="col col4">

      </div>
      <div class="col col5">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';
import { ref,onMounted} from 'vue';

</script>

<style scoped>
.q-pa-sm1{
  width: auto;
  height: 500px;
  background: lightgray;
}
.q-pa-sm1 .col {
  float: left;
  width: 19.85%;
  height: 500px;
  margin: 1px;
}
.q-pa-sm1 .col1 {
  background-color: beige;
}
.q-pa-sm1 .col2 {
  background-color: beige;
}
.q-pa-sm1 .col3 {
  background-color: beige;
}
.q-pa-sm1 .col4 {
  background-color: beige;
}
.q-pa-sm1 .col5 {
  background-color: beige;
}

.q-pa-sm2{
  width: auto;
  height: 500px;
  background: white;
}
.q-pa-sm2 .col {
  float: left;
  width: 19.85%;
  height: 500px;
  margin: 1px;
}
.q-pa-sm2 .col1 {
  background-color: lightcyan;
}
.q-pa-sm2 .col2 {
  background-color: lightcyan;
}
.q-pa-sm2 .col3 {
  background-color: lightcyan;
}
.q-pa-sm2 .col4 {
  background-color: lightcyan;
}
.q-pa-sm2 .col5 {
  background-color: lightcyan;
}

.q-pa-sm3{
  width: auto;
  height: 500px;
  background: lightgray;
}
.q-pa-sm3 .col {
  float: left;
  width: 19.85%;
  height: 500px;
  margin: 1px;
}
.q-pa-sm3 .col1 {
  background-color: floralwhite;
}
.q-pa-sm3 .col2 {
  background-color: floralwhite;
}
.q-pa-sm3 .col3 {
  background-color: floralwhite;
}
.q-pa-sm3 .col4 {
  background-color: floralwhite;
}
.q-pa-sm3 .col5 {
  background-color: floralwhite;
}


</style>
