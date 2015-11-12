var concat = require('concat-stream');

process.stdin.pipe(
         concat(function (body) {
           var s = body.toString().split('').reverse().join('');
           console.log(s);
         }));

// Here's the reference solution:
//
// var concat = require('concat-stream');
//
// process.stdin.pipe(concat(function (src) {
//     var s = src.toString().split('').reverse().join('');
//     console.log(s);
// }));
