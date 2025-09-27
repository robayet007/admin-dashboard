const register = document.querySelector('.sign-up');
  const login = document.querySelector('.sign-in');
  const loginCard = document.querySelector('#login-card');
  const registerCard = document.querySelector('#register-card');

  const loginForm = [loginCard, registerCard];

  function toggleSection(section) {
    loginForm.forEach(card => card.classList.add('hide-login-form'));
    section.classList.remove('hide-login-form');
  }

  register.addEventListener('click', () => toggleSection(registerCard));
  login.addEventListener('click', () => toggleSection(loginCard));