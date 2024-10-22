let hamburger = document.querySelector('.hamburger-menu');
hamburger.addEventListener('click', function() {
    let navigation = document.querySelector('.navigation .nav-links');
    if(navigation.style.display === 'flex') {
    navigation.style.display = 'none';
    } else {
    navigation.style.display = 'flex';
    }
});

window.addEventListener("resize", (event) => {
    if(window.innerWidth > 1200){
        document.querySelector('.navigation .nav-links').style.display = 'flex';
    } 
});

