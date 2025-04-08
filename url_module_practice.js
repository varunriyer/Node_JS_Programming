let url = require('url');
let adr = 'https://localhost:8080/default.htm?year=2017&month=February';
let q = url.parse(adr, true); //We pass true so that it returns an object. Without true, it would return a string making it difficult to access specific parameters

console.log(q);
console.log(q.host);
console.log(q.pathname);
console.log(q.query);

let qdata = q.query;
console.log(qdata.year);
