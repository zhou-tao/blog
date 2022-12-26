import type { App } from 'vue'
import * as echarts from 'echarts/core'
import { GraphChart, GraphSeriesOption } from 'echarts/charts'
import { DatasetComponent, DatasetComponentOption } from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use([
  GraphChart,
  DatasetComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export const echartsInstance = echarts

export type EChartsOption = echarts.ComposeOption<GraphSeriesOption | DatasetComponentOption>

export function initCharts (e: HTMLDivElement, option: EChartsOption) {
  const charts = echarts.init(e)
  charts.setOption(option)
}

export async function registerBubbleChart (app: App) {
  // @ts-ignore
  const bubbleChart = await import('../components/BubbleCharts.vue')
  app.component('bubbleChart', bubbleChart.default)
}