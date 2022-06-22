// 导入 http 模块
const http = require('http');

// 导入 fs 文件模块
const fs = require('fs');

// 导入 path 模块
const path = require('path');

// 创建 web 服务器
const server = http.createServer();

// 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // req.url 请求的路径
    // 把请求的 url 地址映射为具体文件的存放路径
    const url = req.url;

    // 优化路径
    let fpath = '';
    if(url == '' || url == '/') {
        fpath = path.join(__dirname, './clock/index.html');
    } else {
        fpath = path.join(__dirname, './clock/', url);
    }

    // 根据映射路径读取文件
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if(err) return res.end('<h1 style="text-align: center">404 Not Found!</h1>');
        res.end(dataStr);
    })
    // req.method 请求方式

})

// 启动服务器
server.listen(80, () => {
    console.log('Server running at http://127.0.0.1');
})
