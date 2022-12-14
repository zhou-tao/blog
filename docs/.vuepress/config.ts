import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { navbar, sidebar } from './configs'

export default defineUserConfig({
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
        selectLanguageAriaLabel: '选择语言'
      },
      '/en': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        selectLanguageAriaLabel: 'Languages'
      }
    }
  }),
  plugins: [
    backToTopPlugin(),
    docsearchPlugin({
      appId: 'H9RIARRVX5',
      apiKey: 'e4b0bf51480ba12bd3e714178311c61a',
      indexName: 'zhou-tao'
    }),
    googleAnalyticsPlugin({
      id: 'G-GCGBFPXQYD'
    })
  ]
})