# TYPESCRIPT入门
### 1.初始化文件

​	`npm init -y`

### 2.安装全局 typescript tslint

​	`npm install typescript tslint`

### 3. 初始化ts文件

​	`tsc --init`

### 4.修改 package.json 入口文件

```javascript
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "./src/index.ts",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "cross-env": "^7.0.2",
    "html-webpack-plugin": "^3.2.0",
    "ts-loader": "^6.2.1",
    "typescript": "^3.8.3",
    "webpack": "^4.42.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.10.3"
  }
```

### 5.安装webpack

​	`npm install webpack webpack-cli webpack-dev-server -D`

### 6.创建webpack配置文件并初始化

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
//CleanWebpackPlugin 已经更新，需要{}接收
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

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
        rules: [{
            test: /\.tsx?$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
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
        //自定义模板渲染,需要手动创建
        new HtmlWebpackPlugin({
            template: "./src/template/index.html"
        })
    ]
};
```

### 7.开始运行

#### start命令比较特殊，可直接通过npm start运行，不需要npm run start

​	`npm start`



​	