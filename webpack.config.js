const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
    new HtmlWebpackPlugin(),
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/, //匹配引入模块路径的正则表达式
      resourceRegExp: /^\.\/locale/, // 匹配模块的对应上下文，即所在目录名
    }),
  ],
};
