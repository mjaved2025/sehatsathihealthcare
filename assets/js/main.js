document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));
});
