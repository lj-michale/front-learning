<template>
  <b><p>echarts多图表展示</p></b>
  <div class="main">
    <div class="q-pa-sm1">
      <div class="col col1" ref="chart1">

      </div>
      <div class="col col2" ref="chart2">

      </div>
      <div class="col col3"  ref="chart3">

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

const chart1 = ref();
let myChart: echarts.ECharts;

const chart2 = ref();
let myChart2: echarts.ECharts;

const chart3 = ref();
let myChart3: echarts.ECharts;

onMounted(() => {
  myChart = echarts.init(chart1.value);
  myChart.setOption(getChartSetOption());
  myChart2 = echarts.init(chart2.value);
  myChart2.setOption(getChartSetOption2());
  myChart3 = echarts.init(chart3.value);
  myChart3.setOption(getChartSetOption3());
  window.addEventListener('resize', resizeHandler);
});

const resizeHandler = () => {
  if (myChart) {
    myChart.resize()
  }
  if (myChart2) {
    myChart2.resize()
  }
  if (myChart3) {
    myChart3.resize()
  }
}

function getChartSetOption(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };

  return option;
}

function getChartSetOption2(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;

  option = {
    legend: {
      top: 'bottom'
    },

    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },

    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 150],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  };

  return option;
}

function getChartSetOption3(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;

  option = {
    title: {
      text: 'Stacked Line'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  return option;
}


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
