var crypto = require('crypto');
var fs = require('fs');

var pem = fs.readFileSync('file/key.pem');
var key = pem.toString('ascii');

var hmac = crypto.createHmac('sha1', key);
hmac.update('foo');
hmac_sha1 = hmac.digest('hex');

console.log(pem);
console.log(key);
console.log(hmac_sha1)