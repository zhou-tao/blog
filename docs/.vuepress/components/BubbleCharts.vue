<template>
  <div id="bubble_charts" style="height:400px; margin-top: 24px" />
</template>

<script setup lang="ts">
import type { MindMapDataList } from '../register'
import { onMounted, inject } from 'vue'
import { echartsInstance, initCharts } from '../register/echarts'

const props = defineProps<{
  locale?: 'zh' | 'en'
}>()

const colorList = ['#0097e6', '#8c7ae6', '#e1b12c','#44bd32', '#40739e', '#9b59b6']

function genDataSource (data: MindMapDataList[]) {
  return data.map(({ name, children }) => ({
    name,
    sum: children?.length || 0,
    size: (children?.length || 0)*40
  }))
}

onMounted(() => {
  const dataSource = genDataSource(inject(`${props.locale}Menu`)!).filter(d => d.sum)
  initCharts(document.querySelector('#bubble_charts')!, {
    backgroundColor: 'transparent',
    animationDurationUpdate (idx: number) {
      return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    series: [
        {
          type: 'graph',
          layout: 'force',
          force: {
              repulsion: 200,
              edgeLength: 100
          },
          roam: true,
          // @ts-ignore
          data: dataSource.map((v, i) => ({
            name: `${v.name}\n\n${v.sum}`,
            symbolSize: v.size,
            draggable: true,
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 14,
                  color: '#ecf0f1'
                },
              },
            },
            itemStyle: {
              normal: {
                color: new echartsInstance.graphic.RadialGradient(0.5, 0.5, 1, [
                  {
                    offset: 0.2,
                    color: 'rgba(27, 54, 72, 0.2)',
                  },
                  {
                    offset: 0.8,
                    color: colorList[i%6],
                  },
                ]),
                opacity: 1,
                borderWidth: 2,
                borderColor: colorList[i%6],
                shadowBlur: 7,
                symbolOffset: 0.6,
                shadowColor: colorList[i%6]
              },
            }
          }))
        }
      ]
  })
})
</script>
