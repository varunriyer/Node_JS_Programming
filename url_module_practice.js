var url = require('url');
var adr = 'https://localhost:8080/default.htm?year=2017&month=February';
var q = url.parse(adr, true); //We pass true so that it returns an object. Without true, it would return a string making it difficult to access specific parameters

console.log(q);
console.log(q.path);
console.log(q.pathname);
console.log(q.slashes)
console.log(q.port);
console.log(q.href);
console.log(q.host);
console.log(q.hash);
console.log(q.auth);
console.log(q.hostname);
console.log(q.protocol);
console.log(q.search);
console.log(q.query);