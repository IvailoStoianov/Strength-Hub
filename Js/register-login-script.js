function togglePasswordVisibility(passwordId, eyeId, eyeSlashId) {
    var passwordField = document.getElementById(passwordId);
    var eye = document.getElementById(eyeId);
    var eyeSlash = document.getElementById(eyeSlashId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eye.style.opacity = "0";
        eyeSlash.style.opacity = "1";
    } else {
        passwordField.type = "password";
        eye.style.opacity = "1";
        eyeSlash.style.opacity = "0";
    }
}

function moveElements(loginLeft, registerRight, btnLeft) {
    var login = document.getElementById('login');
    var register = document.getElementById('register');
    var btn = document.getElementById('btn');

    login.style.left = loginLeft;
    register.style.right = registerRight;
    btn.style.left = btnLeft;
}

function login() {
    moveElements("27px", "-350px", "0px");
}

function register() {
    moveElements("-350px", "25px", "150px");
}

function myLogPassword() {
    togglePasswordVisibility("logPassword", "eye", "eye-slash");
}

function myRegPassword() {
    togglePasswordVisibility("regPassword", "eye-2", "eye-slash-2");
}

function generateUserId() {
    return 'user_' + Date.now();
}

function updateLoggedInStatus(status) {
    localStorage.setItem('isLoggedIn', status.toString());
}

if(localStorage.getItem('isLoggedIn') === 'true') {
    alert('You are already logged in. Redirecting to the home page.');
    window.location.href = '/index.html';
}


var isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('regUsername').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPassword').value;

    var userId = generateUserId();

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    var isUsernameTaken = existingUsers.some(function(user) {
        return user.username === username;
    });
    var isEmailTaken = existingUsers.some(function(user) {
        return user.email === email;
    });

    if (isUsernameTaken) {
        alert('Username already exists. Please choose another one.');
        return;
    }

    if (isEmailTaken) {
        alert('Email address already exists. Please use another one.');
        return;
    }

    var newUser = { id: userId, username: username, email: email, password: password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    localStorage.setItem('credentials', JSON.stringify({ username: username, password: password }));

    isLoggedIn = true;
    updateLoggedInStatus(true);

    window.location.href = '/index.html';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var email = document.getElementById('logEmail').value;
    var password = document.getElementById('logPassword').value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    var foundUser = existingUsers.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (foundUser) {
        isLoggedIn = true;
        updateLoggedInStatus(true);
        window.location.href = '/index.html';
    } else {
        alert('Invalid email or password.');
    }
});

