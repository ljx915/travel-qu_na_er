# travel-qu_na_er
> Vue 3.x 开发移动端旅游网站项目整体流程与记录。

## 效果预览(gh-pages分支)
[pc端链接](https://lijianxiong8.github.io/travel-qu_na_er/#/)（切换Chrome DevTools的模拟手机调试）

扫描二维码：

![](https://github.com/Lijianxiong8/travel-qu_na_er/blob/master/qrCode.png)



## 项目涉及到技术栈：
- Vue：Vue、Vue-router、Vuex、Vue-cli
- 插件：vue-awesome-swiper、better-scroll、axios
- CSS的预处理框架：stylus
- api：后台数据接口

## 项目特点
- 组件化自适应布局
- 代码，简洁，易维护
- 兼容大部分浏览器
- 实现性能优化

## 项目具体结构
### 首页部分
- iconfont 的引入和使用
- 图片轮播组件的使用
- 图标区域轮播组件的使用
- axios获取接口数据
- 组件间数据传递

### 城市选择页部分
- 字母表布局
- better-scroll 的使用
- 函数节流实现列表性能优化
- 搜索逻辑实现
- Vuex 实现数据共享
- LocalStorage 实现页面数据存储
- keep-alive 优化路由性能

### 详情页部分
- banner 布局
- 动态路由配置
- 公用画廊组件拆分
- 实现 fixed header 渐隐渐显效果
- 递归组件实现详情列表
- transition slot 插槽实现 animation 简单动画效果

# 项目相关
## 项目相关 npm 依赖包
- fastClick: 用来处理移动端 `click` 事件 300毫秒延迟
- stylus: CSS 预处理框架
- stylus-loader
- vue-awesome-swiper: 轮播插件
- axios: 实现 `ajax`

- better-scroll: scroll插件
- vuex: 实现数据共享

## 设置样式变量
- 通过 variable.styl 设置样式变量，抽离出公用样式。以方便维护