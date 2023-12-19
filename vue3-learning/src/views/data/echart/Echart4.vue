<template>
  <!-- 盛放echarts图表容器 -->
  <div ref="chartbox" class="chart"></div>
</template>

<script setup lang="ts">
import { onMounted,ref,Ref } from 'vue'
//导入echarts
import * as echarts from 'echarts'
//引入EChartsOption作为option类型
type EChartsOption = echarts.EChartsOption
//ref挂载节点
let chartbox: Ref<HTMLElement | null> = ref(null)

//声明配置option数据，各个参数请参阅官方文档
const option: EChartsOption  = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
}

onMounted(() => {
  //页面加载完成后加载echarts
  let myecharts = echarts.init(chartbox.value as HTMLElement)
  option && myecharts.setOption(option)

  //随页面动态缩放
  window.onresize = function () {
    myecharts.resize()
  }
})

</script>

<style scoped>
.chart{
  width: 100vw;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
