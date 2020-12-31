var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');
var A = lines.shift();
var B = lines.shift();
var A = parseInt(A);
var B = parseInt(B);
var SOMA = A + B;
console.log("SOMA = " + SOMA);
