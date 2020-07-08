## 介绍
### 什么是zealsay?
zealsay是一套前后端分离的快速开发脚手架，后台采用的是最新的`Spring Boot 2.1.6.RELEASE`最新版本，
   前端使用vue,搭载比较火热的`nuxt.js`服务器端渲染框架，截止到目前,使用的是`nuxt.js`最新`2.12.2`版本,
   使用`Vuetify 2.x`构造出符合 `Material Design` 规范的扁平化风格主题UI,你有对美的偏爱,我同样有一份对美的执着,为什么都2020年了，后台管理系统不能做的好看一些呢？
   面对日趋多样化的技术,抽取一些常用的解决方案,以快,轻为主,尽量追求功能与轻量之间的平衡，打造出一个开箱即用的轻应用脚手架,助力中小企业解决快速部署以及持续交付的`DevOps`。
### 为什么选择zealsay?
目前有很多优秀的开源java EE开发框架，在各自的场景都发挥着很重要的作用，想当初在ssm框架横行的年代，也帮助了包括我在内的很多小白，在刚开始的时候，有一个好用的开发框架真的是事半功倍，不过`java web`发展至今，从`jsp`,`servlet`,`ssh`,`ssm`,以及发展到现在的`spring boot`和`spring cloud`,技术的更新换代很快，开发方式也很快，随着前后端分离的开发模式普及，前端工程师的职位也越来越重要，而市面上三大前端框架的出现，也让前端程序员涨了一波工资，现在有一个问题是，在找别人的开源`java`快速开发框架的时候，或多或少会遇到以下问题：
1. 框架使用的技术栈稍微老旧（相对我来讲），有些还在用`ssm`或`ssh`，甚至也有使用jsp或`freemaker`模板等并没有前后端分离。
2. 功能太少不能满足需求，有些功能比较遗憾，但是二次开发复杂。
3. 界面老旧不好看，我感觉可能是后台程序猿的通病，对界面没啥要求。
4. 二次开发困难，文档少或没有，代码注释少。
5. 开源协议不支持商用。
6. 不更新或者不再维护。
因此，我决定自己写一个快速开发的脚手架，整合一些常用的功能模块，封装一些常用的组件，搭配高颜值的UI，让编程不再是一件难事，让你的界面赏心悦目，让你有更多的时间去陪陪家人和孩子。
俗话说，没有最好的技术，只有最适合自己的技术。
### 初衷
> 如果以下场景能引起你的共鸣：
1. 如果你的项目追求最新的技术栈，核心框架为基于`spring boot`，`mybatis-plus`,`spring sercurity`等技术栈。
2. 如果你喜欢在代码中使用`java 8`的新特性`lambda``stream`还有`optional`等。
3. 如果你也喜欢异步编程。
4. 如果你期望脚手架功能有用户登录注册，第三方登录，角色管理，数据字典，权限配置，参数校验等。
5. 如果你前端追求的技术栈是`vue`,`vuex`,`axios`,`nuxt`的话。
6. 如果你对千篇一律的`Element UI`审美疲劳，而对`Material Design`风格情有独钟的话。
7. 如果你期望你的网站能够响应式，并且最好还支持多种设备访问。
8. 如果你想集成`travis-ci`来实现持续集成和自动部署的话。
> 那么不妨来试一试`zealsay`款基于`springboot`和`vue`,`nuxt`快速开发脚手架吧,它一定能带给你不一样的体验

### 技术选型
#### 后台（zealsay_backend）
- Framework : java 8
- Maven 3.5.4
- Lombok 1.18.8
- Spring Boot 2.1.6
- Spring Security
- Spring Oauth2 (整合第三方登录)
- Spring Validation(参数校验优雅自如)
- jwt (JSON Web Token)
- jasypt 加密
- mapstruct (对象映射)
- Mybatis + Mybatis Plus (持久层开发利器)
- Fastjson (阿里json工具包)
- Spring Boot Docker (容器服务)
- Travis CI (自动化构建)
- Mysql (mysql数据库)
- Swagger 以及swagger bootstrap-ui (api文档在线生成)
- <s>RabbitMQ (消息中间件，个人博客示例中，为节省资源考虑去掉)</s>
- Redis (Nosql内存数据库)
- Hikari (高性能连接池)
- Undertow(高性能服务器容器，告别tomcat和jetty)
- Feign (外部服务调用，整合spring cloud后可以用于内部服务调用)
- Logback (日志记录)
- Actuator (服务监控)
- Junit Test (单元测试)
- 第三方SDK或服务
  - 七牛云对象云存储
  - Github第三方登录
  - Gitee第三方登录
  - Hitokoto 一言接口
  - 阿里云短信服务
  - 图灵机器人
  - 邮箱Email服务
