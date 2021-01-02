input = require('fs').readFileSync('stdin','utf-8');
lines = input.split('\n');
radius = parseFloat(lines.shift());
sphere = (4.0/3) * 3.14159 * (radius**3);
console.log('VOLUME = ' + sphere.toFixed(3));
