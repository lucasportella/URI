var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const result = lines[1].split(' ');

let mult2 = 0;
let mult3 = 0;
let mult4 = 0;
let mult5 = 0;


const numbers = result.map((number) => Number(number));

numbers.forEach((number) => {
    number % 2 === 0 ? mult2 += 1 : mult2
    number % 3 === 0 ? mult3 += 1 : mult3
    number % 4 === 0 ? mult4 += 1 : mult4
    number % 5 === 0 ? mult5 += 1 : mult5

})

console.log(`${mult2} Multiplo(s) de 2`);
console.log(`${mult3} Multiplo(s) de 3`);
console.log(`${mult4} Multiplo(s) de 4`);
console.log(`${mult5} Multiplo(s) de 5`);
