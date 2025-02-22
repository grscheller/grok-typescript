var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!!\n');
})

server.listen(16666, '10.54.4.180');

console.log('Server running at http://10.54.4.180:16666');
