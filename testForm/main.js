const textEl = document.querySelector('#form-text');
const dateEl = document.querySelector('#form-date');
const form = document.querySelector('#form');
const formSection = document.querySelector('.form-section')

const isRequired = (value) => {
  if (value === '') {
    return false;
  } else {
    return true;
  }
}

const showError = (input, message) => {
  const fieldset = input.parentElement;
  input.classList.add('error');
  input.classList.remove('success');

  const small = fieldset.querySelector('small');
  small.textContent = message;
}

const showSuccess = (input) => {
  const fieldset = input.parentElement;
  input.classList.add('success');
  input.classList.remove('error');

  const small = fieldset.querySelector('small');
  small.textContent = '';
}
  
const checkFormText = () => {
  let valid = false;
  const text = textEl.value.trim();
  if (!isRequired(text)) {
    showError(textEl, 'Please fill this field');
  } else {
    showSuccess(textEl);
    valid = true;
  }
  return valid;
}
/*(isRequired(text) === false) */

const checkFormDate = () => {
  let valid = false;
  const date = dateEl.value.trim();
  if (!isRequired(date)) {
    showError(dateEl, 'Please fill this field');
  } else {
    showSuccess(dateEl);
    valid = true;
  }
  return valid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  //formSection.style.visibility = 'hidden';

  const isFormDateValid = checkFormDate(),
  isFormTextValid = checkFormText();

  const isFormValid = isFormDateValid && isFormTextValid;

  if (isFormValid) {
    // to submit date to server
    console.log('Valid form');
  } else {
    console.log('Error in the form');
  }
});

form.addEventListener('input', (event) => {
  switch (event.target.id) {
    case 'form-text':
      checkFormText();
      break;
    case 'form-date':
      checkFormDate();
      break;
    }
})