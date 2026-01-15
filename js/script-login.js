const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {        
      // console.log(`Usuario: ${email}, Password: ${password}`);
      window.location.href = 'menu.html';
    }
})