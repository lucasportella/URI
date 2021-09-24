// tirar o ponto
// cuidar variável lines e o \n invertido
var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');
let number = Number(lines[0]);
const hours = parseInt((number / 60) / 60);
const minutes = parseInt((number / 60) % 60);
const seconds = parseInt(number % 60);
console.log(`${hours}:${minutes}:${seconds}`);
