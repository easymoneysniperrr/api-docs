/*
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2023-10-09 18:03:04
 * @LastEditTime: 2023-10-10 16:24:43
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/api-docs/',
  title: "在鸿云文档",
  description: "在鸿云-api文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: {
      '/device/' : [
        {
          text: '设备平台',
          items: [
            { 
              text: 'Markdown Examples', 
              link: '/device/markdown-examples',
              items: [
                {
                  text: 'Markdown Examples1-2',
                  link: '/device/markdown-news',
                }
              ]
            },
            { text: 'Runtime API Examples', link: '/device/api-examples' }
          ]
        }
      ],
      '/safety/' : [
        {
          text: '安全平台',
          items: [
            { text: 'Markdown Examples', link: '/safety/markdown-examples' },
            { text: 'Runtime API Examples', link: '/safety/api-examples' }
          ]
        }
      ]
    },
  }
})
