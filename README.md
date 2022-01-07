
<h4 align="center">wt-web-vite-js+Vue3前端框架</h4>
## 平台简介

* 本仓库为前端技术栈 [Vue3](https://v3.cn.vuejs.org) + [Element Plus](https://element-plus.org/zh-CN) + [Vite](https://cn.vitejs.dev) 版本。
* 配套后端代码仓库地址[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue) 或 [RuoYi-Vue-fast](https://github.com/yangzongzhuan/RuoYi-Vue-fast) 版本。
* 前端技术栈（[Vue2](https://cn.vuejs.org) + [Element](https://github.com/ElemeFE/element) + [Vue CLI](https://cli.vuejs.org/zh)），请移步[RuoYi-Vue](https://gitee.com/y_project/RuoYi-Vue/tree/master/ruoyi-ui)。


## 前端运行

```bash
# 克隆项目
git clone XXX

# 进入项目目录
cd wt-web-vite-js

# 安装依赖
yarn --registry=https://registry.npm.taobao.org

# 启动服务
yarn dev

# 构建测试环境 yarn build:stage
# 构建生产环境 yarn build:prod
# 前端访问地址 http://localhost:2022
```
## 接口使用

> 注意不要重复接口名称,不然会被覆盖
1.方案1(推荐)
``` js
import $api from './apis'
$api.XXX
```

## 在线体验

- admin/admin123  

演示地址：http://vue.ruoyi.vip  
文档地址：http://doc.ruoyi.vip
