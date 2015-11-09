'use strict'
let fs = require('fs');
let path = require('path');
let dirStart = process.argv[2];
let desiredExt = '.' + process.argv[3];

fs.readdir(dirStart, function filterFiles( err, dirs ){
  if(err) {throw err;}
  dirs.map(function(dir){
    if(path.extname(dir) !== desiredExt ){ return };
    console.log(path.basename(dir));
  });
});
