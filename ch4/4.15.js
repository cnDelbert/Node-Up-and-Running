var qs = require('querystring');
var myObj = { a: '1', 'b': '2', c: 'dog', 'func': function(){console.log('cats')} }
enc = qs.encode(myObj);
console.log(enc);
// a=1&b=2&c=dog&func=
// 属性应该是 string, Bollean, number 当中的一种，否则不会被序列化