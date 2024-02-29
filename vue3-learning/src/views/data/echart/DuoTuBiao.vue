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
      <div class="col col4" ref="chart4">

      </div>
      <div class="col col5" ref="chart5">

      </div>
    </div>
    <div class="q-pa-sm2">
      <div class="col col1" ref="chart6">

      </div>
      <div class="col col2" ref="chart7">

      </div>
      <div class="col col3" ref="chart8">>

      </div>
      <div class="col col4" ref="chart9">>

      </div>
      <div class="col col5" ref="chart10">

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

const chart4 = ref();
let myChart4: echarts.ECharts;

const chart5 = ref();
let myChart5: echarts.ECharts;

const chart6 = ref();
let myChart6: echarts.ECharts;

const chart7 = ref();
let myChart7: echarts.ECharts;

const chart8 = ref();
let myChart8: echarts.ECharts;

const chart9 = ref();
let myChart9: echarts.ECharts;

const chart10 = ref();
let myChart10: echarts.ECharts;

onMounted(() => {
  myChart = echarts.init(chart1.value);
  myChart.setOption(getChartSetOption());
  myChart2 = echarts.init(chart2.value);
  myChart2.setOption(getChartSetOption2());
  myChart3 = echarts.init(chart3.value);
  myChart3.setOption(getChartSetOption3());
  myChart4 = echarts.init(chart4.value);
  myChart4.setOption(getChartSetOption4());
  myChart5 = echarts.init(chart5.value);
  myChart5.setOption(getChartSetOption5());
  myChart6 = echarts.init(chart6.value);
  myChart6.setOption(getChartSetOption6());
  myChart7 = echarts.init(chart7.value);
  myChart7.setOption(getChartSetOption7());
  myChart8 = echarts.init(chart8.value);
  myChart8.setOption(getChartSetOption8());
  myChart9 = echarts.init(chart9.value);
  myChart9.setOption(getChartSetOption9());
  myChart10 = echarts.init(chart10.value);
  myChart10.setOption(getChartSetOption10());
  window.addEventListener('resize', resizeHandler);
});

