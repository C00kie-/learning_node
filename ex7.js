//ex8 http collect

var http = require('http')
/*
const bufferList = require('bl')
var url = process.argv[3]

data.length
data
var bl = new bufferList()
bl.append(new bufferList(...))

http.get(url, function (res) {
  res.on('error', console.error)
    res.on('data', function (data) {
        console.log(data.toString.length)
        console.log(data.toString)
    });
});
*/
http.get(process.argv[2], function (res) {
  var fullText = '';
  res.setEncoding('utf8');
  res.on('data', function (data) {
    fullText += data;
  });
  res.on('end', function () {
    console.log(fullText.length);
    console.log(fullText);
  });
});
