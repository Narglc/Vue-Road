
# 环境准备

## 升级 node 版本
```bash
# 使用 n 模块
npm install n -g        # 安装 n
n -V                    # 查看 n 模块版本

#使用 n 模块升级node版本
n latest                # 升级到最新版本
n lts                   # 升级到长期支持版本
n stable                # 升级到最新的稳定版本
```

## 升级 npm
```bash
sudo npm install npm -g
```

# vue 笔记

## CH01-vue基础

### 项目初始化
```bash
# 初始化项目
npm init vue@latest      # 执行 create-vue
# 或者 更新写法
npm create vue@latest    # 更推荐

# 运行
cd vue-base              # 项目命名时不应该有大写字母
npm install
npm run dev
```
#### init 初始化详情
![Alt text](./pics/npm_init.png)

#### 项目文件说明
![Alt text](./pics/file_desc.png)

> **公共资源文件夹**： `src/assets/`


### 开发环境
推荐：`vscode` + `volar`插件.


----
### 通用缩写
```
v-bind      :
v-on        @
v-slot      #
```

----

## 插槽基础知识
![插槽知识](./pics/slot.png)
![具名插槽](./pics/slot_name.png)


## 组件生命周期
![组件的生命周期](./pics/comp_life.png)

----

### vue 是从哪里开始的
#### 入口文件说明
```js
import { createApp } from 'vue'

// 从一个单文件组件中导入根组件（每个应用都需要一个"根组件", 其他组件将作为其子组件）
// App: 根组件
import App from './App.vue'

// app: Vue的实例对象
// 在一个vue项目中，有且只有一个vue的实例对象
const app = createApp(App)

// 挂载应用
// 应用实例必须在带哟个 .mount 方法后才会渲染出来，该方法接收一个"容器"参数，
// 可以是一个实际的DOM元素，或是一个CSS选择器字符串
app.mount('#app')

// 另:
// 浏览器可执行文件：
//  1. HTML
//  2. CSS
//  3. JavaScript
//  4. Image

// 构建工具： Webpack, vite

```


----

## 页面布局
[Flex 布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

----

## CSS 参考
[CSS 菜鸟教程](https://www.runoob.com/css/css-navbar.html)