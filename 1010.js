input = require('fs').readFileSync('stdin','utf-8');
lines = input.split('\n');
line1 = lines[0].split(' ')
line2 = lines[1].split(' ')

productCode1 = parseInt(line1.shift());
numberOfUnits1 = parseInt(line1.shift());
priceOfProduct1 = parseFloat(line1.shift());

productCode2 = parseInt(line2.shift());
numberOfUnits2 = parseInt(line2.shift());
priceOfProduct2 = parseFloat(line2.shift());

amountToBePaid = ((numberOfUnits1 * priceOfProduct1)+(numberOfUnits2 * priceOfProduct2));
console.log('VALOR A PAGAR: R$ ' + amountToBePaid.toFixed(2));
