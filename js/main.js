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
/*  
    La funzione aggiunge una classe ad un elemento HTML già creato.
    Accetta in ingresso due stringhe, il nome dell'elemento a cui aggiungere la classe (element) e il nome della classe
*/
function addClass (element, className){
    element.classList.add(className);
}

/* La seguente funzione restituisce 'true' se il numero è pari, altrimenti 'false' */
function isEven (number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}
// ? /FUNZIONI DEL MIO PROGRAMMA 
