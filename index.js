
let nombre = prompt ("Ingresa tu nombre");

const numero = Math.round(Math.random() * (11-0));
if(numero === 1){
    alert(" Elige dos compañeros mas y tome cada quien un shot");
} else if (numero ===2){
    alert(nombre + " Verdad o reto");
} else if (numero === 3){
    alert(nombre + " Yo nunca nunca");
} else if(numero === 4){
    alert(nombre + " Toma 4 segundos de la botella");
} else if (numero ===5){
    alert(nombre + " Puedes poner una regla que todos deben cumplir Ej. Nadie puede ir al baño, el castigo se puede anular hasta que alguien mas saque de nuevo un 5");
} else if (numero ===6){
    alert(nombre + " Te casas con alguien. Los castigos que te toquen de igual manera los tendrá que hacer la otra persona y vicerversa con los castigos que el tenga.");
} else if (numero ===7){
    alert(nombre + " Elige un esclavo. A quien escojas debe hacer todo lo que tu le ordenes.");
} else if (numero ===8){
    alert (nombre + " Tira de nuevo");
} else if (numero ===9){
    alert (nombre + " Toma un trago de cada bebida de tus compañeros.");
} else {
    alert (nombre +  " Te has salvado, pasa tu turno.");
}
