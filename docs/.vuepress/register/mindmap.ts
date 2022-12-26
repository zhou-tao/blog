import type { App } from 'vue'
import type { SidebarItem } from '@vuepress/theme-default'
import 'vue3-mindmap/dist/style.css'

export async function registerMindMap (app: App) {
  const mindmap = await import('vue3-mindmap')
  app.component('mindmap', mindmap.default)
}

export interface MindMapDataList extends Omit<SidebarItem, 'text'> {
  name: string,
  [key: string]: any
}

// 将树中 text 转换为 name
export function convertMenu (arr: any[]): MindMapDataList[] {
  return arr.map(({ text, children, ...rest }) => ({
    name: text,
    children: children ? convertMenu(children) : children,
    ...rest
  }))
}