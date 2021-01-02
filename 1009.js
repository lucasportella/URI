var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
var name = lines.shift();
var fixedSalary = parseFloat(lines.shift());
var totalSold = parseFloat(lines.shift());
var finalSalary = parseFloat(fixedSalary + (totalSold * 0.15));
console.log('TOTAL = R$ ' + finalSalary.toFixed(2));
