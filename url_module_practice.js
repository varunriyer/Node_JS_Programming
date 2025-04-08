var url = require('url');
var adr = 'https://localhost:8080/default.htm?year=2017&month=February';
var q = url.parse(adr, true); //We pass true so that it returns an object. Without true, it would return a string making it difficult to access specific parameters

console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);

var qdata = q.query;
console.log(qdata.year);
