"use strict";

/*

x Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). */

const nmrKm = parseInt(prompt('Quanti KM vuoi percorrere?'));
const passengerAge = parseInt(prompt('Quanti anni hai?'));

// console.log(nmrKm, passengerAge);

const price = 0.21;
const totalPrice = (price * nmrKm);

// console.log(totalPrice);

let ds20 = totalPrice * 0.2;
let ds40 = totalPrice * 0.4;

// console.log(ds20);
if(passengerAge < 18){
    let total = (totalPrice - ds20);
    
// console.log(total);
} else if(passengerAge > 65){
    let total = (totalPrice - ds40);
// console.log(total);
} else{
    let total = totalPrice;
// console.log(total);
}


// let fix = total.toFixed(2);
