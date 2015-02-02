var fs = require('fs');
var filehandle = fs.readFile('file/4.3.txt', function(err, data){
	console.log(data);
});
// <Buffer 54 68 69 73 20 69 73 20 61 20 74 65 73 74 20 74 65 78 74 20 66 69 6c 65 2e 0a>