const email = ['tizio@gmail.com', 'caio@gmail.com', 'sempronio@gmail.com', 'vanessa@gmail.com', 'serena@gmail.com', 'mariangiongiangela@gmail.com'];

let message = prompt ('Inserisci la tua mail');

let mail_utente = false;

for (i = 0; i < email.length; i++) {

    if (email[i] == message) {
        mail_utente = true;
    }

}

if (mail_utente) {
    console.log ('Accesso grarantito')
}

else {
    console.log ('Accesso negato')
}