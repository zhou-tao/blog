import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: '📚 Blog',
  description: '一个简单的博客',
  theme: defaultTheme({
    repo: 'zhou-tao/blog',
    sidebar: [
      {
        text: '封面',
        link: '/'
      },
      {
        text: '前端',
        link: '/frontend/js',
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
        link: '/linux/',
        children: [
          {
            text: '搭建NPM私库',
            link: '/linux/npm_private_repo/'
          }
        ]
      },
      {
        text: ' 更多',
        link: '/other/gis',
        children: [
          {
            text: 'GIS',
            link: '/other/gis/'
          }
        ]
      }
    ]
  }),
  plugins: [
    docsearchPlugin({
      appId: '',
      apiKey: '',
      indexName: ''
    })
  ],
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]]
})