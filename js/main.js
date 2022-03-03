/**
    // ?Palidroma:
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
    // ?Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
    // ?Consigli del giorno
    Scriviamo sempre in italiano i passaggi che vogliamo fare
    Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
 */


// ? FUNZIONI DEL MIO PROGRAMMA    
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

/* La seguente funzione genera un numero random da 1 a un numero definito */
function getRandomInt(max) {
    return Math.floor( (Math.random() * max) + 1);
}

/* La seguente funzione restituisce 'true' se il numero è pari, altrimenti 'false' */
function isEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}

/* La seguente funzione restituisce 'true' se la somma è pari, altrimenti 'false' */
function sumEven (num1, num2){
    const sum = num1 + num2;
    return isEven (sum);
}
// ? /FUNZIONI DEL MIO PROGRAMMA 

/* Faccio inserire una parola all'utente */
const userWord = prompt('inserisci una parola per verificare la sua palindromia');

/* Richiamo la funzione scritta per verificare la palidromia di una parola, se true stampa che è palidroma */
if(palindrome(userWord)){
    console.log('La parola inserita è palindroma');
} else{
    console.log('Mi dispiace, la parola non è palindroma, è una parola comune');
} 

/* L'utente sceglie pari o dispari, vengono fatti tutti i controlli per vedere se è scritto corretto */
let oddOrEven = prompt('pari o dispari?').toLowerCase().trim();
if(oddOrEven == 'pari'){
    oddOrEven = true;
    console.log('Scelta pari');
} else if (oddOrEven == 'dispari'){
    oddOrEven = false;
    console.log('Scelta dispari');
} else {
    console.log(`Scelta non valida ${oddOrEven}`);
}

/* A questo punto l'utente puo scegliere un numero da 1 a 5 */
let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// Se la scelta dell'utente è pari, ma il numero inserito è dispari
if( (oddOrEven) && !(userNumber % 2 == 0) ){
    userNumber = parseInt(prompt('Inserisci un numero PARI valido'));
} else if( !(oddOrEven) && (userNumber % 2 == 0) ){
    userNumber = parseInt(prompt('Inserisci un numero DISPARI valido'));
}

const randomNumber = getRandomInt(5)
console.log(`Il numero random per il PC è ${randomNumber}`);
console.log(`la somma dei due numeri è pari? --> ${sumEven (userNumber, randomNumber)}`);

// Se l'utente ha scelto pari (true) e la somma dei due numeri è (true), l'utente ha vinto
if ( oddOrEven === sumEven (userNumber, randomNumber) ){
    console.log('COMPLIMENTI, HAI VINTO!!!');
} else{
    console.warn('MI DISPIACE HA VINTO IL PC :(');
}

