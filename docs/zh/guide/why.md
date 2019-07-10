## 前言
   git是一个开源的分布式版本管理系统，可以有效、高速的处理从很小到非常大的项目版本管理。
   目前很多的企业都是使用git来管理代码，Git的本身对分布式支持的优势，使得在微服务遍地开花的今天更加耀眼，是团队进行分布式开发合作的不二之选。至于更多的优点我就不在这里一一累赘了，这里主要将如何在debain 8上面搭建git环境。
##    安装
git的安装也十分简单，对于debian，使用apt安装是最为快速的。
### 更新apt源
```shell
sudo apt-get update
```
### 安装git
```shell
sudo apt-get install git-core
```
## 配置
安装完之后，接下来就可以配置git了。
首先可以检查是否安装成功
执行
```shell
git --version
```
如果看到如下，就说明安装成功。
![](https://www.zealsay.com/wp-content/uploads/2018/06/5f9ae0d809b74b68fdd59e87ab5ed1d0.png)
### 设置用户名
```shell
git config --global user.name "Tom"
```
### 设置你的电子邮件
```shell

git config --global user.email tom@example.com
```

到此为止，你的git环境已经搭建起来了，可以使用`git clone` 来克隆一个项目。

