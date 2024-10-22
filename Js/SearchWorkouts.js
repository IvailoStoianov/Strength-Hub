function filterPrograms() {
    let searchInput = document.querySelector('.search-input').value.toLowerCase().trim();
    let programs = document.querySelectorAll('.program');
    programs.forEach(program => {
        let title = program.querySelector('h3').textContent.toLowerCase();
        let creator = program.querySelector('small').textContent.toLowerCase();
        if (title.includes(searchInput) || creator.includes(searchInput)) {
            program.style.display = 'block';
        } else {
            program.style.display = 'none';
        }
    });
}

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchButton.click();
    }
});

document.querySelector('.search-button').addEventListener('click', filterPrograms);

function sortByName() {
    let programsContainer = document.querySelector('.programs-container');
    let programs = Array.from(programsContainer.querySelectorAll('.program'));

    programs.sort((a, b) => {
        let titleA = a.querySelector('h3').textContent.toLowerCase();
        let titleB = b.querySelector('h3').textContent.toLowerCase();
        return titleA.localeCompare(titleB);
    });

    programsContainer.innerHTML = '';
    programs.forEach(program => {
        programsContainer.appendChild(program);
    });
}
function sortByRating() {
    let programsContainer = document.querySelector('.programs-container');
    let programs = Array.from(programsContainer.querySelectorAll('.program'));

    programs.sort((a, b) => {
        let ratingA = a.querySelectorAll(".fa-solid").length;
        let ratingB = b.querySelectorAll(".fa-solid").length;
        return ratingB - ratingA;
    });

    programsContainer.innerHTML = '';
    programs.forEach(program => {
        programsContainer.appendChild(program);
    });
}
function sortByNewest() {
    let programsContainer = document.querySelector('.programs-container');
    let programs = Array.from(programsContainer.querySelectorAll('.program'));

    programs.sort((a, b) => {
        let dateA = new Date(getReleaseDate(a));
        let dateB = new Date(getReleaseDate(b));
        return dateB - dateA;
    });

    programsContainer.innerHTML = '';
    programs.forEach(program => {
        programsContainer.appendChild(program);
    });
}
function getReleaseDate(programElement) {
    let dateElement = programElement.querySelector('.sub > p');
    return dateElement.textContent.trim();
}
document.querySelector('#sort-by-name').addEventListener('click', sortByName);
document.querySelector('#sort-by-rating').addEventListener('click', sortByRating);
document.querySelector('#sort-by-newest').addEventListener('click', sortByNewest);
