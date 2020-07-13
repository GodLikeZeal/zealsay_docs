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
    │   │               ├── controller                      # 控制器controller
    │   │               ├── converter                       # 转换器
    │   │               ├── dto
    │   │               │   ├── request                     # 请求参数
    │   │               │   └── response                    # 返回参数
    │   │               ├── entity                          # 业务实体
    │   │               ├── exception                       # 全局异常处理
    │   │               ├── feign                           # feignclient
    │   │               │   ├── fallback                    # 调用失败fallback
    │   │               │   └── response                    # 返回对象
    │   │               ├── helper                          # 业务操作帮助类
    │   │               ├── mapper                          # mybatis mapper接口
    │   │               ├── security                        # spring security全局安全
    │   │               │   ├── aop                         # token 切面
    │   │               │   ├── constant                    # 安全常量
    │   │               │   ├── core                        # 安全核心方法
    │   │               │   ├── filter                      # 过滤器
    │   │               │   └── handler                     # 登录动作处理器
    │   │               ├── service                         # 业务service
    │   │               │   ├── auth                        # 授权相关
    │   │               │   └── cache                       # 缓存相关 
    │   │               ├── util                            # 工具类
    │   │               └── web                             # web工具
    │   └── resources                                       # 资源文件
    │       ├── application.yml                             # spring boot 配置文件
    │       ├── banner.txt                                  # 自定义banner
    │       ├── logback-spring.xml                          # logback日志配置
    │       ├── mappings                                    # mybatis xml文件
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
    │       └── zealsay.sql                                #初始化脚本
    └── test                                               #集成测试用例
````
### zealsay_front(前端) 
````
.
├── Dockerfile                                             #dockerfile
├── LICENSE
├── README.md
├── api                                                    # api文件
├── assets
│   ├── scss
│   │   └── styles
│   │       ├── index.scss                                      
│   │       ├── markdown                                  #markdown编辑器以及代码高亮样式
│   │       └── material-dashboard                        # material组件
│   └── variables.scss                                    # vuetify全局参数
├── components
│   ├── core                                              #后台管理相关组件
│   ├── helper                                            # 组件工具
│   └── material                                          # 卡片组件
├── layouts                                               # nuxt 布局
├── middleware
├── nuxt.config.js                                        # nuxt全局配置文件
├── package-lock.json
├── package.json
├── pages                                                 # 页面文件
├── plugins                                               # 插件
├── static                                                # 静态资源
├── store                                                 # vuex全局变量
└── util                                                  # 工具
````
## 数据结构
###  对象实体
#### 1. 统一返回对象 `Result`

**响应数据**:

```json
{
	"code": "",
	"data": "",
	"message": ""
}
```

**响应参数说明**:


| 参数名称         | 说明                             |    类型 |
| ------------ | -------------------|-------|----------- |
|code| 响应码  |string  |    |
|data| 响应内容  |Object  |    |
|message| 请求message  |string  |    |

#### 2. 分页封装对象 `PageInfo`

**响应数据**:

```json
{
	"pageSize": "",
	"currentPage": "",
	"total": "",
	"records": ""
}
```

**响应参数说明**:


| 参数名称         | 说明                             |    类型 |  
| ------------ | -------------------|-------|
|pageSize| 分页size，也就是每页展示条数  |long  | 
|currentPage| 当前页数  |long  | 
|total| 记录总条数  |long  | 
|records| 记录  |list  | 
> 为什么要用long类型？<br/>
>1.贴切mybatis-plus的page方法，无需转换，如丝般顺滑。<br/>
>2.long也不必如int担心溢出。<br/>

#### REST风格约定

**请求方式说明**:

| 状态码         | 说明                             |    schema                         |
| ------------ | -------------------------------- |---------------------- |
| GET | 请求资源  |主要用于查询操作|
| POST | 创建资源  |主要用于新增操作|
| PUT | 更新资源  |主要用于资源的更新|
| DELETE | 删除资源  |主要用来删除资源|

## 核心模块
### spring security
#### 1.引入`spring security`依赖
```` xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
````
#### 2.定义`AuthenticationManager`
> 创建`SecurityConfigurer`核心配置，实现`WebSecurityConfigurerAdapter`方法。

`Spring Security`中，接口`AuthenticationManager`用于抽象建模认证管理器，用于处理一个认证请求，也就是`Spring Security`中的`Authentication`认证令牌。<br>
`AuthenticationManager`在认证过程中必须按以下顺序处理以下认证异常`AuthenticationException` :

1.  `DisabledException` – 账号被禁用时抛出
2.  `LockedException` – 账号被锁定时抛出
3.  `BadCredentialsException` – 密码错误时抛出

`Spring Security`框架提供了`AuthenticationManager`的缺省实现`ProviderManager`。
`ProviderManager`管理了多个身份管理源,或者叫做认证提供者`AuthenticationProvider`，用于认证用户。
它自身不实现身份验证，而是逐一使用认证提供者进行认证，直到某一个认证提供者能够成功地验证该用户的身份
（或者是已经尝试完了该集合中所有的认证提供者仍然不能认证该用户的身份）。
通过`ProviderManager`,`Spring Security`能够为单个应用程序提供多种认证机制。<br>

`AuthenticationManager`会在`Spring Security`应用配置阶段被构建，比如被某个`WebSecurityConfigurerAdapter`构建，
然后在工作阶段被使用。比如一个基于用户名密码认证机制的`Spring Web MVC + Spring Security`应用，应用/容器启动过程中，
`AuthenticationManager`构建后会被设置到基于用户名密码进行认证的安全过滤器`UsernamePasswordAuthenticationFilter`上，缺省情况下，
当请求为访问地址`/login`的`POST`请求时，`UsernamePasswordAuthenticationFilter`就会认为这是一个用户认证请求，从而获取请求中的用户名/密码信息，
使用`AuthenticationManager`认证该请求用户的身份。<br>

