//ex4 first async I/O

/*

Write a program that uses a single asynchronous filesystem operation to read
a file and print the number of newlines it contains to the console (stdout),
similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line
argument.
*/
var fs = require('fs')

function get_line(){
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
        if (err)
            return console.error(error)

        var res = data.split('\n');
        var count = res.length - 1;
        console.log(count);
      })
}

get_line()
