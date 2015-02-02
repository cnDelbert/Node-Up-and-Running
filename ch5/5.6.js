var crypto = require('crypto');
var sha1 = crypto.createHash('sha1');

sha1.update('foo');
sha1.update('bar');
console.log(sha1.digest('hex'));
// After digest, a new Hash object should be created.

var sha1 = crypto.createHash('sha1');
sha1.update('foobar');
console.log(sha1.digest('hex'));

// The two values are equal.