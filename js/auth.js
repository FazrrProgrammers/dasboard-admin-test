document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const error = document.getElementById('loginError');

  const VALID_USER = 'admin';
  const VALID_PASS = '12345';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === VALID_USER && pass === VALID_PASS) {
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = 'index.html';
    } else {
      error.classList.remove('d-none');
    }
  });
});