#### 前端（zealsay_front）
- Vue (前端炙手可热的三大框架之一)
- Vuetify (基于Material Design风格规范优美的主题)
- Vuex (全局状态管理)
- Vue-Router (路由管理)
- axios (axios请求)
- eslint (格式化)
- sass (sass样式语法)
- vue-chartist (表格插件)
- vue-scroll-reveal(滚动动画)
- vue-concise-slider(vue漂亮轮播)
- mdi/font (mdi字体和图标)
- sweetalert2 (优美的弹窗)
- vue-cropper (图片裁剪)
- mavon-editor (md编辑器)
- xss（防xss攻击）
- travis ci (自动化ci)
- docker (容器服务)
### 中间件
- redis
### devlops架构图
![系统架构图](https://pan.zealsay.com/mweb/2020061915925585465233.png)

## 项目结构
### zealsay_backend(后台)
````
├── .gitignore
├── .travis.yml                                            # travis-ci编排文件
├── Dockerfile                                             # dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml                                     # docker编排
├── pom.xml                                                # maven pom
├── script
│   ├── deploy                                             # 部署脚本
└── src
    ├── main
    │   ├── java
    │   │   └── com
    │   │       └── zeal
    │   │           └── zealsay
    │   │               ├── ZealsayApplication.java         # spring boot入口
    │   │               ├── common                          # 框架通用
    │   │               │   ├── annotation                  # 自定义注解
    │   │               │   ├── aop                         # aop切面
    │   │               │   ├── biz                         # 业务工具
    │   │               │   ├── constant                    # 系统常量
    │   │               │   │   └── enums                   # 枚举
    │   │               │   ├── entity                      # 框架实体
    │   │               │   └── third
    │   │               │       └── qiniu                   # 七牛云
    │   │               ├── config                          # 全局配置
    │   │               ├── controller                     # 控制器controller
    │   │               ├── converter                          # 转换器
    │   │               ├── dto
    │   │               │   ├── request                               # 请求参数
    │   │               │   └── response                            # 返回参数
    │   │               ├── entity                                        # 业务实体
    │   │               ├── exception                                # 全局异常处理
    │   │               ├── feign                                         # feignclient
    │   │               │   ├── fallback                             # 调用失败fallback
    │   │               │   └── response                           # 返回对象
    │   │               ├── helper                                      # 业务操作帮助类
    │   │               ├── mapper                                    # mybatis mapper接口
    │   │               ├── security                                   # spring security全局安全
    │   │               │   ├── aop                                    # token 切面
    │   │               │   ├── constant                          # 安全常量
    │   │               │   ├── core                                  # 安全核心方法
    │   │               │   ├── filter                                 # 过滤器
    │   │               │   └── handler                           # 登录动作处理器
    │   │               ├── service                                   # 业务service
    │   │               │   ├── auth                                # 授权相关
    │   │               │   └── cache                              # 缓存相关 
    │   │               ├── util                                         # 工具类
    │   │               └── web                                        # web工具
    │   └── resources                                                # 资源文件
    │       ├── application.yml                                 # spring boot 配置文件
    │       ├── banner.txt                                          # 自定义banner
    │       ├── logback-spring.xml                          # logback日志配置
    │       ├── mappings                                           # mybatis xml文件
    │       ├── org
    │       │   └── springframework
    │       │       └── security
    │       │           └── messages_zh_CN.properties
    │       ├── region
    │       │   └── region.json
    │       ├── static
    │       │   ├── css
    │       │   │   ├── bootstrap.min.css
    │       │   │   └── signin.css
    │       │   ├── error
    │       │   │   └── 404.html
    │       │   └── index.html
    │       ├── templates
    │       │   └── ftl
    │       │       └── login.ftl                                      
    │       └── zealsay.sql                                           #初始化脚本
    └── test                                                                  #集成测试用例
````
### zealsay_front(前端) 
````
.
├── Dockerfile                                                        #dockerfile
├── LICENSE
├── README.md
├── api                                                                     # api文件
├── assets
│   ├── scss
│   │   └── styles
│   │       ├── index.scss                                      
│   │       ├── markdown                                     #markdown编辑器以及代码高亮样式
│   │       └── material-dashboard                    # material组件
│   └── variables.scss                                          # vuetify全局参数
├── components
│   ├── core                                                           #后台管理相关组件
│   ├── helper                                                       # 组件工具
│   └── material                                                   # 卡片组件
├── layouts                                                            # nuxt 布局
├── middleware
├── nuxt.config.js                                                # nuxt全局配置文件
├── package-lock.json
├── package.json
├── pages                                                              # 页面文件
├── plugins                                                           # 插件
├── static                                                              # 静态资源
├── store                                                               # vuex全局变量
└── util                                                                 # 工具
````
## 数据结构
###  对象实体
1. 统一返回对象 `Result`

**响应数据**:

```json
{
	"code": "",
	"data": "",
	"message": ""
}
```

**响应参数说明**:


| 参数名称         | 说明                             |    类型 |  schema |
| ------------ | -------------------|-------|----------- |
|code| 响应码  |string  |    |
|data| 响应内容  |Object  |    |
|message| 请求message  |string  |    |

2. REST风格约定

**请求方式说明**:

| 状态码         | 说明                             |    schema                         |
| ------------ | -------------------------------- |---------------------- |
| GET | 请求资源  |主要用于查询操作|
| POST | 创建资源  |主要用于新增操作|
| PUT | 更新资源  |主要用于资源的更新|
| DELETE | 删除资源  |主要用来删除资源|
## 全局配置
## 核心模块
### 登录认证
### 权限设置
### 角色管理
## redis cache缓存
## 部署发布
## 更新记录
## 常见问题Q&A