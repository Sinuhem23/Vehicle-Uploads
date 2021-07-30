var prompt = require('prompt-sync')();

var n = prompt('How many times loop should run?');

for (var i = 1; i <= n; i++) {
  console.log(i);
}
