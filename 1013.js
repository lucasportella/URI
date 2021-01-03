input = require('fs').readFileSync('stdin','utf-8');
lines = input.split(' ').map(item => parseInt(item));
BiggerAB = (lines[0] + lines[1] + Math.abs(lines[0] - lines[1]))/2;
BiggerABC = (BiggerAB + lines[2] + Math.abs(BiggerAB - lines[2]))/2;
console.log(BiggerABC + ' eh o maior');
