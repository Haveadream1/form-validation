const textEl = document.querySelector('#form-text');
const dateEl = document.querySelector('#form-date');
const form = document.querySelector('#form');

// error class never added
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
    const text = textEl.value.trim();
    if (isRequired(text) === false) {
      showError(textEl, 'Please fill this field');
    } else {
      showSuccess(textEl);
    }
}

const checkFormDate = () => {
    const date = dateEl.value.trim();
    if (!isRequired(date)) {
      showError(dateEl, 'Please fill this field');
    } else {
      showSuccess(dateEl);
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    //formSection.style.visibility = 'hidden';

    let isFormDateValid = checkFormDate(),
    isFormTextValid = checkFormText();

    let isFormValid = isFormDateValid && isFormTextValid;

    if (isFormValid) {
      // to submit date to server
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