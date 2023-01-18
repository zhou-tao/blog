import { defineConfig } from 'vitepress'
import { navbar, sidebar } from '../config'

export default defineConfig({
  base: '/blog/',
  title: 'Blog',
  description: '个人极简博客。',
  appearance: 'dark',
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    i18nRouting: true,
    nav: navbar.zh,
    sidebar: sidebar.zh,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhou-tao/blog' }
    ],
    editLink: {
      pattern: 'https://github.com/zhou-tao/blog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      copyright: 'MIT Licensed | Copyright © 2022-present zhou tao'
    }
  }
})