var express = require('express');
var app = express();

// 静态文件路径
app.use(express.static('assets'));
 

app.get('/', function (req, res) { 
   res.send('Hello World');
})

app.get('/index', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "index.html" );  // 首页
})

app.get('/swiper_demo', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "index2.html" );  // swiper demo 
})

app.get('/refresh', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "refresh.html" );  // 下拉刷新
})

app.get('/fix_top', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "fix_top.html" );  // 吸顶
})

app.get('/getAttribute', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "getAttribute.html" );  // getAttribute
})

app.get('/column_count', function (req, res) { 
   res.sendFile( __dirname + "/index/" + "column_count.html" );  // column count
})


app.use(express.static('assets'));  // 静态资源
 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})


// var http = require("http");
// var fs = require("fs");
// var path = require("path");
// var url = require("url")

// http.createServer(function (req, res) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     // response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     // response.end('Hello World\n');

//     var realurl = "http://" + req.headers.host + req.url; //获取完整的路由
//     var Objurl = url.parse(realurl); //将路由转化成对象

//     switch (Objurl.pathname) { 
//         case "/index":
//             // 如果载入的静态页面中的css和js是使用外部链接的，则相当于请求了两次服务器
//             fs.readFile("./index.html", "utf8", function (err, data) {
//                 if (err) throw err;
//                 res.end(data);
//             })
//             break;
//      }

// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');