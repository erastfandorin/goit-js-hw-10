import './styles.css';
import menuTemplate from './templates/menu.hbs';
import array from './menu.json';

const markup = menuTemplate(array);
const container = document.querySelector('#menu');
container.insertAdjacentHTML('beforeend', markup);

const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-control');
checkbox.addEventListener('change', theme);

function theme() {
  if (body.classList.value === '') {
    body.classList.add('dark-theme');
  } else if (body.classList.value === 'dark-theme') {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else if (body.classList.value === 'light-theme') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
  localStorage.setItem('theme', body.classList.value);
}

const save = localStorage.getItem('theme');

if (save === 'dark-theme') {
  body.classList.add('dark-theme');
  checkbox.checked = true;
}
