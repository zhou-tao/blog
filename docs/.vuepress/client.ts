import { defineClientConfig } from '@vuepress/client'
import { provide } from 'vue'
import { sidebar } from './configs'
import 'vue3-mindmap/dist/style.css'

export default defineClientConfig({
  async enhance({ app }) {
    if (!__VUEPRESS_SSR__) {
      const mindmap = await import('vue3-mindmap')
      app.component('mindmap', mindmap.default)
    }
  },
  setup() {
    provide('zhMenu', convertMenu(sidebar.zh))
    provide('enMenu', convertMenu(sidebar.en))
  },
  rootComponents: [],
})

// 将树中 text 转换为 name
function convertMenu (arr) {
  return arr.map(({ text, children, ...rest }) => ({
    name: text,
    children: children ? convertMenu(children) : children,
    ...rest
  }))
}
