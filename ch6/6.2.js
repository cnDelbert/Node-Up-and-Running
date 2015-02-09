var http = require('http');

var opts = {
	host: '127.0.0.1',
	port: '5984',
	path: '/dbname',
	method: 'PUT'
}

var callback = function(res){
	console.log(res.statusCode)

	// TODO: why not run here?
	res.on('end', function(){
		if(res.statusCode == 201){
			console.log('Database successfully created.')
		} else {
			console.log('Fail to create the database.')
		}
	})
};

var request = http.request(opts, callback);
request.end();
// if no end() method, it would be wrong for the next time.