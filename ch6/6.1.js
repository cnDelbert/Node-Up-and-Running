var http = require('http');

// Start CouchDB first.
var server = http.createServer(function(req, res){
	// http.createClient is deprecated. Use `http.request` instead.
	// var client = http.createClient(5984, '127.0.0.1');
	// var request = client.request('GET', '/all_dbs');	

	req = http.request(clientOpts, function(res){
		console.log('Inside request');
	});
	req.end();

	req.on('response', function(response){
		var responseBody = '';

		response.on('data', function(chunk){
			responseBody += chunk;
		});

		response.on('end', function(res){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(responseBody);
			res.end();
		});

		response.on('error', function(e){
			console.log(e);
		});
	});

	req.on('error', function(e){
		console.log('Problem: ' + e);
	});

});

var clientOpts = {
	hostname: 'localhost',
	port: 5984,
	path: '/all_dbs',
	method: 'GET'
}

req = http.request(clientOpts, function(response){
	console.log('Inside request');

	var responseBody = '';

	response.on('data', function(chunk){
		responseBody += chunk;
	});

	response.on('error', function(e){
		console.log(e);
	});

}).end();

server.listen(8080);