var http = require('http');
http.createServer(function(req, res){
	// http.createClient is deprecated. Use `http.request` instead.
	var client = http.createClient(5984, '127.0.0.1');
	var request = client.request('GET', '/all_dbs');
	request.end();

	request.on('response', function(response){
		var responseBody = '';

		response.on('data', function(chunk){
			responseBody += chunk;
		});

		response.on('end', function(){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(responseBody);
			res.end();
		});
	});
}).listen(8080);