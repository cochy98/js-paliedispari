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


/* Faccio inserire una parola all'utente */
const userWord = prompt('inserisci una parola per verificare la sua palindromia').trim();
/* Richiamo la funzione scritta per verificare la palidromia di una parola, se true stampa che è palidroma */
if(isPalindrome(userWord)){
    console.log('La parola inserita è palindroma');
} else{
    console.log('Mi dispiace, la parola non è palindroma, è una parola comune');
}  

/* Finché l'utente non sceglie pari o dispari chiedi la scelta */
let oddOrEven = '';
while( (oddOrEven != 'pari') && (oddOrEven != 'dispari') ){
    oddOrEven = prompt('pari o dispari?').toLowerCase().trim();
}
console.log(`L'utente ha scelto: ${oddOrEven}`);

/* A questo punto l'utente puo scegliere un numero da 1 a 5 */
let userNumber = 0;
// Finchè l'utente non inserisce un numero valido (da 1 a 5) chiedi di inserirlo
while( (userNumber < 1) || (userNumber > 5) || isNaN(userNumber) ){
    userNumber = parseInt(prompt('Inserisci un numero valido da 1 a 5'));
}
console.log(`L'utente ha scelto IL numero: ${userNumber}`);

/* Scelgo un numero random da 1 a 5 per il pc */
const randomNumber = getRandomInt(5)
console.log(`Il numero random per il PC è ${randomNumber}`);
console.log(`la somma dei due numeri è pari? --> ${sumEven (userNumber, randomNumber)}`);

// Se l'utente ha scelto pari (true) e la somma dei due numeri è (true), l'utente ha vinto
if ( (oddOrEven == 'pari') && (sumEven (userNumber, randomNumber)) ){
    console.log('COMPLIMENTI, HAI VINTO!!!');
} else{
    console.warn('MI DISPIACE HA VINTO IL PC :(');
}

/* **********************************FUNCTIONS*********************************** */
/**
 * La seguente funzione prende una stringa in input e verifica la sua palindromia. Se vero restituisce true, altrimenti false *   
 * @param {*} stringToCheck stringa da verificare
 * @returns                 ritorna true se la stringa è palindroma, false altrimenti
 */
function isPalindrome(stringToCheck) {
    let reversedString = "";
    for (let i = stringToCheck.length - 1; i >= 0; i--){
        //reversedString += stringToCheck[i];
        reversedString += stringToCheck.charAt(i);
    }
    if(reversedString == stringToCheck){
        return true;
    }
    return false;
}

/**
 * La seguente funzione genera un numero random da 1 a un numero definito
 * @param {*} max   Numero max random che può ritornare la funzione
 * @returns         Ritorna un numero random tra 1 e un max definito
 */
function getRandomInt(max) {
    return Math.floor( (Math.random() * max) + 1);
}

/**
 * La seguente funzione restituisce 'true' se il numero è pari, altrimenti 'false'
 * @param {*} number    Numero che si vuole verificare se pari o dispari 
 * @returns             Restituisce 'true' or 'false'
 */
function isEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}

/**
 * Dati due numeri, la seguente funzione restituisce 'true' se la loro somma è un numero pari, altrimenti 'false'
 * @param {*} num1  Numero 1  
 * @param {*} num2  Numero 2
 * @returns         Restituisce 'true' se la somma dei due numeri è pari
 */
function sumEven (num1, num2){
    const sum = num1 + num2;
    return isEven (sum);
}