const HtmlWebpackPlugin = require("html-webpack-plugin");
//CleanWebpackPlugin 已经更新，需要{}接收
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 入口文件
  entry: "./src/index.ts",
  //编译后输出文件
  output: {
    filename: "main.js"
  },
  //自动添加后缀
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  //自定义规则，进行编译
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  //不同环境使用不同类型
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  //定义server端参数
  devServer: {
    //输出文件
    contentBase: "./dist",
    //报错提示等级
    stats: "errors-only",
    host: "localhost",
    port: 8089
  },
  plugins: [
    //三方插件
    //清除编译后的生成文件夹
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"]
    }),
    //自定义模板渲染
    new HtmlWebpackPlugin({
      template: "./src/template/index.html"
    })
  ]
};
