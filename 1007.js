input = require('fs').readFileSync('stdin','utf-8')
lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());
var diferenca = (A * B - C * D);
console.log('DIFERENCA = ' + diferenca);
