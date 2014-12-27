var http = require('http')
http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello World\n')
    }).listen(8124, "127.0.0.1") // If 127.1, will get an ENOTFOUND error.

console.log('Server is running at http://localhost:8124/')
