// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Chiedo all'utente se pari o dispari
const userEvenOrOddChoice = prompt('Pari o dispari?');
console.log('Hai scelto', userEvenOrOddChoice);

// Chiedo all'utente di inserire un numero da 1 a 5
const userNumber = parseInt( prompt('Inserisci un numero da 1 a 5'));
console.log('Hai inserito', userNumber);

// Creo una variabile che conterrà il risultato della funzione per il computer, ossia un numero random da 1 a 5 (estremi inclusi)
const computerNumber = getRndInteger(1,5);
console.log('Il computer ha inserito', computerNumber);


// test funzione somma pari o dispari
let evenOrOddResult = ifSumIsEven(userNumber, computerNumber);
// console.log(evenOrOddResult);

let numSum = userNumber + computerNumber;
console.log('La somma tra i due numeri risulta', numSum);

// Dichiaro chi ha vinto dopo che ho confrontato il risultato della funzione 'ifSumIsEven' con la scelta dell'utente (pari o dispari)
if( (evenOrOddResult === true && userEvenOrOddChoice === 'pari') || (evenOrOddResult === false && userEvenOrOddChoice === 'dispari') ){
    alert('Complimenti, hai vinto! :)');
} else {
    alert('Mi dispiace, ha vinto il computer :(');
}


// FUNZIONE PER GENERARE UN NUMERO RANDOM DA 1 A 5 (PER IL COMPUTER)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// FUNZIONE PER VERIFICARE SE LA SOMMA TRA I DUE NUMERI INSERITI DALL'UTENTE E DAL COMPUTER E' PARI O DISPARI
function ifSumIsEven(userNum, computerNum) {
    let numbersSum = userNum + computerNum;
    let isEven = false;

    if(numbersSum % 2 === 0) {
        isEven = true;
    }

    return isEven;
}