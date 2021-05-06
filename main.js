/*
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//generare 5 numeri casuali
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//inserire i numeri generati in un array
var number;
var extractNumber = [];

for (var i = 0; i < 5; i++) {
    number = randomNumber (1, 100);
    //console.log(number);
    extractNumber.push(number);
    //console.log(extractNumber);
}
console.log(extractNumber);

//mostrare l'array in un alert
alert(extractNumber);

//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

rememberNumbers = prompt('Inserisci i 5 numeri che hai memorizzato');
userNumbers = rememberNumbers.split(" ");
console.log(rememberNumbers);
console.log(userNumbers);


