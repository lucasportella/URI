var input = require('fs').readFileSync('stdin','utf-8');
var lines = input.split('\n');
var employeeNumber = parseInt(lines.shift());
var workedHours = parseInt(lines.shift());
var moneyPerHour = parseFloat(lines.shift());
var salary = workedHours * moneyPerHour;
console.log('NUMBER = ' + employeeNumber);
console.log('SALARY = U$ ' + salary.toFixed(2));