import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('input[name="email"]');
const messageTextareaEl = document.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

window.addEventListener('load', onLoad);
formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onLoad() {
  const localStorageState = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (localStorageState) {
    const { email, message } = JSON.parse(localStorageState);
    emailInputEl.value = email;
    messageTextareaEl.value = message;
  }
}

function onInput() {
  const formState = {
    email: emailInputEl.value,
    message: messageTextareaEl.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState));
}

function onSubmit(evt) {
  evt.preventDefault();

  if (!emailInputEl.value || !messageTextareaEl.value) {
    alert('Будь ласка, заповніть всі поля!');
    return;
  }
  const formState = {
    email: emailInputEl.value,
    message: messageTextareaEl.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formState));

  console.log(localStorage.getItem(LOCAL_STORAGE_KEY));

  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formEl.reset();
}
