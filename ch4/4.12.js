var options = {
	host: 'www.example.com',
	port: 80,
	path: '/submit',
	method: 'POST'
};

var req = http.request(options, function(res){
	res.setEncoding = 'utf8';
	res.on('data', function(chunk){
		console.log('BODY:' + chunk);
	});
});

req.write("my data");
req.write("More of my data");
req.end();

// Would not work