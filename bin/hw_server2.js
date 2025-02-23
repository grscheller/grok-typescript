var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!!!\n');
})

server.listen(8007, '::1');

console.log('Server running at http://::1:8007');
