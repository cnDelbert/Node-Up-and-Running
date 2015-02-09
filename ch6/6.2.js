var http = require('http');

var opts = {
	host: '127.0.0.1',
	port: '5984',
	path: '/dbname',
	method: 'PUT'
}

var callback = function(res){
	console.log(res.statusCode)
	res.on('data', function(chunk){
		console.log(chunk.toString)
		console.log('data');
	})
	// TODO: why not run here?
	res.on('close', function(){
		console.log('111111111')
		if(res.statusCode == 201){
			console.log('Database successfully created.')
		} else {
			console.log('Fail to create the database.')
		}
	});
};

http.request(opts, callback).end();
// if no end() method, it would be wrong for the next time.