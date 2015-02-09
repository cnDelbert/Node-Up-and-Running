var http = require('http');

// Start CouchDB first.
var server = http.createServer(function(req, res){
	// http.createClient is deprecated. Use `http.request` instead.

	var clientOpts = {
		hostname: 'localhost',
		port: 5984,
		path: '/_all_dbs',
		method: 'GET'
	};

	var callback = function(response){
		var responseBody = '';
		console.log('STATUS: ' + response.statusCode);
		console.log('HEADERS: ' + JSON.stringify(response.headers));
		response.setEncoding('utf8');

		response.on('data', function(chunk){
			responseBody += chunk;
		});

		response.on('end', function(){
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.write(responseBody);
			res.end();
		});

		response.on('error', function(e){
			console.log(e);
		});
	};

	http.request(clientOpts, callback).end();
}).listen(8080);

// rewrite with http.request().