这里配置如下：
```` java
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {
  @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }
}
````
#### 3.使用`BCrypt`给密码加密
 `spring boot`包含了很多种密码编码器，有 `ldap` 、`MD4` 、 `MD5` 、`noop` 、`pbkdf2` 、`scrypt` 、`SHA-1` 、`SHA-256`,但是默认使用的是`BCryptPasswordEncoder`来加密。
 ```` java
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

  @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
````
> #### 为什么不用`MD5`来加密？<br>
>目前很大一部分存在安全问题的系统一般仅仅使用密码的 MD5 值进行保存，可以通过 MD5 查询库去匹配对大部分的密码（可以直接从彩虹表里反推出来），
>而且 MD5 计算 Hash 值碰撞容易构造，安全性大大降低。
>MD5 加盐在本地计算速度也是很快，但是密码短也是极其容易破解；
>因此更好的选择是 `SHA-256`、`BCrypt` 等，所以`spring boot`官方推荐`BCrypt`

#### 4.使用自定义数据库来安全认证
如果不配置自定义数据库安全认证，`spring security`在启动的时候会在内存生成一个随机密码，账号默认为`admin`，但是一般的系统，
登录用户都是持久化在数据库中，在执行安全认证时候会与数据库中的账号和密码进行比对。
> 这里的`userDetailService`需要实现`userDetailService`接口
```` java
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

    // 加入自定义的安全认证
    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
  }

  @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}

````
#### 5.配置拦截链和登录逻辑
通过重写`config`来实现`spring security`的核心配置，这里增加一个逻辑，去除所有配置过的url校验逻辑。完整的`SecurityConfigurer`类如下：
```` java
package com.zeal.zealsay.security;

import com.zeal.zealsay.config.FilterIgnorePropertiesConfig;
import com.zeal.zealsay.security.filter.AuthorizationTokenFilter;
import com.zeal.zealsay.security.handler.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configurers.ExpressionUrlAuthorizationConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//import com.zeal.zealsay.security.filter.JwtAuthorizationTokenFilter;

/**
 * spring security全局安全入口.
 *
 * @author zhanglei
 * @date 2018/9/26  下午8:36
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfigurer extends WebSecurityConfigurerAdapter {

  @Autowired
  RedisConnectionFactory redisConnectionFactory;
  @Autowired
  FilterIgnorePropertiesConfig filterIgnorePropertiesConfig;
  @Autowired
  PasswordEncoder passwordEncoder;
  @Autowired
  MyAuthenticationFailureHandler myAuthenticationFailureHandler;
  @Autowired
  MyAuthenticationSuccessHandler myAuthenticationSuccessHandler;
  @Autowired
  MyAccessDeniedHandler myAccessDeniedHandler;
  @Autowired
  MyAuthenticationEntryPoint myAuthenticationEntryPoint;
  @Autowired
  MyLogoutSuccessHandler myLogoutSuccessHandler;
  @Autowired
  UserDetailsService userDetailsService;
//  @Autowired
//  JwtAuthorizationTokenFilter jwtAuthorizationTokenFilter;

  @Autowired
  AuthorizationTokenFilter authorizationTokenFilter;

  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {

    // 加入自定义的安全认证
    auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder);
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    ExpressionUrlAuthorizationConfigurer<HttpSecurity>.ExpressionInterceptUrlRegistry registry =
        http
            .csrf().disable()// 去掉 CSRF
            .cors()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED) // 使用 JWT，关闭token
            .and()
            .formLogin()  //开启登录
            .loginPage("/api/v1/authentication/require")
            .loginProcessingUrl("/api/v1/authentication/login")
            .successHandler(myAuthenticationSuccessHandler) // 登录成功
            .failureHandler(myAuthenticationFailureHandler) // 登录失败
            .permitAll()
            .and()
            .logout()
            .logoutUrl("/api/v1/authentication/logout")
            .logoutSuccessHandler(myLogoutSuccessHandler)
            .and()
            .authorizeRequests();

    filterIgnorePropertiesConfig
        .getUrls()
        .forEach(url -> registry.antMatchers(url).permitAll());
    registry
        .anyRequest()
        .authenticated()
//            .access("@rbacauthorityservice.hasPermission(request,authentication)") // RBAC 动态 url 认证
        .and()
        .logout()
//            .logoutSuccessHandler(logoutSuccessHandler)
        .permitAll()
        .and()
        .rememberMe().rememberMeParameter("remember-me")
        .userDetailsService(userDetailsService).tokenValiditySeconds(300)
        .and()
        .exceptionHandling().authenticationEntryPoint(myAuthenticationEntryPoint)
        .and()
        .exceptionHandling().accessDeniedHandler(myAccessDeniedHandler)  // 无权访问 JSON 格式的数据
        .and()
        .addFilterBefore(authorizationTokenFilter, UsernamePasswordAuthenticationFilter.class);

  }

  @Bean(name = BeanIds.AUTHENTICATION_MANAGER)
  @Override
  public AuthenticationManager authenticationManagerBean() throws Exception {
    return super.authenticationManagerBean();
  }

  @Bean
  PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
````

> `filterIgnorePropertiesConfig`为配置在`application.yml`中白名单的`url` <br>

 
### 权限设置
### 角色管理
## redis cache缓存
## 部署发布
## 更新记录
## 常见问题Q&A