const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchButton.click();
    }
});

document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-button');
        const articles = document.querySelectorAll('article');

        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase();

            articles.forEach(article => {
                const title = article.querySelector('.article-title').textContent.toLowerCase();
                const creator = article.querySelector('.creator-name').textContent.toLowerCase();

                if (title.includes(searchTerm) || creator.includes(searchTerm)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });






    