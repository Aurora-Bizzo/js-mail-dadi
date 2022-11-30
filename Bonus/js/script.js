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
        document.getElementById('login_result').innerHTML = "Accesso grarantito";
        console.log ('Accesso grarantito')
    }
    
    else {
        document.getElementById('login_result').innerHTML = "Accesso negato";
        console.log ('Accesso negato')
    }

})
