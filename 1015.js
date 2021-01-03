var input = require('fs').readFileSync('stdin','utf-8');
lines = input.split('\n');

var line1 = lines[0].split(' ');
var line2 = lines[1].split(' ');

var x1 = parseFloat(line1[0]);
var y1 = parseFloat(line1[1]);
var x2 = parseFloat(line2[0]);
var y2 = parseFloat(line2[1]);
distance = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));
console.log(distance.toFixed(4));