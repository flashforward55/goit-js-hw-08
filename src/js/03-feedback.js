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
  const storedFormData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (storedFormData) {
    emailInput.value = storedFormData.email;
    messageInput.value = storedFormData.message;
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
