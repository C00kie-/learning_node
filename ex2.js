//ex2 my first I/O
/*Write a program that uses a single synchronous filesystem operation to read a file
and print the number of newlines (\n) it contains to the console (stdout), similar
 to running cat file | wc -l.*/

var fs = require('fs');
var reading;

reading = fs.readFileSync(process.argv[2]);
var str = reading.toString();
var res = str.split('\n');
//console.log(res);

//console.log(res.length);

var count = 0;
for (i = 1; i < res.length; i++)
  {
    count += 1;
  }
count = count.toString();
process.stdout.write(count);
