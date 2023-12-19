
import * as echarts from 'echarts/core'
import { TooltipComponent, TooltipComponentOption, GridComponent, GridComponentOption } from 'echarts/components'
import { LineChart, BarSeriesOption } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([TooltipComponent, GridComponent, LineChart, CanvasRenderer])
type EChartsOption = echarts.ComposeOption<TooltipComponentOption | GridComponentOption | BarSeriesOption>

let option: EChartsOption

export const GMVInitLineChart = (chartDom: HTMLElement | undefined) => {
    const myChart = echarts.init(chartDom as HTMLElement)

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
        },
        yAxis: {
            type: 'value',
            show: false
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line'
            }
        ],
        color: '#409eff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                axis: 'auto',
                label: {
                    backgroundColor: '#409eff'
                }
            }
        }
    }

    // eslint-disable-next-line no-unused-expressions
    option && myChart.setOption(option)
}

export default { GMVInitLineChart }