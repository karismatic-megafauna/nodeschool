var filterFiles = require('./filterFiles');
var start = process.argv[2];
var ext = process.argv[3];

filterFiles( start , ext , function(err, dirs){
  if(err) {
    return console.error('There was an error:', err) 
  }
  dirs.map(function(dir){
    console.log(dir);
  });
});
