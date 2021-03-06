## webpack 优化手段

### 初始化项目

`npm i webpack webpack-cli html-webpack-plugin @babel/core babel-loader @babel/preset-env @babel/preset-react -D`

### [noParse](https://webpack.docschina.org/configuration/module/#modulenoparse)

noParse: 配置不需要解析依赖（即无依赖） 的第三方大型类库等，以提高整体的构建速度

> 当库很大的时候会很有帮助,执行效率会提高\
> 所以一般我们如果知道一个包没有依赖项,可以使用 noParse 忽略掉\
> 使用 noParse 进行忽略的模块文件中不能使用 import、require、define 等导入机制

```js
module.exports = {
  // ...
  module: {
    // 不去解析 jquery 中的依赖库
    // noParse: /jquery|lodash/, // 正则
    // 或使用函数
    noParse(content) {
      return /jquery|lodash/.test(content);
    },
  },
};
```

### IgnorePlugin

> webpack 内置插件,用于忽略某些特定的模块，让 webpack 不把这些指定的模块打包进去

```js
import moment from "moment";
// console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // August 13th 2021, 3:43:08 pm
moment.locale("zh-cn");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // 八月 13日 2021, 3:44:05 下午
```

引入 moment 库后,包变的很大,有 1.08MB

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f03171d2ed644f882ebf8172dc46ac0~tplv-k3u1fbpfcp-watermark.image)

原因是加载 moment 时加载了很多语言包

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4c9086542244653bc710774062e8948~tplv-k3u1fbpfcp-watermark.image)

```js
new webpack.IgnorePlugin({
  contextRegExp: /moment$/,
  resourceRegExp: /^\.\/locale/,
}),
```

优化后 544kb

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5016359589cf488b97d25c1f1a798d42~tplv-k3u1fbpfcp-watermark.image)

此时需要手动引入所需要的语言

### DDL

直接打包 react 项目,打出来的包 1.34MB:

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3ff05c293ae44044bd1abe123bf70220~tplv-k3u1fbpfcp-watermark.image)

## webpack 实现多线程打包:happypack

`npm i happypack -D`

- 当项目文件很小,用多线程打包反而会慢,因为要分配多个线程的过程也会浪费一些性能
- 当项目较大,才能起到优化作用

### webpack 自带优化

### tree-shaking

> 生产环境下,使用 import 语法会自动去除掉没用的代码
> --> 即 tree-shaking: 把没用的代码自动删除掉

require 语法不支持 tree-shaking(前端问为什么要使用 import 语法?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0a4c94a3d384f569ee0940ac34217f1~tplv-k3u1fbpfcp-watermark.image)

### scope hosting 作用域提升

> webpack3 开始加了 scope hosting 功能
> 在 webpack 中自动省略一些可以简化的代码

### 抽取公共代码:splitChunks:分割代码块

> 针对多页应用
