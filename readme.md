<!-- <p align="center">
<img src="https://cdn.lijinke.cn/logo.png" width="100"/>
</p> -->

<h1 align="center">
cherry-rc-ui
</h1>

<h4 align="center">
A React UI Library Based On RC
一个基于RC的React组件库
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/cherry-rc-ui" title="npm">
    <img src="https://img.shields.io/npm/dm/cherry-rc-ui.svg?style=for-the-badge" alt="npm"/>
  </a>
   <a href="https://badge.fury.io/js/cherry-rc-ui" title="npm">
    <img src="https://img.shields.io/npm/v/cherry-rc-ui.svg?style=for-the-badge" alt="npm version"/>
  </a>
</p>

## :metal: 在线演示

[https://nywgithub.github.io/components/](https://nywgithub.github.io/components/)

## :zap: 安装
> 使用 npm 
```
npm i cherry-rc-ui --save
```

> 使用 yarn
```
yarn add cherry-rc-ui 
```

## :book: 如何使用

> 1. 按需引入

```jsx
import React from "react"
import { Alert } from "cherry-rc-ui"
import "cherry-rc-ui/lib/alert/style/index.css"

class Page extends React.Component {
  render(){
    return (
      <Alert
        kind="warning"
        closeable
        close={<span>x</span>}
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条警告提示?</div>
      </Alert>
    )
 }
}
```

> 2. 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```js
// .babelrc.js
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "cherry-rc-ui",
      "libraryDirectory": "es",
      "style": true
    },'cherry-rc-ui'], 
  ]
}

// 多个组件库
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "cherry-rc-ui",
      "libraryDirectory": "es",
      "style": true
    },'cherry-rc-ui'], 
    
    ["babel-plugin-import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    },'antd'], 
  ]
}


```

## :unamused: 设计规范

借鉴Ant-Design React-Component


## :package: 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [dom-align](https://github.com/yiminghe/dom-align)
- [rc](https://github.com/react-component)


##  :wrench: 本地开发
```
git clone git@github.com:nywgithub/components.git
cd components
npm i
```

1. 安装依赖
> 如果无法科学上网 可 使用 淘宝镜像 
> npm --registry https://registry.npm.taobao.org

1. 启动开发服务器
> 基于  dumi1.0 
```
npm run dev
```

1. 访问 [http://localhost:8000](http://localhost:8000)

2. 开发组件

> 参考 `components/alert`

在 `components` 新建一个组件(组件名与文件名对应) 以 `alert` 组件目录结构为例

- components
	- button           //组件文件夹
  	- `demo`         //demo文件夹
    	- `index.tsx`
		- `button.ts`     //组件逻辑
		- `index.ts`     //组件入口
		- `interface.ts`     //ts类型
    - `style`     //样式文件夹
      - `style.less`     
      - `index.ts`   
		
然后 在 `docs/components` 目录下 新建一个 `alert.md`

- docs
  - components 
  	- `alert.md`  // dumi 的文档文件

编写demo在dev中测试

```tsx
//alert/demo/index.tsx
import React from 'react'
import Alert from '..'
import ConfigProvider from '../../common-provider/context'
import '../style'

export default () => {
  const onClose = () => {
    console.log('关闭中')
  }
  return (
    <ConfigProvider locale={'asd'}>
      <Alert
        kind="warning"
        closeable
        close={<span>delete</span>}
        // duration={3000}
        onClose={onClose}
      >
        <div>这是一条警告提示?</div>
      </Alert>
    </ConfigProvider>
  )
}

```


这样就完成了 `dumi` 会将你写好的组件 添加到页面上, 并且会自动生成说明文档 （其实本质上就是一个 webpack 的 dev-server）

最后的最后, 在src根目录的`index.ts` 导出组件,以便于发布

```js
export { default as Alert } from "./alert";
```
