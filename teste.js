const { type } = require('os');

var input = require('fs').readFileSync('stdin','utf-8');
lines = input.split('\n');

var [x1,y1] = lines[0].split(' ');
var [x2,y2] = lines[1].split(' ');

distance = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2));
console.log(distance.toFixed(4));
