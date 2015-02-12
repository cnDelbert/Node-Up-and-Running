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
	var request = http.request(opts).end();

	request.on('response', function(res){
		console.log(res.statusCode);
		res.on('data', function(){});
		res.on('end', function(){
			if (res.statusCode == 200){
				// database deleted.
				showDbs(res, "Deleted database.");
			}else{
				showDbs(res, "Could not delete database.")
			};
		});
	});
};
// deleteDb();

createDb = function(res, dbname){
	var opts = {
		host: dbHost,
		port: dbPort,
		dbpath: '/',
		method: 'PUT'
	};
	var request = http.request(opts).end();

	request.on('response', function(res){
		res.on('data', function(){});
		res.on('end', function(){
			if (res.statusCode == 201){
				showDbs(res, dbname + ' created.');
			} else {
				showDbs(res, "Could not create " + dbname);
			}
		});
	});
};
