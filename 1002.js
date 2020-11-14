var input = require("fs").readFileSync("stdin", "utf8");

var valores = input.split("\n");
var r = parseFloat(valores.shift());
var n = 3.14159;
var area = n * Math.pow(r, 2);
console.log("A=" + area.toFixed(4));