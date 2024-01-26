const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', () => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const arrayForm = {
    email,
    message,
  };
  const json = JSON.stringify(arrayForm);

  localStorage.setItem(localStorageKey, json);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const arrayForm = {
    email,
    message,
  };

  if (email === '' || message === '') {
    return;
  }
  console.log(arrayForm);
  localStorage.removeItem(localStorageKey);
  form.reset();
});

function init() {
  const zip = localStorage.getItem(localStorageKey);
  const data = JSON.parse(zip);
  form.elements.email.value = data.email;
  form.elements.message.value = data.message;
}

init();
