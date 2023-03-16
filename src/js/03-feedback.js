import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';
