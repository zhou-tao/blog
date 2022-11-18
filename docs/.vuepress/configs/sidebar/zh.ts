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
        children: [
          {
            text: '表达式转换',
            link: '/frontend/js/exp_conversion/'
          },
        ]
      },
      {
        text: 'Vue',
        link: '/frontend/vue/'
      },
      {
        text: 'React',
        link: '/frontend/react/'
      },
      {
        text: 'Webpack',
        children: [
          {
            text: '构建优化',
            link: '/frontend/webpack/build_optimize/'
          },
        ]
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
    children: [
      {
        text: 'nvm',
        link: '/nodejs/nvm/'
      },
      {
        text: 'node-sass安装',
        link: '/nodejs/node-sass'
      }
    ]
  },
  {
    text: ' Linux',
    children: [
      {
        text: '搭建NPM私库',
        link: '/linux/npm_private_repo/'
      },
      {
        text: '链接文件系统',
        link: '/linux/linked_file_system/'
      }
    ]
  },
  {
    text: 'Algorithm',
    children: [
      {
        text: '冒泡排序及优化',
        link: '/algorithm/bubble_sort/'
      },
      {
        text: '链表排序',
        link: '/algorithm/link_list_sort/'
      },
      {
        text: '构造树',
        link: '/algorithm/create_tree/'
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