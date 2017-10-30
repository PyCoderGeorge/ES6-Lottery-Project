# 彩票项目实战

> 学习ECMAScript2015，通过此项目 彩票项目（快频11选5）实例来更加清晰的了解和掌握ES6。

## 需求分析

**拆分功能模块**

* 倒计时
* 玩法切换
* 计算金额
* 添加号码
* 投注支付
* 随机号码
* 奖金预测
* 状态更新
* 动态遗漏

> 归纳分为5类： timer.js （时间类）、calculate.js (计算类)、interface.js (API接口类)、base.js（彩票玩法业务逻辑类）

**覆盖知识点**

* let和const
* 解构赋值
* 正则扩展
* 数值扩展
* 数组扩展
* 函数扩展
* 对象扩展
* 字符串扩展
* Symbol
* 数据结构
* Proxy
* Reflect
* 类
* Promise
* Generator
* 模块化

## 项目中使用到的相关技术栈和工具

* ECMAScript 2015
* express （构建服务器）、Mock.js (模拟生成数据API接口)
* Gulp（基于流的自动化构建工具）、Babel（javascript转码器）、Webpack（JavaScript 应用程序的模块打包器）、Npm（包管理工具）

**目录结构**

```
--ES6-Lottry-Project

|-- app                                    // 前端目录
|   |-- css                                // 样式目录
|   |-- js                                 // Js目录
|   |   |-- class                          // ES6语法基础知识点笔记
|   |   |-- lottry                         // 彩票项目功能类 
|   |   |   |-- base.js                    // 彩票玩法业务逻辑类 
|   |   |   |-- calculate.js               // 计算类 
|   |   |   |-- interface.js               // API接口类 
|   |   |   |-- timer.js                   // 时间类 
|   |   |-- index.js                       // 入口文件 
|   |   |-- lottery.js                     // 导入所有的类库文件 
|   |-- views                              // 页面目录
|   |   |-- error.ejs                      // 错误提示页
|   |   |-- index.ejs                      // 入口文件html
|-- server                                 // 服务端目录
|-- tasks                                  // 自动化构建工具配置目录
|   |-- util                               // 工具
|   |   |-- args.js                        // 命令行处理脚本
|-- .babelrc                               // ES6语法编译配置
|-- .gitignore                             // git忽略文件
|-- package.json                           // 依赖及配置
|-- README.md                              // 简介

-- END

```