// email validation
const formVal = document.getElementById('formV');
const emailInput = document.getElementById('mail');

formVal.addEventListener('submit', (event) => {
  event.preventDefault();

  const capitalLetters = [];

  const emailCheck = emailInput.value.split('');
  for (let i = 0; i < emailCheck.length; i += 1) {
    if (!/[a-z]/.test(emailCheck[i]) && /[A-Z]/.test(emailCheck[i])) {
      capitalLetters.push(emailCheck[i]);
    }
  }

  function errorMessage() {
    const error = document.getElementById('valEmail');
    error.textContent = 'Please enter email in lowercase';
    error.style.color = 'red';
  }

  function correctEmail() {
    formVal.submit();
  }

  if (capitalLetters.length > 0) errorMessage();
  else correctEmail();
});