//ex5 filtered LS

var fs = require('fs');
	path = require('path');

console.log(process.argv);
function readDir(){
	fs.readdir(process.argv[2], function (err, list){
      if (err){
			console.log('error');
			return;
		}
	var ext = '.' + process.argv[3];
	var i = 0;
    while (i <= list.length)
    {
      if (ext == path.extname(list[i]))
        console.log(list[i]);
      i++;
    }
})
}

readDir();
