const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: {
    index: "./src/index.js",
    other: "./src/other.js",
  },
  /**
   * webpack4以前是用插件commonChunkPLugins
   * optimization: 优化
   * splitChunks: 分割代码块
   * cacheGroups: 缓存组
   * common: 公共的模块
   */
  optimization: {
    // minizer: "", // 压缩
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "initial", // 从入口
          minSize: 0, // 大于0个公用字节
          minChunks: 2, // 引入两次以上抽离
        },
        vendor: {
          priority: 1, // 提升优先级
          test: /node_modules/, // 把你抽离出来
          chunks: "initial",
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  mode: "production",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./splitChunksDist"),
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: "./dist",
  },
  module: {
    noParse: /jquery|lodash/,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve("src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, "dist", "manifest.json"),
    // }),
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/, //匹配引入模块路径的正则表达式
      resourceRegExp: /^\.\/locale/, // 匹配模块的对应上下文，即所在目录名
    }),
  ],
};
