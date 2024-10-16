import {
  defineConfig
} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "技术博客",
  description: "vitepress搭建的静态博客网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{
        text: '主页',
        link: '/'
      },
      {
        text: '博客',
        link: '/markdown-examples'
      }
    ],

    sidebar: [{
      text: '前端',
      items: [{
        text: 'HTML学习',
        link: '/web/html-study'
      }, {
        text: 'CSS学习',
        link: '/web/css-study'
      }, {
        text: 'H5C3学习',
        link: '/web/h5c3-study'
      }, {
        text: 'canvas学习',
        link: '/web/canvas-study',
      }, {
        text: 'JavaScript学习',
        link: '/web/js-study'
      }, {
        text: 'Jquery学习',
        link: '/web/jquery-study'
      }, {
        text: 'mobile学习',
        link: '/web/mobile-study'
      }]
    }, {
      text: '框架',
      items: [{
        text: 'vuex学习',
        link: '/frame/vuex-study'
      }, {
        text: 'react学习',
        link: '/frame/react-study'
      }, {
        text: '跟着AI学react——上',
        link: '/frame/react-study-start'
      }, {
        text: '跟着AI学react——中',
        link: '/frame/react-study-middle'
      }, {
        text: '跟着AI学react——下',
        link: '/frame/react-study-end'
      }, {
        text: 'angular学习',
        link: '/frame/angular-study'
      }]
    }, {
      text: 'NodeJS',
      items: [{
        text: 'nodejs学习',
        link: '/node/node-study'
      }, {
        text: 'nodejs学习——上',
        link: '/node/node-study-start'
      }, {
        text: 'nodejs学习———下',
        link: '/node/node-study-end'
      }]
    }, {
      text: '构建工具',
      items: [{
        text: 'webpack',
        link: '/build/webpack-study'
      }, {
        text: 'glup',
        link: '/build/glup-study'
      }]
    }, {
      text: '其他',
      items: [{
        text: 'git学习',
        link: '/other/git-study'
      }, {
        text: '服务器部署',
        link: '/other/server'
      }, {
        text: 'mongodb数据库学习',
        link: '/other/mongodb-study'
      }, {
        text: 'java学习',
        link: '/other/java-study'
      }]
    }],

    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/vuejs/vitepress'
    }]
  }
})