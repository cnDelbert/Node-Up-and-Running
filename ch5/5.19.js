process.stdin.resume();

process.on('SIGINT', function() {
	console.log('Got SIGINT. Press Ctrl + D to exit.');
});

// Not work as expected.
