// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// Chiedo all'utente di inserire una parola
const userWord = prompt('Inserisci una parola');
console.log(userWord);

// Creo una variabile che contiene il richiamo alla funzione, che conterrà al suo interno il risultato (true o false)
let userWordIsPalindrome = isPalindrome(userWord);
console.log(userWordIsPalindrome);


// Verifico che il risultato della funzione è true, in quel caso stampo che la parola è palindroma, altrimenti non è palindroma
if(userWordIsPalindrome == true) {
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
}

// FUNZIONE
function isPalindrome(word) {
    let parola = '';
    let isPali = false;
    for(let i = word.length - 1; i >= 0; i--) {
        let thisLetter = word[i];
        parola += thisLetter; 
    }
    console.log(parola);

    if(parola === word) {
        isPali = true;
    }

    return isPali;
}
