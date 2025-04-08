var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Created this new file on its own !!!', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); 