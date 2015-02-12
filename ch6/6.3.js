var http = require('http');

var opts = {
	host: '127.0.0.1',
	port: '5984',
	path: '/dbname',
	method: 'DELETE'
}

http.request(opts, function(response){
	console.log(response.statusCode);
	response.on('data', function(){});
	response.on('end', function(){
		console.log('Deleted.');
	})
}).end();