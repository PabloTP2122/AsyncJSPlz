// Promise representa un valor que puede estar disponible ahora
// en un futuro o nunca
// Una promesa tiene 3 estados
// 1.- Cuando se está ejecutando
// 2.- Cumplido
// 3.- Rechazado
// Retorna una función con dos funciones, resolve y reject
const promise = new Promise(function(resolve, reject) {
    resolve('Todo correcto');
});

// Creando una promesa y utilizando .then y .catch
const cows = 15;

const countCows = new Promise(function(resolve, reject) {
    if (cows > 10) {
        resolve(`Tenemos ${cows} vacas para ordeñar`)
    } else {
        reject('No se cuenta con las vacas suficientes')
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});

// Del playground, mi solución tosca
function delay(time, message) {
    function gretting(name) {
        console.log(`${name}`);
    }
    const delay = new Promise(function(resolve, reject) {
        if (time > 0 && message != null) {
            resolve(setTimeout(gretting, time, message));
        } else {
            reject('Falta un tiempo o un mensaje');
        }
    });

    delay.then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
}

/* delay(2000, "Hello after 2s").then((message) => console.log(message)); */
delay(2000, "Hello after 2s");

// Solución respuesta
function delay(time, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
}
delay(2000, "Hello after 2s").then((message) => console.log(message));