var http = require('http');
var qs = require('querystring');
var url = require('url');

var dbHost = '127.0.0.1';
var dbPort = 5984;

deleteDb = function(res, dbpath){
	var opts = {
		host: dbHost,
		port: dbPort,
		path: dbpath,
		method: 'GET'
	};
	var request = http.request(opts);
	request.end();

	request.on('response', function(res){
		console.log(res.statusCode)
		res.on('data', function(){})
		res.on('end', function(){
			console.log('In');
			if (res.statusCode == 200){
				console.log('Done');
				// TODO
			}else{
				console.log('FAIL');
				// TODO
			};
		});
	});
};
deleteDb();