//ex4
/*

Create a program that prints a list of files in a
given directory, filtered by the extension of the files.
You will be provided a directory name as the first argument
to your program (e.g. '/path/to/dir/') and a file extension
to filter by as the second argument.

For example, if you get 'txt' as the second argument then you
  will need to filter the list to only files that end with
.txt. Note that the second argument will not come prefixed
with a '.'.

The list of files should be printed to the console,
  one file per line. You must use asynchronous I/O.
*/
var fs = require('fs');
var path2 = require('path');

function readDir(){
  fs.readdir(process.argv[2], function (err, list){
  if (err)
  {
    return console.log('error')
  }
    console.log('dat callback part');
    var ext = '.' + process.argv[3];
    var path = process.argv[2];

     console.log(path);
     console.log(ext);

    var i = 0;
    while (i <= list.length)
    {
    //  console.log(list);
    //  console.log(list[i]);
    //  console.log(ext);
    //  console.log(path2.extname(list[i]));
      if (ext == path2.extname(list[i]))
        console.log(list[i]);
      i++;
    }
})
}

console.log('dat fuckkkk ls');
readDir();
