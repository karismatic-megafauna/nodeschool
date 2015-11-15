var through = require('through2');

process.stdin.pipe(
  through(function write(buf, _, next) {
    this.push(buf.toString().toUpperCase());
    next();
  }, function end(done) {
    done();
  })
).pipe(process.stdout);
