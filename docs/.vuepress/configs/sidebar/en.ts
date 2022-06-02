import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = [
  {
    text: 'Guide',
    link: '/en/guide'
  },
  {
    text: 'FrondEnd',
    children: [
      {
        text: 'Javascript',
        link: '/en/frontend/js/'
      },
      {
        text: 'Vue',
        link: '/en/frontend/vue/'
      },
      {
        text: 'React',
        link: '/en/frontend/react/'
      }
    ]
  },
  {
    text: ' VuePress',
    children: [
      {
        text: 'Build Blog',
        link: '/en/vuepress/blog/'
      }
    ]
  },
  {
    text: ' Node',
    link: '/en/nodejs/'
  },
  {
    text: ' Linux',
    children: [
      {
        text: 'Build Npm Private Repo',
        link: '/en/linux/npm_private_repo/'
      }
    ]
  },
  {
    text: 'Algorithm',
    children: [
      {
        text: 'Bubble Sort And Optimize',
        link: '/en/algorithm/bubble_sort/'
      },
      {
        text: 'Link List Sort',
        link: '/en/algorithm/link_list_sort/'
      },
      {
        text: 'Create Tree',
        link: '/en/algorithm/create_tree/'
      }
    ]
  },
  {
    text: 'Markdown',
    children: [
      {
        text: 'Markdown Resume',
        link: '/en/markdown/resume/'
      }
    ]
  },
  {
    text: 'More',
    children: [
      {
        text: 'GIS',
        link: '/en/more/gis/'
      }
    ]
  }
]