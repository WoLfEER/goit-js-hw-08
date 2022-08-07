import throttle from 'lodash.throttle';

const { form, email, message } = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

// const form = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';
const storageObject = {};

// listeners //

form.addEventListener('input', throttle(onInputEmail, 500));
form.addEventListener('submit', onSubmitMessage);

// functions //

function onSubmitMessage(e) {
  e.preventDefault();
  if (!storageObject.email || !storageObject.message) {
    return alert('all fields');
  }
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

function onInputEmail(e) {
  storageObject[e.target.name] = e.target.value.trim();
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(storageObject));
}

function saveMessage(e) {
  const messageToDom = localStorage.getItem(FEEDBACK_KEY);
  const parsedMessage = JSON.parse(messageToDom);
  console.log(parsedMessage);
  if (parsedMessage) {
        if (parsedMessage.email) {
          email.value = parsedMessage.email;
        }
        if (parsedMessage.message) {
          message.value = parsedMessage.message;
        }
  }
}
  

saveMessage();
