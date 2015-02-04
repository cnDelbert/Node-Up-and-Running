process.on('uncaughtException', function(err){
	console.log('Caught Exception: ' + err);
});

setTimeout(function(){
	console.log('This will still run.');
}, 500);

nonexistFunction();
console.log('This will not run.');