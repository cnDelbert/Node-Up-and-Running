var http = require('http');
var server = http.createServer(function(req, res){
	res.writeHead(200, {});
	res.end('foo');
	console.log('http response');
	process.nextTick(function(){
		console.log('tick');
	});
});

server.listen(8080);