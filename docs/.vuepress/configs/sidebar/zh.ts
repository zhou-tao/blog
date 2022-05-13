import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = [
{
    text: '向导',
    link: '/guide'
  },
  {
    text: '前端',
    children: [
      {
        text: 'Javascript',
        link: '/frontend/js/'
      },
      {
        text: 'Vue',
        link: '/frontend/vue/'
      },
      {
        text: 'React',
        link: '/frontend/react/'
      }
    ]
  },
  {
    text: ' VuePress',
    children: [
      {
        text: '搭建博客',
        link: '/vuepress/blog/'
      }
    ]
  },
  {
    text: ' Node',
    link: '/nodejs/'
  },
  {
    text: ' Linux',
    children: [
      {
        text: '搭建NPM私库',
        link: '/linux/npm_private_repo/'
      }
    ]
  },
  {
    text: 'Algorithm',
    children: [
      {
        text: '冒泡排序及优化',
        link: '/algorithm/bubble_sort/'
      }
    ]
  },
  {
    text: 'Markdown',
    children: [
      {
        text: 'Markdown简历',
        link: '/markdown/resume/'
      }
    ]
  },
  {
    text: '更多',
    children: [
      {
        text: 'GIS',
        link: '/more/gis/'
      }
    ]
  }
]