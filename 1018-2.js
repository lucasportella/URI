var input = require('fs').readFileSync('stdin','utf-8');
let valor = parseInt(input);
const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(parseInt(input));

for (let nota of notas) {
    let qtdNotas = parseInt (valor / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
    valor = parseInt(valor%nota);
}
