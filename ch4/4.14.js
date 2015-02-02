var qs = require('querystring');
qsed = qs.parse('a=1&b=2&c=d');
console.log(qsed);
// { a: '1', b: '2', c: 'd' }