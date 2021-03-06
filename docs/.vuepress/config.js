module.exports = {
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?5e7cfb3cf2e7138862c598b862b15540";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `] //百度统计
  ],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'zealsay',
      description: '让轻应用的构建更加简单'
    },
    '/en': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'zealsay',
      description: 'Make the construction of light applications easier'
    }
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/' }, // 内部链接 以docs为根目录
          { text: '配置', link: '/config/' }, // 内部链接 以docs为根目录
          { text: 'api文档', link: 'https://dev-api.zealsay.com/doc.html' }, // 外部链接
          { text: '博客', link: 'https://blog.zealsay.com' }, // 外部链接
          // 下拉列表
          {
            text: 'GitHub',
            items: [
              { text: 'zealsay_backend', link: 'https://github.com/GodLikeZeal/zealsay_backend.git' },
              {
                text: 'zealsay_front',
                link: 'https://github.com/GodLikeZeal/zealsay_front.git'
              }
            ]
          },
          // 下拉列表
          {
            text: 'Gitee',
            items: [
              { text: 'zealsay_backend', link: 'https://gitee.com/GodLikeZeal/zealsay_backend.git' },
              {
                text: 'zealsay_front',
                link: 'https://gitee.com/GodLikeZeal/zealsay_front.git'
              }
            ]
          }
        ],
        sidebar: [
          {
            title: '指南',
            collapsable: false,
            children: [
              '/guide/',
              '/guide/why'
            ]
          }
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'guide', link: '/en/guide/' }, // 内部链接 以docs为根目录
          { text: 'config', link: '/en/algorithm/' }, // 内部链接 以docs为根目录
          { text: 'swagger api', link: 'https://dev-api.zealsay.com/doc.html' }, // 外部链接
          { text: 'blog', link: 'https://blog.zealsay.com' }, // 外部链接
          // 下拉列表
          {
            text: 'GitHub',
            items: [
              { text: 'zealsay_backend', link: 'https://github.com/GodLikeZeal/zealsay_backend.git' },
              {
                text: 'zealsay_front',
                link: 'https://github.com/GodLikeZeal/zealsay_front.git'
              }
            ]
          },
          // 下拉列表
          {
            text: 'Gitee',
            items: [
              { text: 'zealsay_backend', link: 'https://gitee.com/GodLikeZeal/zealsay_backend.git' },
              {
                text: 'zealsay_front',
                link: 'https://gitee.com/GodLikeZeal/zealsay_front.git'
              }
            ]
          }
        ],
        sidebar: [
          {
            title: 'guide',
            collapsable: false,
            children: [
              '/en/guide/',
              '/en/guide/why'
            ]
          }
        ]
      }
    }
  }
}