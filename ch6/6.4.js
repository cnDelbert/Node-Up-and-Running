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

	request.on('response', function(response){
		console.log(response.statusCode);
		response.on('data', function(){});
		response.on('end', function(){
			if (response.statusCode == 200){
				// database deleted.
				showDbs(res, "Deleted database.");
			}else{
				showDbs(res, "Could not delete database.")
			};
		});
	});
};


createDb = function(res, dbname){
	var opts = {
		host: dbHost,
		port: dbPort,
		dbpath: '/',
		method: 'PUT'
	};
	var request = http.request(opts);
	request.end();
	request.on('response', function(resp){
		resp.on('data', function(){});
		resp.on('end', function(){
			if (resp.statusCode == 201){
				showDbs(res, dbname + ' created.');
			} else {
				showDbs(res, "Could not create " + dbname);
			}
		});
	});
};

showDbs = function(res, message){
	opts = {
		host: dbHost,
		port: dbPort,
		dbpath: '/_all_dbs',
		method: 'GET'
	}
	var request = http.request(opts);
	request.end();

	request.on('response', function(response){
		var responseBody = '';
		response.on('data', function (chunk) {
			responseBody += chunk;
		});

		response.on('end', function(){
			res.writeHead(200, {'Content-type': 'text/html'});
			res.write('<form method="POST">');
			res.write('New Database Name: <input type="text" name="dbname"/>');
			res.write('<input type="submit" />');
			res.write('</form>');
			if (null != message){
				res.write("<h1>" + message + "</h1>");
			};

			res.write("<h1>Active databases:</h1>");
			res.write("<ul>");

			var dblist = JSON.parse(responseBody);
			for ( i = 0; i < dblist.length; i++){
				var dbname = dblist[i];
				res.write("<li><a href='/" + dbname +"'>" + dbname + "</a></li>");
			};
			res.write("</ul>");

			res.end();
		});
	});
};

http.createServer(function(req, res){
	if (req.method == 'POST'){
		var body = '';
		req.on('data', function(data){
			body += data;
		});
		req.on('end', function(){
			var POST = qs.parse(body);
			var dbname = POST['dbname'];

			if( null != dbname){
				createDb(res, dbname);
			} else {
				showDbs(res, "Bad DB name, could not create database.");
			};
		})
	} else {
		var path = url.parse(req.url).pathname;
		if(path != '/'){
			deleteDb(res, path);
		}else{
			showDbs(res);
		}
	}
}).listen(8080);

// works, but not as wished.