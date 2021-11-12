const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const rf = require("fs");
const config = require('./webpack.config.js');

const compiler = webpack(config);
const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
   publicPath: config.output.publicPath
}));

// 静态文件路径
app.use(express.static('assets'));

// ‘/lift’路径欧联项目需路径
app.use(express.static('src/ol-data-monitors'));

// 路径默认'/index'
// app.get('/', function (req, res) {
//    res.redirect('/index')
// })

// 设置demo文件夹下的html文件的文件名为路由路径（get）
rf.readdirSync('./src/demo').filter(function (f) {
   return f.indexOf('.html') != -1
}).forEach(function (n) {
   var path = n.substring(0, n.length - 5)
   app.get('/' + path, function (req, res) {
      res.sendFile(__dirname + "/src/demo/" + path + ".html");
   })
})

// E电梯项目
app.get('/lift', function (req, res) {
   res.sendFile(__dirname + "/src/ol-data-monitors/index.html")
})

// 使用 nodemon 进行开发自动重启服务
// 需自重启：nodemon server.js
// 不需要自启动：node server.js
var server = app.listen(8082, function () {
   // console.log("应用实例，访问地址为 http://%s:%s", server.address().address, server.address().port)
})