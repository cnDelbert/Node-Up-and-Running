var dns = require('dns');

dns.resolve('gmail.com', 'MX', function(err, res){
	if(err){
		console.log(err);
	}
	console.log(res);
});

dns.resolveMx('gmail.com', function(err, res){
	if(err){
		console.log(err);
	}
	console.log(res);
});

// x in .resolveMx should be lowercase.

dns.lookup('google.com', 4, function(e, a){
	console.log(a);
})