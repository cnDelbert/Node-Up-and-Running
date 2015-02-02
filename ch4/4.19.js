var fs = require('fs');

fs.readFile('file/4.4.txt', function(err, data){
	console.log('Content: ' + data);
	fs.unlink('file/4.4.txt');
});

// fs.unlink() would delete a file.