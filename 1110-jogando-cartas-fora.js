// solução individual
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const cards = lines.map((card) => Number(card));
  for (let index = 0; index < cards.length; index += 1) {
    if (cards[index] === 0) {
      break;
    } else {
      const remaining = [];
      const discarded = [];
      for (let index2 = 1; index2 <= cards[index]; index2 += 1) {
        remaining.push(index2)
      }
      while (remaining.length > 1) {
        const removed = remaining.shift()
        discarded.push(removed);
        remaining.push(remaining[0]);
        remaining.shift();
      }
      console.log(`Discarded cards: ${discarded.join(', ')}`);
      console.log(`Remaining card: ${remaining}`)
    }
}

//solução do grupo
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const integerCartas = lines.map((n) => +n);
let index = 0;
let len = integerCartas.length;
for (let i = 0; i < len; i += 1) {
  let arrayDeNumber= [];
  let n = integerCartas[index];
  if(integerCartas.length + 1 && n) {
    for (let i = 1; i <= n; i += 1) {
      arrayDeNumber.push(i);
    }
    const descartas = [];
    do {
    descartas.push(arrayDeNumber.shift())
    arrayDeNumber.push(arrayDeNumber.shift())
    } while (arrayDeNumber.length > 1);
    console.log(`Discarded cards: ${descartas.join(', ')}`)
    console.log(`Remaining card: ${arrayDeNumber[0]}`)
    index = index + 1;
  }
}