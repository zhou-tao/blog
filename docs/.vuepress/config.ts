import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
// import gungnirTheme from 'vuepress-theme-gungnir'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '📚 Blog',
      description: '一个简单的博客'
    },
    '/en': {
      lang: 'en-US',
      title: '📚 Blog',
      description: 'a simple blog'
    },
  },
  theme: defaultTheme({
    repo: 'zhou-tao/blog',
    locales: {
      '/': {
        navbar: navbar.zh,
        sidebar: sidebar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',  
      },
      '/en': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages',
      }
    }
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: 'H9RIARRVX5',
      apiKey: '13397fec8ee59b32e85c77e442cb23b0',
      indexName: 'zhou-tao',
      searchParameters: {
        facetFilters: ['tags:v2'],
      }
    })
  ]
})