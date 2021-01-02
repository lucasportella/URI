var input = require('fs').readFileSync('stdin','utf-8');

var [A, B, C] = input.split(' ');
A = parseFloat(A);
B = parseFloat(B);
C = parseFloat(C);

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
