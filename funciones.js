var n = nuevoNumero();
var x = 10;
console.log("aleatorio: "+n);
console.log("contante"+x);

var total = x+ n;
console.log(total);

function nuevoNumero(){
    var numero = Math.floor(Math.random()*10);
    return numero;

}

