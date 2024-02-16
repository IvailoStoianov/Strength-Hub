if(localStorage.getItem('isLoggedIn') === 'false'){
    console.log('You must be logged in to view this page');
    alert('You must be logged in to view this page');
    window.location.href = '/index.html';
}
