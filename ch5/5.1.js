var dns = require('dns');

dns.resolve('google.com', 'AAAA', function(err, res){
	if(err){
		console.log(err);
	}
	console.log(res);
});