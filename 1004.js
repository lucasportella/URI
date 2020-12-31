input = require('fs').readFileSync('stdin','utf-8');
lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
PROD = A * B;
console.log('PROD = ' + PROD);
