// Mail CONSEGNA

// Chiedi all’utente la sua email,
// controlla che sia già presente nella lista di email per controllare se può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


// DADI CONSEGNA

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer

// MAIL SVOLGIMENTO

// let inputEmail = document.getElementById('inputEmail');
// let emails = ['html@boolean.it', 'css@boolean.it', 'js@boolean.it'];



// function verificaEmail() {
//     let emailPresent = false;
//     let valueEmail = inputEmail.value;

//     for (let i = 0; i < emails.length; i++) {
//         if (valueEmail == emails[i]) {
//             emailPresent = true;
//         }
//     }


//     // controllo emailPresent
//     if (emailPresent == true) {
//         document.getElementById('text').innerText = 'success';
//     } else {
//         document.getElementById('text').innerText = 'error';
//     }
// }



//DADI SVOLGIMENTO

let player = Math.round(Math.random() *6) +1;
let computer = Math.round(Math.random() *6) +1;

document.getElementById('numGiocatore').innerText = ` Player's number is: ${player}`;
document.getElementById('numCpu').innerText = ` Computer's number is: ${computer}`;

if (player > computer) {
    document.getElementById('result').innerText = `The winner is: Player`;

} else if (computer > player) {
    document.getElementById('result').innerText = `The winner is: Computer`;


} else{
    document.getElementById('result').innerText = `Tie`;
}







































// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// scrivere quante partite ha vinto il giocatore
// scrivere quante partite ha vinto il computer
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?