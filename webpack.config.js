const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Happypack = require("happypack");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
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
        use: "Happypack/loader?id=js", // 标识是打包js的
      },
      {
        test: /\.css$/,
        use: "Happypack/loader?id=css",
      },
    ],
  },
  plugins: [
    new Happypack({
      id: "js",
      use: [
        {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      ],
    }),
    new Happypack({
      id: "css",
      use: ["style-loader", "css-loader"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public/index.html"),
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "dist", "manifest.json"),
    }),
    new webpack.IgnorePlugin({
      contextRegExp: /moment$/, //匹配引入模块路径的正则表达式
      resourceRegExp: /^\.\/locale/, // 匹配模块的对应上下文，即所在目录名
    }),
  ],
};
