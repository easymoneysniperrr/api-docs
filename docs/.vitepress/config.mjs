/*
 * @Description: 
 * @Author: 欧阳承珺
 * @LastEditors: 欧阳承珺
 * @Date: 2023-10-09 18:03:04
 * @LastEditTime: 2023-10-12 11:01:57
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
    outlineTitle: '当前页导航',
    nav: [
      { text: '首页', link: '/' },
      { text: '设备', link: '/device/platform-introduce' },
      { text: '安全', link: '/safety/api-examples' },
    ],

    sidebar: {
      '/device/' : [
        {
          text: '设备平台',
          items: [
            { 
              text: '产品介绍', 
              base: '/device/',
              items: [
                {text: '平台简介',link: 'platform-introduce'},
                {text: '产品架构',link: 'product-framework'},
                {text: '产品功能',link: 'product-funciton'},
                {text: '名词解释',link: 'noun-explanation'},
                {text: '产品优势',link: 'product-advantage'},
              ]
            },
            { 
              text: '设备快速接入', 
              items: [
                {
                  text: '设备安全认证',
                  base: '/device/',
                  items: [
                    {text: '一型一密',link: 'type-secret'},
                    {text: '一机一密',link: 'machine-secret'},
                  ]
                },
                {
                  text: 'Tlink协议',
                  items: [
                    {text: '设备属性',link: 'property'},
                    {text: '设备命令',link: 'command'},
                    {text: '设备事件',link: 'event'},
                  ]
                },
              ]
            },
            { 
              text: '用户操作指南', 
              base: '/device/',
              items: [
                {text: '产品管理',link: 'product-manage'},
                {text: '设备管理',link: 'device-manage'},
                {text: 'OTA升级',link: 'ota-update'},
                {text: '运维监控',link: 'monitoring'},
                {text: '规则引擎',link: 'rule-engine'},
                {text: '数据统计',link: 'data-statistics'},
              ]
            },
            {
              text: '开发指南',
              link: '/device/developer-guide'
            },
            {
              text: 'API参考',
              items: [
                {
                  text: '产品管理',
                  base: '/device/api/',
                  items: [
                    {text: '创建产品',link: 'CreateProduct'},
                    {text: '删除产品',link: 'DeleteProduct'},
                    {text: '产品查询',link: 'QueryProduct'},
                    {text: '产品列表',link: 'QueryProductList'},
                  ]
                },
              ]
            },
            {
              text: 'SDK参考',
              base: '/device/',
              items: [
                {text: '南向SDK',link: 'south-sdk'},
                {text: '北向SDK',link: 'north-sdk'},
              ]
            },
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
