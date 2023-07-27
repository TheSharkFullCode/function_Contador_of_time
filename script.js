/*
Crea una variable counter.
Usa el método correcto para conseguir que a la variable counter se le sume 1 cada 2 segundos y haz que se pare cuando la variable tenga un valor de 10.
Haz un log de la variable counter cada 5 segundos y que se pare también cuando la variable tenga un valor de 10.
*/
let counter = 0;

const interval = setInterval(() => {
    counter++;

    if (counter === 1 || counter === 5) {
        console.log(Number(counter));
        // si es uno u cinco lo imprime en pantalla
    } else if (counter === 10) {
        clearInterval(interval);
        console.log(`fin ${Number(counter)}`);
    }
}, 2000);



// Hello World-----------------------------------------------------------------------
/*
Crea una variable greeting que tenga como valor "World".
Haz una función sayHi que reciva un texto como parámetro y que dentro tenga un log que muestre la variable greeting.
Usa el método correcto para hacer que la variable greeting cambie su valor por "Hello World" después de 3 segundos.
llama a la función sayHi justo después (debajo) del método del paso anterior.
Intenta que el log muestre Hello World

*/

//   console.log(`${texto}, ${greeting}`);
let greeting = "World";
let hello = 'hellow'

 function sayHi(texto) {
    console.log(greeting);

    setTimeout(()=>{
        console.log(`${texto} ${greeting}`);
       

    },3000)
}


sayHi(hello)


 


// La empresa de Otniel-----------Ejercicio 3--------------------------------------
/*
Crea una variable state que tenga como valor "contratado".
Crea otra variable time con valor de 1000.
Usa un método que cada time muestre por consola la variable state.

Haz que a los 3 segundos la variable state cambie su valor por "despedido"
 y la variable time cambie por el triple de lo que tenga.
haz que la variable state cambie su valor a "contratado" a los 10 segundos.
Haz que el método se pare a los 15 segundos y muestre de nuevo la variable state.
*/

let state = 'contratado'
let time=1000;


function Showtime(state,time) {
    
    setTimeout(()=>{
        console.log(state);
    },time)
}

Showtime(state,time)
// ---------------------------------------------
function despedido(state,time) {

    const intervalses =setInterval (() => {
        console.log(state);

    },time)

    setTimeout(() => {
        clearInterval(intervalses)        
    }, time);
}
despedido('despedido',time)




