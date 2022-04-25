'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
let suma = 0;
let separado = num.split("").reverse();
for(var i = 0; i < separado.length; i++){
  let factor = 2**i;
  suma += factor * separado[i];
}
return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
let suma = "";
while(num !== 0){
  suma = (num % 2) + suma; 
  num = Math.floor( num / 2);
}
return suma;
}
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
