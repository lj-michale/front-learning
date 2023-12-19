<template>
  <div ref="main" style="width: 100%; height: 400px"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
//按需引入 echarts
import * as echarts from "echarts";

const main = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
onMounted(
    () => {
      init()
    }
)
function init() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main.value);
  // 指定图表的配置项和数据
  var option = {
    // 标题
    title: {
      text: '扇形图',
      left: 'center',
      top: 20,
      textStyle: {
        color: 'black'
      }
    },
    tooltip: {},
    legend: {
      data: ['销量']
    },
   // x轴要显示的值
    xAxis: {
      data: ["Java", "C", "Php", "Go", "Python", "JavaScript"]
    },
    yAxis: {},
    // bar 柱状条形图，line折线，pie饼图....
    series: [{
      name: '排名占比',
      type: 'pie',
      data: [50, 40, 36, 30, 48, 38]
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
</script>

<style scoped>

</style>
