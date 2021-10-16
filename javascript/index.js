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

// local storage

const form = document.getElementById('formV');
const userFormValues = {};
if ('userData' in localStorage) {
  const parsedData = JSON.parse(localStorage.userData);
  form.elements[0].value = parsedData.firstName;
  form.elements[1].value = parsedData.lastName;
  form.elements[2].value = parsedData.userEmail;
  form.elements[3].value = parsedData.userMessage;
}

const saveValueLocally = () => {
  localStorage.setItem('userData', JSON.stringify(userFormValues));
};

const updateFormValues = () => {
  userFormValues.firstName = form.elements[0].value;
  userFormValues.lastName = form.elements[1].value;
  userFormValues.userEmail = form.elements[2].value;
  userFormValues.userMessage = form.elements[3].value;
  saveValueLocally();
};

form.addEventListener('input', updateFormValues);