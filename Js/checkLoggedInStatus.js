if(localStorage.getItem('isLoggedIn') === 'true') {
    let loginBtn = document.querySelector('.login a');
    loginBtn.innerHTML = 'Logout';
    loginBtn.setAttribute('href', '/index.html');
    loginBtn.addEventListener('click', function() {
        localStorage.setItem('isLoggedIn', 'false');
    });
    let myWorkoutsNav = document.getElementById('nav-my-workouts');
    myWorkoutsNav.style.display = 'block';
}
