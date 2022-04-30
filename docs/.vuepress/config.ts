import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: '📚 Blog',
  description: '一个简单的博客',
  theme: defaultTheme({
    repo: 'zhou-tao/blog',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'FrondEnd',
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
        text: 'More',
        children: [
          {
            text: 'GIS',
            link: '/more/gis/'
          }
        ]
      }
    ]
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: '',
      apiKey: '',
      indexName: ''
    })
  ],
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]]
})