var fs = require("fs");

var data = fs.readFileSync('input.txt');

//Blocking 방식
//console.log(data.toString());

//None-Blocking 방식
fs.readFile('input.txt', function(err, data){
  if (err) return console.error(err);
  console.log(data.toString());
})

console.log("Program has ended");
