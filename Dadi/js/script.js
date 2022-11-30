1//

num_utente = Math.floor( Math.random() * 6) + 1;
num_computer = Math.floor( Math.random() * 6) + 1;

2//
console.log ('Il tuo numero:',`${num_utente}`)
console.log ('Il numero del computer:',`${num_computer}`)

if (num_utente > num_computer){
    console.log('Hai vinto!');
}

else if (num_utente < num_computer){
    console.log('Hai perso');
}

else {
    console.log('Pareggio');
}