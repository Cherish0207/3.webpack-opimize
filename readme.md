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
