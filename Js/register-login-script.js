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