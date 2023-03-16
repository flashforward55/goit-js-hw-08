import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

window.addEventListener('load', () => {
  try {
    const storedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (storedFormData) {
      emailInput.value = storedFormData.email;
      messageInput.value = storedFormData.message;
    }
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // "Unexpected token u in JSON at position 0"
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value === '' || messageInput.value === '') {
    const alertMessage = 'Заповніть усі поля форми!';
    alert(alertMessage);
  } else {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);

    event.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    emailInput.value = '';
    messageInput.value = '';
  }
});
