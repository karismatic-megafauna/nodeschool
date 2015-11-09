var http = require('http');
var url = require('url');

function getTime(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function getUnixTime(time) {
  return {
    unixtime: time.getTime()
  }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, 'true');
  var time = new Date(parsedUrl.query.iso);
  var data;

  if("/api/parsetime" == parsedUrl.pathname){
    data = getTime(time);
  } else if ("/api/unixtime" == parsedUrl.pathname){
    data = getUnixTime(time);
  }

  res.writeHead(200, { 'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
});

server.listen(Number(process.argv[2]));
