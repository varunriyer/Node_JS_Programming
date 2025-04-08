let fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


//Therefore the appendfile() adds the content specified content at the end of the specified file
//Whereas the the writefile() replaces the specified file and content
