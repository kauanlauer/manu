document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check login credentials
    if (username === 'erick.lauer' && password === '123456') {
        window.location.href = 'index.html';
    } else if (username === 'gislaine.souza' && password === '1234') {
        window.location.href = 'indexhtml';
    } else if (username === 'pcp' && password === '123456') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').innerText = 'Usuário ou senha incorretos.';
    }
});