const resizeHandler = () => {
  if(myChart) {
    myChart.resize()
  }
  if(myChart2) {
    myChart2.resize()
  }
  if(myChart3) {
    myChart3.resize()
  }
  if(myChart4) {
    myChart4.resize()
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
function getChartSetOption4(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;

  option = {
    title: {
      text: 'Stacked Area Chart'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  return option;
}

let base = +new Date(1968, 9, 3);
let oneDay = 24 * 3600 * 1000;
let date = [];
let data = [Math.random() * 300];
for (let i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
  data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

function getChartSetOption5(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;

  option =   {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    title: {
      left: 'center',
      text: 'Large Area Chart'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: date
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 0,
        end: 10
      }
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: data
      }
    ]
  };

  return option;
}

// There should not be negative values in rawData
const rawData = [
  [100, 302, 301, 334, 390, 330, 320],
  [320, 132, 101, 134, 90, 230, 210],
  [220, 182, 191, 234, 290, 330, 310],
  [150, 212, 201, 154, 190, 330, 410],
  [820, 832, 901, 934, 1290, 1330, 1320]
];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50
};
const series = [
  'Direct',
  'Mail Ad',
  'Affiliate Ad',
  'Video Ad',
  'Search Engine'
].map((name, sid) => {
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: '60%',
    label: {
      show: true,
      formatter: (params) => Math.round(params.value * 1000) / 10 + '%'
    },
    data: rawData[sid].map((d, did) =>
      totalData[did] <= 0 ? 0 : d / totalData[did]
    )
  };
});

function getChartSetOption6(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;

  option =   {
    legend: {
      selectedMode: false
    },
    grid,
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    series
  };

  return option;
}

function getChartSetOption7(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;
  option = {
    backgroundColor: '#fff',
    title: {
      subtext: 'Data From lisachristina1234 on GitHub',
      left: 'center'
    },
    series: [
      {
        type: 'sankey',
        left: 50.0,
        top: 20.0,
        right: 150.0,
        bottom: 25.0,
        data: [
          {
            name: 'Werne',
            itemStyle: {
              color: '#f18bbf',
              borderColor: '#f18bbf'
            }
          },
          {
            name: 'Duesseldorf',
            itemStyle: {
              color: '#0078D7',
              borderColor: '#0078D7'
            }
          },
          {
            name: 'Cambridge',
            itemStyle: {
              color: '#3891A7',
              borderColor: '#3891A7'
            }
          },
          {
            name: 'Colma',
            itemStyle: {
              color: '#0037DA',
              borderColor: '#0037DA'
            }
          },
          {
            name: 'W. York',
            itemStyle: {
              color: '#C0BEAF',
              borderColor: '#C0BEAF'
            }
          },
          {
            name: 'Frankfurt am Main',
            itemStyle: {
              color: '#EA005E',
              borderColor: '#EA005E'
            }
          },
          {
            name: 'Metz',
            itemStyle: {
              color: '#D13438',
              borderColor: '#D13438'
            }
          },
          {
            name: 'Orleans',
            itemStyle: {
              color: '#567C73',
              borderColor: '#567C73'
            }
          },
          {
            name: 'Saint-Denis',
            itemStyle: {
              color: '#9ed566',
              borderColor: '#9ed566'
            }
          },
          {
            name: 'Hof',
            itemStyle: {
              color: '#2BCC7F',
              borderColor: '#2BCC7F'
            }
          },
          {
            name: 'Cliffside',
            itemStyle: {
              color: '#809B48',
              borderColor: '#809B48'
            }
          },
          {
            name: 'Leeds',
            itemStyle: {
              color: '#9B2D1F',
              borderColor: '#9B2D1F'
            }
          },
          {
            name: 'Victoria',
            itemStyle: {
              color: '#604878',
              borderColor: '#604878'
            }
          },
          {
            name: 'Erlangen',
            itemStyle: {
              color: '#A5644E',
              borderColor: '#A5644E'
            }
          },
          {
            name: 'Saint Germain en Laye',
            itemStyle: {
              color: '#2D3F3A',
              borderColor: '#2D3F3A'
            }
          },
          {
            name: 'Roissy en Brie',
            itemStyle: {
              color: '#761721',
              borderColor: '#761721'
            }
          },
          {
            name: 'Wokingham',
            itemStyle: {
              color: '#B1BADD',
              borderColor: '#B1BADD'
            }
          },
          {
            name: 'Runcorn',
            itemStyle: {
              color: '#B0CCB0',
              borderColor: '#B0CCB0'
            }
          },
          {
            name: 'Newton',
            itemStyle: {
              color: '#8164A3',
              borderColor: '#8164A3'
            }
          },
          {
            name: 'Morangis',
            itemStyle: {
              color: '#8E562E',
              borderColor: '#8E562E'
            }
          },
          {
            name: 'Metchosin',
            itemStyle: {
              color: '#C1504D',
              borderColor: '#C1504D'
            }
          },
          {
            name: 'Kirkby',
            itemStyle: {
              color: '#CCAF0A',
              borderColor: '#CCAF0A'
            }
          },
          {
            name: 'London',
            itemStyle: {
              color: '#956251',
              borderColor: '#956251'
            }
          },
          {
            name: 'Offenbach',
            itemStyle: {
              color: '#C17529',
              borderColor: '#C17529'
            }
          },
          {
            name: 'Warrington',
            itemStyle: {
              color: '#CEC597',
              borderColor: '#CEC597'
            }
          },
          {
            name: 'Vancouver',
            itemStyle: {
              color: '#9F2936',
              borderColor: '#9F2936'
            }
          },
          {
            name: 'SuperiorCard',
            itemStyle: {
              color: 'rgba(128,155,72,255)',
              borderColor: 'rgba(128,155,72,255)'
            }
          },
          {
            name: 'Lille',
            itemStyle: {
              color: '#ac7430',
              borderColor: '#ac7430'
            }
          },
          {
            name: 'Hamburg',
            itemStyle: {
              color: '#00BCF2',
              borderColor: '#00BCF2'
            }
          },
          {
            name: 'Langley',
            itemStyle: {
              color: '#CD7B38',
              borderColor: '#CD7B38'
            }
          },
          {
            name: 'Les Ulis',
            itemStyle: {
              color: '#424242',
              borderColor: '#424242'
            }
          },
          {
            name: 'Saarbrücken',
            itemStyle: {
              color: '#f63185',
              borderColor: '#f63185'
            }
          },
          {
            name: 'N. Vancouver',
            itemStyle: {
              color: '#9CBC59',
              borderColor: '#9CBC59'
            }
          },
          {
            name: 'Chalk Riber',
            itemStyle: {
              color: '#4F4BD9',
              borderColor: '#4F4BD9'
            }
          },
          {
            name: 'Esher-Molesey',
            itemStyle: {
              color: '#3EC562',
              borderColor: '#3EC562'
            }
          },
          {
            name: 'Chatou',
            itemStyle: {
              color: '#F06F2E',
              borderColor: '#F06F2E'
            }
          },
          {
            name: 'Hannover',
            itemStyle: {
              color: '#C3986D',
              borderColor: '#C3986D'
            }
          },
          {
            name: 'Roncq',
            itemStyle: {
              color: '#4D291C',
              borderColor: '#4D291C'
            }
          },
          {
            name: 'Ingolstadt',
            itemStyle: {
              color: '#009c7a',
              borderColor: '#009c7a'
            }
          },
          {
            name: 'Drancy',
            itemStyle: {
              color: '#986F0B',
              borderColor: '#986F0B'
            }
          },
          {
            name: 'Langford',
            itemStyle: {
              color: '#3C8EA4',
              borderColor: '#3C8EA4'
            }
          },
          {
            name: 'Lebanon',
            itemStyle: {
              color: '#4F82BE',
              borderColor: '#4F82BE'
            }
          },
          {
            name: 'Maidenhead',
            itemStyle: {
              color: '#D38017',
              borderColor: '#D38017'
            }
          },
          {
            name: 'Stoke-on-Trent',
            itemStyle: {
              color: '#A8CDD7',
              borderColor: '#A8CDD7'
            }
          },
          {
            name: 'Peterborough',
            itemStyle: {
              color: '#7A072D',
              borderColor: '#7A072D'
            }
          },
          {
            name: 'Suresnes',
            itemStyle: {
              color: '#859599',
              borderColor: '#859599'
            }
          },
          {
            name: 'Versailles',
            itemStyle: {
              color: '#84AA33',
              borderColor: '#84AA33'
            }
          },
          {
            name: 'Neunkirchen',
            itemStyle: {
              color: '#ff8b67',
              borderColor: '#ff8b67'
            }
          },
          {
            name: 'Vista',
            itemStyle: {
              color: 'rgba(106,82,134,255)',
              borderColor: 'rgba(106,82,134,255)'
            }
          },
          {
            name: 'Westminster',
            itemStyle: {
              color: '#1B587C',
              borderColor: '#1B587C'
            }
          },
          {
            name: 'Kiel',
            itemStyle: {
              color: '#A19574',
              borderColor: '#A19574'
            }
          },
          {
            name: 'Newcastle upon Tyne',
            itemStyle: {
              color: '#918485',
              borderColor: '#918485'
            }
          },
          {
            name: 'Oxon',
            itemStyle: {
              color: '#FFA98C',
              borderColor: '#FFA98C'
            }
          },
          {
            name: 'West Sussex',
            itemStyle: {
              color: '#B0E3C0',
              borderColor: '#B0E3C0'
            }
          },
          {
            name: 'Oak Bay',
            itemStyle: {
              color: '#4BADC7',
              borderColor: '#4BADC7'
            }
          },
          {
            name: 'Milton Keynes',
            itemStyle: {
              color: '#BA144C',
              borderColor: '#BA144C'
            }
          },
          {
            name: 'Eilenburg',
            itemStyle: {
              color: '#F0A22E',
              borderColor: '#F0A22E'
            }
          },
          {
            name: 'ColonialVoice',
            itemStyle: {
              color: 'rgba(64,105,157,255)',
              borderColor: 'rgba(64,105,157,255)'
            }
          },
          {
            name: 'Liverpool',
            itemStyle: {
              color: '#A28E6A',
              borderColor: '#A28E6A'
            }
          },
          {
            name: 'Calgary',
            itemStyle: {
              color: '#9F413E',
              borderColor: '#9F413E'
            }
          },
          {
            name: 'CAD',
            itemStyle: {
              color: '#40699D',
              borderColor: '#40699D'
            }
          },
          {
            name: 'Paris La Defense',
            itemStyle: {
              color: '#989391',
              borderColor: '#989391'
            }
          },
          {
            name: "Villeneuve-d'Ascq",
            itemStyle: {
              color: '#886CE4',
              borderColor: '#886CE4'
            }
          },
          {
            name: 'Gloucestershire',
            itemStyle: {
              color: '#964305',
              borderColor: '#964305'
            }
          },
          {
            name: 'Gateshead',
            itemStyle: {
              color: '#485FB5',
              borderColor: '#485FB5'
            }
          },
          {
            name: 'Salzgitter',
            itemStyle: {
              color: '#87a0c7',
              borderColor: '#87a0c7'
            }
          },
          {
            name: 'Woolston',
            itemStyle: {
              color: '#FFE2C5',
              borderColor: '#FFE2C5'
            }
          },
          {
            name: 'Frankfurt',
            itemStyle: {
              color: '#40699D',
              borderColor: '#40699D'
            }
          },
          {
            name: 'Münster',
            itemStyle: {
              color: '#7e7eb2',
              borderColor: '#7e7eb2'
            }
          },
          {
            name: 'York',
            itemStyle: {
              color: '#587C7D',
              borderColor: '#587C7D'
            }
          },
          {
            name: 'High Wycombe',
            itemStyle: {
              color: '#F07F09',
              borderColor: '#F07F09'
            }
          },
          {
            name: 'Stuttgart',
            itemStyle: {
              color: '#E3008C',
              borderColor: '#E3008C'
            }
          },
          {
            name: 'Sooke',
            itemStyle: {
              color: '#4E8542',
              borderColor: '#4E8542'
            }
          },
          {
            name: 'Essen',
            itemStyle: {
              color: '#B58B80',
              borderColor: '#B58B80'
            }
          },
          {
            name: 'München',
            itemStyle: {
              color: '#4dc0a6',
              borderColor: '#4dc0a6'
            }
          },
          {
            name: 'Haney',
            itemStyle: {
              color: '#6A5286',
              borderColor: '#6A5286'
            }
          },
          {
            name: 'Port Hammond',
            itemStyle: {
              color: '#F89746',
              borderColor: '#F89746'
            }
          },
          {
            name: 'Saint Ouen',
            itemStyle: {
              color: '#744DA9',
              borderColor: '#744DA9'
            }
          },
          {
            name: 'Watford',
            itemStyle: {
              color: '#E8B7B7',
              borderColor: '#E8B7B7'
            }
          },
          {
            name: 'GBP',
            itemStyle: {
              color: '#C32D2E',
              borderColor: '#C32D2E'
            }
          },
          {
            name: 'Paderborn',
            itemStyle: {
              color: '#F0C42E',
              borderColor: '#F0C42E'
            }
          },
          {
            name: 'Dunkerque',
            itemStyle: {
              color: '#881798',
              borderColor: '#881798'
            }
          },
          {
            name: 'Colomiers',
            itemStyle: {
              color: '#efa835',
              borderColor: '#efa835'
            }
          },
          {
            name: 'Oxford',
            itemStyle: {
              color: '#D8B25C',
              borderColor: '#D8B25C'
            }
          },
          {
            name: 'Bury',
            itemStyle: {
              color: '#FEB80A',
              borderColor: '#FEB80A'
            }
          },
          {
            name: 'Royal Oak',
            itemStyle: {
              color: '#009DD9',
              borderColor: '#009DD9'
            }
          },
          {
            name: 'Shawnee',
            itemStyle: {
              color: '#F07F09',
              borderColor: '#F07F09'
            }
          },
          {
            name: 'Lancaster',
            itemStyle: {
              color: '#D34817',
              borderColor: '#D34817'
            }
          },
          {
            name: 'DEM',
            itemStyle: {
              color: '#4E342E',
              borderColor: '#4E342E'
            }
          },
          {
            name: 'Grevenbroich',
            itemStyle: {
              color: '#FFA836',
              borderColor: '#FFA836'
            }
          },
          {
            name: 'Distinguish',
            itemStyle: {
              color: 'rgba(159,65,62,255)',
              borderColor: 'rgba(159,65,62,255)'
            }
          },
          {
            name: 'Cheltenham',
            itemStyle: {
              color: '#FF6551',
              borderColor: '#FF6551'
            }
          },
          {
            name: 'Reading',
            itemStyle: {
              color: '#72A376',
              borderColor: '#72A376'
            }
          },
          {
            name: 'Pantin',
            itemStyle: {
              color: '#69797E',
              borderColor: '#69797E'
            }
          },
          {
            name: 'Kassel',
            itemStyle: {
              color: '#e65e20',
              borderColor: '#e65e20'
            }
          },
          {
            name: 'Orly',
            itemStyle: {
              color: '#6E6A68',
              borderColor: '#6E6A68'
            }
          },
          {
            name: 'FRF',
            itemStyle: {
              color: '#5ba33b',
              borderColor: '#5ba33b'
            }
          },
          {
            name: 'Cergy',
            itemStyle: {
              color: '#B4009E',
              borderColor: '#B4009E'
            }
          },
          {
            name: 'Paris',
            itemStyle: {
              color: '#666666',
              borderColor: '#666666'
            }
          }
        ],
        links: [
          {
            source: 'FRF',
            target: 'Colomiers',
            value: 357.8399963378906
          },
          {
            source: 'SuperiorCard',
            target: 'FRF',
            value: 894.5999908447266
          },
          {
            source: 'DEM',
            target: 'München',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Reading',
            value: 188.52999836206436
          },
          {
            source: 'CAD',
            target: 'Shawnee',
            value: 2346.919983509928
          },
          {
            source: 'GBP',
            target: 'Kirkby',
            value: 753.4000000059605
          },
          {
            source: 'FRF',
            target: 'Roncq',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Peterborough',
            value: 999.159998036921
          },
          {
            source: 'DEM',
            target: 'Frankfurt am Main',
            value: 536.7599945068359
          },
          {
            source: 'GBP',
            target: 'Oxford',
            value: 1831.3799968883395
          },
          {
            source: 'Vista',
            target: 'FRF',
            value: 1789.1999816894531
          },
          {
            source: 'CAD',
            target: 'Langley',
            value: 1274.8199949413538
          },
          {
            source: 'DEM',
            target: 'Offenbach',
            value: 357.8399963378906
          },
          {
            source: 'FRF',
            target: "Villeneuve-d'Ascq",
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Dunkerque',
            value: 357.8399963378906
          },
          {
            source: 'DEM',
            target: 'Eilenburg',
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Paris',
            value: 1073.5199890136719
          },
          {
            source: 'GBP',
            target: 'Maidenhead',
            value: 549.8400026857853
          },
          {
            source: 'CAD',
            target: 'Sooke',
            value: 1764.499989286065
          },
          {
            source: 'CAD',
            target: 'Vancouver',
            value: 1528.580000281334
          },
          {
            source: 'DEM',
            target: 'Hamburg',
            value: 357.8399963378906
          },
          {
            source: 'GBP',
            target: 'London',
            value: 8619.309983983636
          },
          {
            source: 'CAD',
            target: 'Oak Bay',
            value: 1565.109990529716
          },
          {
            source: 'Distinguish',
            target: 'FRF',
            value: 2683.7999725341797
          },
          {
            source: 'DEM',
            target: 'Neunkirchen',
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Cergy',
            value: 178.9199981689453
          },
          {
            source: 'DEM',
            target: 'Hof',
            value: 357.8399963378906
          },
          {
            source: 'FRF',
            target: 'Paris La Defense',
            value: 178.9199981689453
          },
          {
            source: 'CAD',
            target: 'Westminster',
            value: 1149.7999994903803
          },
          {
            source: 'DEM',
            target: 'Ingolstadt',
            value: 536.7599945068359
          },
          {
            source: 'GBP',
            target: 'Saint Ouen',
            value: 0.5899999737739563
          },
          {
            source: 'FRF',
            target: 'Lille',
            value: 357.8399963378906
          },
          {
            source: 'GBP',
            target: 'Leeds',
            value: 1356.6899970173836
          },
          {
            source: 'FRF',
            target: 'Morangis',
            value: 357.8399963378906
          },
          {
            source: 'GBP',
            target: 'Orly',
            value: 0.5899999737739563
          },
          {
            source: 'SuperiorCard',
            target: 'DEM',
            value: 1431.3599853515625
          },
          {
            source: 'Vista',
            target: 'CAD',
            value: 5369.929964579642
          },
          {
            source: 'GBP',
            target: 'Paris',
            value: 0.6399999856948853
          },
          {
            source: 'GBP',
            target: 'Liverpool',
            value: 857.1999968588352
          },
          {
            source: 'GBP',
            target: 'Stoke-on-Trent',
            value: 1131.7099939212203
          },
          {
            source: 'Distinguish',
            target: 'DEM',
            value: 2504.8799743652344
          },
          {
            source: 'CAD',
            target: 'Langford',
            value: 2343.4599857851863
          },
          {
            source: 'DEM',
            target: 'Kassel',
            value: 536.7599945068359
          },
          {
            source: 'GBP',
            target: 'High Wycombe',
            value: 216.83999809622765
          },
          {
            source: 'CAD',
            target: 'Port Hammond',
            value: 1711.1399984136224
          },
          {
            source: 'DEM',
            target: 'Duesseldorf',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Gloucestershire',
            value: 422.28999888151884
          },
          {
            source: 'Distinguish',
            target: 'GBP',
            value: 10384.949975416064
          },
          {
            source: 'FRF',
            target: 'Roissy en Brie',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'West Sussex',
            value: 592.1700052022934
          },
          {
            source: 'CAD',
            target: 'Cliffside',
            value: 2906.2699892893434
          },
          {
            source: 'GBP',
            target: 'Newcastle upon Tyne',
            value: 1448.2899911925197
          },
          {
            source: 'GBP',
            target: 'Runcorn',
            value: 1120.4800013303757
          },
          {
            source: 'GBP',
            target: 'W. York',
            value: 612.1199932694435
          },
          {
            source: 'DEM',
            target: 'Kiel',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Woolston',
            value: 833.3199937939644
          },
          {
            source: 'Distinguish',
            target: 'CAD',
            value: 6950.059956334531
          },
          {
            source: 'DEM',
            target: 'Frankfurt',
            value: 715.6799926757812
          },
          {
            source: 'CAD',
            target: 'Colma',
            value: 0.2199999988079071
          },
          {
            source: 'DEM',
            target: 'Essen',
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Chatou',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Cheltenham',
            value: 573.0499979257584
          },
          {
            source: 'SuperiorCard',
            target: 'GBP',
            value: 8228.39999615401
          },
          {
            source: 'CAD',
            target: 'Haney',
            value: 2310.4499812424183
          },
          {
            source: 'FRF',
            target: 'Saint Ouen',
            value: 178.9199981689453
          },
          {
            source: 'CAD',
            target: 'Chalk Riber',
            value: 0.9200000166893005
          },
          {
            source: 'DEM',
            target: 'Salzgitter',
            value: 178.9199981689453
          },
          {
            source: 'ColonialVoice',
            target: 'FRF',
            value: 1610.2799835205078
          },
          {
            source: 'DEM',
            target: 'Stuttgart',
            value: 357.8399963378906
          },
          {
            source: 'FRF',
            target: 'Saint-Denis',
            value: 178.9199981689453
          },
          {
            source: 'CAD',
            target: 'Royal Oak',
            value: 2128.459992274642
          },
          {
            source: 'FRF',
            target: 'Les Ulis',
            value: 715.6799926757812
          },
          {
            source: 'FRF',
            target: 'Drancy',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Esher-Molesey',
            value: 911.4700058028102
          },
          {
            source: 'SuperiorCard',
            target: 'CAD',
            value: 7388.099954992533
          },
          {
            source: 'GBP',
            target: 'Bury',
            value: 903.9400005489588
          },
          {
            source: 'GBP',
            target: 'Watford',
            value: 1326.5300009772182
          },
          {
            source: 'CAD',
            target: 'Victoria',
            value: 827.3899968340993
          },
          {
            source: 'DEM',
            target: 'Saarbrücken',
            value: 178.9199981689453
          },
          {
            source: 'GBP',
            target: 'Lancaster',
            value: 685.6899967193604
          },
          {
            source: 'FRF',
            target: 'Pantin',
            value: 178.9199981689453
          },
          {
            source: 'CAD',
            target: 'Newton',
            value: 1781.909985654056
          },
          {
            source: 'GBP',
            target: 'Oxon',
            value: 493.6499986946583
          },
          {
            source: 'CAD',
            target: 'Calgary',
            value: 361.3899962902069
          },
          {
            source: 'DEM',
            target: 'Münster',
            value: 715.6799926757812
          },
          {
            source: 'DEM',
            target: 'Grevenbroich',
            value: 536.7599945068359
          },
          {
            source: 'DEM',
            target: 'Paderborn',
            value: 357.8399963378906
          },
          {
            source: 'GBP',
            target: 'York',
            value: 3172.9999914616346
          },
          {
            source: 'CAD',
            target: 'Metchosin',
            value: 1750.7899813987315
          },
          {
            source: 'FRF',
            target: 'Suresnes',
            value: 357.8399963378906
          },
          {
            source: 'FRF',
            target: 'Versailles',
            value: 894.5999908447266
          },
          {
            source: 'DEM',
            target: 'Erlangen',
            value: 536.7599945068359
          },
          {
            source: 'CAD',
            target: 'Lebanon',
            value: 0.8700000047683716
          },
          {
            source: 'GBP',
            target: 'Wokingham',
            value: 812.6600027084351
          },
          {
            source: 'GBP',
            target: 'Cambridge',
            value: 500.36999743431807
          },
          {
            source: 'ColonialVoice',
            target: 'GBP',
            value: 8040.7799860313535
          },
          {
            source: 'FRF',
            target: 'Saint Germain en Laye',
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Metz',
            value: 178.9199981689453
          },
          {
            source: 'FRF',
            target: 'Orleans',
            value: 357.8399963378906
          },
          {
            source: 'GBP',
            target: 'Milton Keynes',
            value: 1648.2200061008334
          },
          {
            source: 'GBP',
            target: 'Warrington',
            value: 2162.8300000429153
          },
          {
            source: 'CAD',
            target: 'N. Vancouver',
            value: 1862.4599857926369
          },
          {
            source: 'DEM',
            target: 'Hannover',
            value: 178.9199981689453
          },
          {
            source: 'Vista',
            target: 'GBP',
            value: 9497.539981640875
          },
          {
            source: 'DEM',
            target: 'Werne',
            value: 178.9199981689453
          },
          {
            source: 'ColonialVoice',
            target: 'DEM',
            value: 1789.1999816894531
          },
          {
            source: 'ColonialVoice',
            target: 'CAD',
            value: 7907.36997512728
          },
          {
            source: 'GBP',
            target: 'Gateshead',
            value: 1425.7099913656712
          },
          {
            source: 'Vista',
            target: 'DEM',
            value: 1968.1199798583984
          }
        ],
        lineStyle: {
          color: 'source',
          curveness: 0.5
        },
        itemStyle: {
          color: '#1f77b4',
          borderColor: '#1f77b4'
        },
        label: {
          color: 'rgba(0,0,0,0.7)',
          fontFamily: 'Arial',
          fontSize: 10
        }
      }
    ],
    tooltip: {
      trigger: 'item'
    }
  };

  return option;
}

const colors = ['#5470C6', '#91CC75', '#EE6666'];
function getChartSetOption8(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;
  option = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {
      right: '20%'
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Evaporation',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '温度',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[2]
          }
        },
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ]
      },
      {
        name: 'Precipitation',
        type: 'bar',
        yAxisIndex: 1,
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };

  return option;
}

