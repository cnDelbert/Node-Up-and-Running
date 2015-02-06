var cp = require('child_process');

// call cat/ls command.
var cat = cp.spawn('ls');

cat.stdout.on('data', function(data){
	console.log(data.toString());
});

cat.on('exit', function(){
	console.log('Say Goodbye.');
});

cat.stdin.write('meow');
cat.stdin.end();