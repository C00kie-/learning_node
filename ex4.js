//ex4 filtered LS

var fs = require('fs');
var path2 = require('path');

function readDir(){
    fs.readdir(process.argv[2], function (err, list){
      if (err)
        return console.log('error')

    var ext = '.' + process.argv[3];
    var path = process.argv[2];

    var i = 0;
    while (i <= list.length)
    {
      if (ext == path2.extname(list[i]))
        console.log(list[i]);
      i++;
    }
})
}

readDir();
