var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
var hours = lines.shift();
var speed = lines.shift();
var distance = hours * speed;
var liters = distance / 12;
console.log(liters.toFixed(3));
