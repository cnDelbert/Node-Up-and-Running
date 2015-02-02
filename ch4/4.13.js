var url = require("url");
var myUrl = "http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash";
console.log(myUrl);

parsedUrl = url.parse(myUrl);
console.log(parsedUrl);

parsedUrl = url.parse(myUrl, true);
console.log(parsedUrl);

/*
http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.nodejs.org',
  port: null,
  hostname: 'www.nodejs.org',
  hash: '#alsoahash',
  search: '?with=query&param=that&are=awesome',
  query: 'with=query&param=that&are=awesome',
  pathname: '/some/url/',
  path: '/some/url/?with=query&param=that&are=awesome',
  href: 'http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash' }
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.nodejs.org',
  port: null,
  hostname: 'www.nodejs.org',
  hash: '#alsoahash',
  search: '?with=query&param=that&are=awesome',
  query: { with: 'query', param: 'that', are: 'awesome' },
  pathname: '/some/url/',
  path: '/some/url/?with=query&param=that&are=awesome',
  href: 'http://www.nodejs.org/some/url/?with=query&param=that&are=awesome#alsoahash' }
*/