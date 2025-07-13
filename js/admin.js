document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    // This is a simple, insecure password check.
    // In a real application, you would use a secure backend authentication system.
    if (password === 'admin') {
        window.location.href = 'dashboard.html';
    } else {
        alert('Contraseña incorrecta');
    }
});
