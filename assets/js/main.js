// Mail

// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

let inputEmail = document.getElementById('inputEmail');
let emails = ['html@boolean.it', 'css@boolean.it', 'js@boolean.it'];

let emailPresent = false;


function verificaEmail(){

    let valueEmail = inputEmail.value;
    
    for (let i=0; i < emails.length; i++) {

        let thisEmail = emails[i];
        
    if (valueEmail = thisEmail) {

        emailPresent = true;

    } else{
        document.getElementById('text').innerText = 'error';
    }

    }

}



































// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?