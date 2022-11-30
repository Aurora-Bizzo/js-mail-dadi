const email = ['tizio@gmail.com', 'caio@gmail.com', 'sempronio@gmail.com', 'vanessa@gmail.com', 'serena@gmail.com', 'mariangiongiangela@gmail.com'];

const button_send = document.getElementById ('send');

let message = document.getElementById('mail').value;

let mail_utente = false;

button_send.addEventListener ('click', function(){

    for (i = 0; i < email.length; i++) {

        const mail_sand = email[i];

        if (mail_sand === message) {
            mail_utente = true;
        }
    
    }
    
    if (mail_utente) {
        console.log ('Accesso grarantito')
    }
    
    else {
        console.log ('Accesso negato')
    }

})
