// 单独打包 react 和 react-dom, 开发时引入打包好的文件,这样就不用重新打包了
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: {
    react: ["react", "react-dom"],
  },
  mode: "development",
  output: {
    filename: "_dll_[name].js", // 产生的文件名
    path: path.resolve(__dirname, "dist"),
    library: "_dll_[name]", // // 产生的文件中的导出变量名:_dll_react
  },
  // 需要把当前的文件定义成动态链接库,相当于有一个清单可以找到模块
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]", // 这里的name需要和output.library相同
      path: path.resolve(__dirname, "dist", "manifest.json"),
    }),
  ],
};
