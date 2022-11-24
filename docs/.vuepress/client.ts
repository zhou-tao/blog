import { defineClientConfig } from '@vuepress/client'
import type { SidebarItem } from '@vuepress/theme-default'
import { provide } from 'vue'
import { sidebar } from './configs'
import 'vue3-mindmap/dist/style.css'

export default defineClientConfig({
  async enhance({ app }) {
    // @ts-ignore
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

interface MindMapDataList extends Omit<SidebarItem, 'text'> {
  name: string
}

// 将树中 text 转换为 name
function convertMenu (arr: any[]): MindMapDataList[] {
  return arr.map(({ text, children, ...rest }) => ({
    name: text,
    children: children ? convertMenu(children) : children,
    ...rest
  }))
}
