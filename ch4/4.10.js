var http = require('http');

var opts = {
	host: 'baidu.com',
	port: 80,
	path: '/',
};

var req = http.get(opts, function(res){
	console.log(res);
	res.setEncoding('utf8');
	res.on('data', function(data){
		console.log(data);
	});
});