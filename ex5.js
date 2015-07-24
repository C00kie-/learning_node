/*Ex6 Make it Modular*/
var module = require('lsmodular'),
    dirName = process.argv[2],
    ext = process.argv[3];

module(dirName, ext, function (err, files) {
    if (err) {
        console.log('error');
        return;
    }
    files.forEach(function (el) {
        console.log(el);
    });
});
