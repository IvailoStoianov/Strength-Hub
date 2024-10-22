import programs from '/Json/programs.json' assert { type: "json" };

const urlParams = new URLSearchParams(window.location.search);
const workoutId = urlParams.get('id');
const filePath = '/Json/programs.json';

let workout = programs.find(program => program.id === Number.parseInt(workoutId));

function renderProgram(workout){
    let mainImg = document.getElementById('active');
    mainImg.src = workout.image_path;

    let thumbs = document.querySelectorAll('.thumbs img'); 
    thumbs.forEach((thumb, index) => {
        thumb.src = workout.supporting_images_paths[index];
    });

    thumbs.forEach((thumb) => {
        thumb.addEventListener('click', (e) => {
            let mainImgScrTemp = mainImg.src;
            mainImg.src = e.target.src;
            e.target.src = mainImgScrTemp;
        });
    });

    let title = document.querySelector('.name');
    title.innerHTML = workout.name;
    
    let rating = document.querySelectorAll('.rating i');
    rating.forEach((star, index) => {
        if(index < workout.rating){
            rating[index].classList.add('fa-solid');
            rating[index].classList.remove('fa-regular');
        }
    });

    let tags = document.querySelector('.tags');
    workout.tags.forEach(tag => {
        let tagElement = document.createElement('p');
        tagElement.classList.add('tag');
        tagElement.innerHTML = tag;
        tags.appendChild(tagElement);
    });
    
    let description = document.querySelector('.description-info');
    description.innerHTML = workout.description;

}

renderProgram(workout);





