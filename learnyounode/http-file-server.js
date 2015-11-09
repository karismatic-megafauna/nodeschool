'use strict'
let http = require('http');
let fs = require('fs');

let server = http.createServer(function (req, res) {
  res.writeHead(200, {'contnet-type': 'text/plain'});
  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
