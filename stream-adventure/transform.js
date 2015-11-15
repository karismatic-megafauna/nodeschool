var through = require('through2');

process.stdin.pipe(
  through(function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  }, function end(done) {
    done();
  })
).pipe(process.stdout);

// Here is the reference solution:
// they did it a little better by pulling out the through2 def
//
// var through = require('through2');
// var tr = through(function (buf, _, next) {
//   this.push(buf.toString().toUpperCase());
//   next();
// });
// process.stdin.pipe(tr).pipe(process.stdout);
