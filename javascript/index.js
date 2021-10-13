// email validation

const formVal = document.getElementById('formV');
const emailInput = document.getElementById('mail');

formVal.addEventListener('submit', (event) => {
    const validMail = /[A-Z]/g;

    if(validMail.test(emailInput.value)){
        document.getElementById('lowerCase').classList.toggle('formShow');
        event.preventDefault();
    }else if (!document.getElementById('lowerCase').className === 'mailError formShow'){
        document.getElementById('lowerCase').classList.toggle('formShow');
    }
})