const data9 = [
  [5000, 10000, 6785.71],
  [4000, 10000, 6825],
  [3000, 6500, 4463.33],
  [2500, 5600, 3793.83],
  [2000, 4000, 3060],
  [2000, 4000, 3222.33],
  [2500, 4000, 3133.33],
  [1800, 4000, 3100],
  [2000, 3500, 2750],
  [2000, 3000, 2500],
  [1800, 3000, 2433.33],
  [2000, 2700, 2375],
  [1500, 2800, 2150],
  [1500, 2300, 2100],
  [1600, 3500, 2057.14],
  [1500, 2600, 2037.5],
  [1500, 2417.54, 1905.85],
  [1500, 2000, 1775],
  [1500, 1800, 1650]
];
// prettier-ignore
const cities = ['北京', '上海', '深圳', '广州', '苏州', '杭州', '南京', '福州', '青岛', '济南', '长春', '大连', '温州', '郑州', '武汉', '成都', '东莞', '沈阳', '烟台'];
const barHeight = 50;
function getChartSetOption9(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;
  option =  {
    title: {
      text: 'How expensive is it to rent an apartment in China?',
      subtext: 'Data from https://www.numbeo.com'
    },
    legend: {
      show: true,
      top: 'bottom',
      data: ['Range', 'Average']
    },
    grid: {
      top: 100
    },
    angleAxis: {
      type: 'category',
      data: cities
    },
    tooltip: {
      show: true,
      formatter: function (params) {
        const id = params.dataIndex;
        return (
          cities[id] +
          '<br>Lowest：' +
          data[id][0] +
          '<br>Highest：' +
          data[id][1] +
          '<br>Average：' +
          data[id][2]
        );
      }
    },
    radiusAxis: {},
    polar: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: 'transparent'
        },
        data: data9.map(function (d) {
          return d[0];
        }),
        coordinateSystem: 'polar',
        stack: 'Min Max',
        silent: true
      },
      {
        type: 'bar',
        data: data9.map(function (d) {
          return d[1] - d[0];
        }),
        coordinateSystem: 'polar',
        name: 'Range',
        stack: 'Min Max'
      },
      {
        type: 'bar',
        itemStyle: {
          color: 'transparent'
        },
        data: data9.map(function (d) {
          return d[2] - barHeight;
        }),
        coordinateSystem: 'polar',
        stack: 'Average',
        silent: true,
        z: 10
      },
      {
        type: 'bar',
        data: data9.map(function (d) {
          return barHeight * 2;
        }),
        coordinateSystem: 'polar',
        name: 'Average',
        stack: 'Average',
        barGap: '-100%',
        z: 10
      }
    ]
  };

  return option;
}

const data10 = genData(50);

function getChartSetOption10(){
  type EChartsOption = echarts.EChartsOption;
  var option: EChartsOption;
  option =   {
    title: {
      text: '同名数量统计',
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: data10.legendData
    },
    series: [
      {
        name: '姓名',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: data10.seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return option;
}

function genData(count) {
  // prettier-ignore
  const nameList = [
    '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
  ];
  const legendData = [];
  const seriesData = [];
  for (var i = 0; i < count; i++) {
    var name =
      Math.random() > 0.65
        ? makeWord(4, 1) + '·' + makeWord(3, 0)
        : makeWord(2, 1);
    legendData.push(name);
    seriesData.push({
      name: name,
      value: Math.round(Math.random() * 100000)
    });
  }
  return {
    legendData: legendData,
    seriesData: seriesData
  };
  function makeWord(max, min) {
    const nameLen = Math.ceil(Math.random() * max + min);
    const name = [];
    for (var i = 0; i < nameLen; i++) {
      name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
    }
    return name.join('');
  }
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
