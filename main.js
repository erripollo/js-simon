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
var pcNumbers = [];

for (var i = 0; i < 5; i++) {
    number = randomNumber (1, 100);
    //console.log(number);
    pcNumbers.push(number);
    //console.log(pcNumbers);
}
console.log(pcNumbers);

//mostrare l'array in un alert
alert(pcNumbers);

//Dopo 30 secondi 
var timer = 31;

var intervallo = setInterval ( function(){
    if (timer === 0) {
        clearInterval(intervallo)
        //l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        var userNumbers;
        do {var rememberNumbers = prompt('Inserisci i 5 numeri che hai memorizzato');
            userNumbers = rememberNumbers.split(' ');
            if (userNumbers.length !== 5) {
                alert(
                    `
                    Devi inserire 5 numeri!! Ne hai inseriti ${userNumbers.length}...
                    Numeri inseriti: ${userNumbers}
                    `
                );
            }
        } while (userNumbers.length !== 5);

        console.log(rememberNumbers);
        console.log(userNumbers);

        //il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        var matchNumbers = [];

        for (var i = 0; i < 5; i++) {
            var compareNumber = Number(userNumbers[i]);
            console.log(compareNumber);

            if (pcNumbers.includes(compareNumber)) {
                matchNumbers.push(compareNumber)
            }

        }

        console.log(matchNumbers);

        alert(
            `
            Hai indovinato ${matchNumbers.length} su 5 numeri: ${matchNumbers}
            i numeri erano: ${pcNumbers}
            `
        );

    }else {
        timer--;
    }

    var countdownEl = document.querySelector('.countdown');
    countdownEl.innerHTML = timer;

    countdownEl.style.color = "red";

    if (timer < 6) {
        countdownEl.style.color = "green";
    } else if (timer < 16) {
        countdownEl.style.color = "orange";
    }

}, 1000)

