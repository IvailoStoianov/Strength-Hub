let hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', function() {
    let navigation = document.querySelector('.navigation .nav-links');
    if(navigation.style.display === 'block') {
    navigation.style.display = 'none';
    } else {
    navigation.style.display = 'block';
    }
});