// Callback: Función que pasa como argumento otra función
// y dentro es utilizada 
function sum(num1, num2) {
    return num1 + num2;
}

function mult(num1, num2) {
    return num1 * num2;
}
// Se recibe una función como argumento (callback) 
// y se llama para retornarla dentro
function calc(num1, num2, funALlamar) {
    return funALlamar(num1, num2);
}

console.log(calc(2, 2, sum));
console.log(calc(2, 4, mult));

// Elementos de javascript que utilizan callbacks
// setTimeout por si misma ya es un callback
setTimeout(function() {
    console.log('Quiubole');
}, 2000);

function gretting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Pablo');

// De playground reto
// En este desafío tienes que crear una 
// función que reciba un callback pero este tiene 
// que ser ejecutado 2s despues.

function runCode(callback) {
    // Tu código aquí 👈
    return setTimeout(callback, 2000);
}