var qs = require('querystring');
var myObj = { a: '1', 'b': '2', c: 'dog', 'func': function(){console.log('cats')} }
enc = qs.encode(myObj);
console.log(enc);