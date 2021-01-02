input = require('fs').readFileSync('stdin','utf-8');
files = input.split('\n')
line1 = files[0]
line1 = line1.split(' ')
A = parseFloat(line1.shift());
B = parseFloat(line1.shift());
C = parseFloat(line1.shift());
TRIANGULO = (A * C) /2.0;
CIRCULO = 3.14159 * Math.pow(C, 2);
TRAPEZIO = ((A + B)* C)/2.0;
QUADRADO = B * B;
RETANGULO = A * B;

console.log('TRIANGULO: ' + TRIANGULO.toFixed(3));
console.log('CIRCULO: ' + CIRCULO.toFixed(3));
console.log('TRAPEZIO: ' + TRAPEZIO.toFixed(3));
console.log('QUADRADO: ' + QUADRADO.toFixed(3));
console.log('RETANGULO: ' + RETANGULO.toFixed(3));