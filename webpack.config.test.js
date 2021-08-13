// 单独打包 react 和 react-dom, 开发时引入打包好的文件,这样就不用重新打包了
const path = require("path");
module.exports = {
  entry: {
    test: "./src/test.js",
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    library: "testLibraryName",
  },
  plugins: [],
};
