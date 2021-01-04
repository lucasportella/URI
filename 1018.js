var input = require('fs').readFileSync('stdin','utf-8');
var cem = Math.floor(input/100);
var cinquenta = Math.floor((input%100)/50);
var vinte = Math.floor(((input%100)%50)/20);
var dez = Math.floor((((input%100)%50)%20)/10);
var cinco = Math.floor(((((input%100)%50)%20)%10)/5);
var dois = Math.floor((((((input%100)%50)%20)%10)%5)/2);
var um = Math.floor(((((((input%100)%50)%20)%10)%5)%2)/1);

console.log(parseInt(input));

console.log(cem + ' nota(s) de R$ 100,00');

console.log(cinquenta + ' nota(s) de R$ 50,00');

console.log(vinte + ' nota(s) de R$ 20,00');

console.log(dez + ' nota(s) de R$ 10,00');

console.log(cinco + ' nota(s) de R$ 5,00');

console.log(dois + ' nota(s) de R$ 2,00');

console.log(um + ' nota(s) de R$ 1,00');
