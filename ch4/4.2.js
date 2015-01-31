// http://www.curiousattemptbunny.com/2011/10/nodejs-error-cannot-find-module-utils.html
// change 'utils' to 'util'
var utils = require('util'),
	EventEmitter = require('events').EventEmitter;

var Server = function(){
	console.log('init');
}

utils.inherits(Server, EventEmitter);

var s = new Server();

s.on('abc', function(){
	console.log('abc')
})

s.emit('abc');