"use strict";

/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). */

const nmrKm = parseInt(prompt('Quanti KM vuoi percorrere?'));
const passengerAge = parseInt(prompt('Quanti anni hai?'));

// console.log(nmrKm, passengerAge);

if(isNaN(nmrKm) || isNaN(passengerAge)) {
    alert('Inserisci numeri!');
}

const price = 0.21;
const totalPrice = price * nmrKm;

// console.log(totalPrice);

let ds20 = totalPrice * 0.2;
let ds40 = totalPrice * 0.4;

// console.log(ds20);

let total;

if(passengerAge < 18){
    total = (totalPrice - ds20);
// console.log(total);
} else if(passengerAge >= 65){ //compresi anche i 65enni
    total = (totalPrice - ds40);
// console.log(total);
} else{
    total = totalPrice;
// console.log(total);
}
total.toFixed(2);

// console.log(total.toFixed(2));

let finalPrice = `
    <div class="fs-3">La tua età: ${passengerAge}</div>
    <div class="fs-3">Il costo del tuo biglietto: ${total.toFixed(2)}€</div>
    <div class="pt-2">Se hai meno di 18 anni hai uno sconto del <span class="red">20%!</span>
    <div>Se hai più di 65 anni hai uno sconto del <span class="red">40%!</span>
`;

const element = document.getElementById('ticket-price').innerHTML = finalPrice;

// console.log(element);