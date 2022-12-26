import { defineClientConfig } from '@vuepress/client'
import { registerMindMap, convertMenu, registerBubbleChart } from './register'
import { provide } from 'vue'
import { sidebar } from './configs'

export default defineClientConfig({
  async enhance({ app }) {
    // @ts-ignore
    if (!__VUEPRESS_SSR__) {
      await registerMindMap(app)
      await registerBubbleChart(app)
    }
  },
  setup() {
    provide('zhMenu', convertMenu(sidebar.zh))
    provide('enMenu', convertMenu(sidebar.en))
  },
  rootComponents: [],
})
