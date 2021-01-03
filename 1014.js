var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n')
var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());

var averageConsumption = X/Y;
console.log(averageConsumption.toFixed(3) + ' km/l');
