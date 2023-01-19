import { defineConfig } from 'vitepress'
import { navbar, sidebar } from '../config'

export default defineConfig({
  base: '/blog/',
  title: 'Blog',
  description: '个人极简博客。',
  appearance: 'dark',
  lang: 'zh',
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        nav: navbar.zh,
        sidebar: sidebar.zh,
        outlineTitle: '内容',
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        editLink: {
          pattern: 'https://github.com/zhou-tao/blog/edit/main/docs/:path',
          text: '在GitHub上编辑本页'
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: navbar.en,
        sidebar: sidebar.en,
        editLink: {
          pattern: 'https://github.com/zhou-tao/blog/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.svg' }
    ]
  ],
  themeConfig: {
    logo: '/logo.svg',
    i18nRouting: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhou-tao/blog' }
    ],
    algolia: {
      appId: 'H9RIARRVX5',
      apiKey: 'e4b0bf51480ba12bd3e714178311c61a',
      indexName: 'zhou-tao',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  }
})