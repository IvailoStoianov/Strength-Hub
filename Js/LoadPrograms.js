import programs from '/Json/programs.json' with { type: "json" };

const parentElement = document.querySelector('.programs-container');

function createStarRating(rating) {
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating");

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add("fa", i < rating ? "fa-solid" : "fa-regular", "fa-star");
        ratingContainer.appendChild(star);
    }

    return ratingContainer;
}

function createTextElement(tagName, text) {
    const element = document.createElement(tagName);
    element.textContent = text;
    return element;
}

function createProgramElement(program) {
    const programDiv = document.createElement("div");
    programDiv.classList.add("program");
    programDiv.setAttribute('data-id', program.id);

    const container = document.createElement("div");
    container.classList.add("container");

    
    container.appendChild(createStarRating(program.rating));

    
    const img = document.createElement("img");
    img.src = program.image_path;
    img.alt = "image of the workout";
    img.onerror = function() {
        img.src = "/Images/bodybuilder-placeholder.jpg";
    };
    container.appendChild(img);

    programDiv.appendChild(container);

    
    const textDiv = document.createElement("div");
    textDiv.classList.add("text");

    textDiv.appendChild(createTextElement("h3", program.name));
    const subText = document.createElement("div");
    subText.classList.add("sub");
    subText.appendChild(createTextElement("small", program.creator_name));
    subText.appendChild(createTextElement("p", program.release_date));
    textDiv.appendChild(subText);
    programDiv.appendChild(textDiv);

    return programDiv;
}

function renderPrograms(programs) {
    programs.forEach(program => {
        const programElement = createProgramElement(program);
        parentElement.appendChild(programElement);
    });
}

function renderMostUsedPrograms(workout) {
const bestSellersDiv = document.querySelector('.best-selers');
bestSellersDiv.setAttribute('data-id', workout.id);


const featuredTitle = document.createElement('h2');
featuredTitle.classList.add('featured-title');
featuredTitle.textContent = 'Най-използван тази  седмица';

const showcaseDiv = document.createElement('div');
showcaseDiv.classList.add('show-case');

const carouselItemDiv = document.createElement('div');
carouselItemDiv.classList.add('carousel-item');

const crrImgDiv = document.createElement('div');
crrImgDiv.classList.add('crr-img');

const imgMain = document.createElement('img');
imgMain.src = workout.image_path;
imgMain.alt = "";

const workoutShowcaseDiv = document.createElement('div');
workoutShowcaseDiv.classList.add('crr-workout-showcase');

const workoutTitle = document.createElement('h2');
workoutTitle.classList.add('workout-title');
workoutTitle.textContent = workout.name;

const workoutImagesDiv = document.createElement('div');
workoutImagesDiv.classList.add('workout-images');

workout.supporting_images_paths.forEach(imagePath => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "";
    workoutImagesDiv.appendChild(img);
});

const availableHeading = document.createElement('h3');
availableHeading.textContent = 'Сега достъпен';

const tagsDiv = document.createElement('div');
tagsDiv.classList.add('tags');

workout.tags.forEach(tag => {
    const smallTag = document.createElement('small');
    smallTag.classList.add('tag');
    smallTag.textContent = tag;
    tagsDiv.appendChild(smallTag);
});

const buttonContainerDiv = document.createElement('div');
buttonContainerDiv.classList.add('button-container');

const getNowLink = document.createElement('a');
getNowLink.textContent = 'Вземи сега';

buttonContainerDiv.appendChild(getNowLink);
workoutShowcaseDiv.appendChild(workoutTitle);
workoutShowcaseDiv.appendChild(workoutImagesDiv);
workoutShowcaseDiv.appendChild(availableHeading);
workoutShowcaseDiv.appendChild(tagsDiv);
workoutShowcaseDiv.appendChild(buttonContainerDiv);
carouselItemDiv.appendChild(crrImgDiv);
crrImgDiv.appendChild(imgMain);
carouselItemDiv.appendChild(workoutShowcaseDiv);
showcaseDiv.appendChild(carouselItemDiv);
bestSellersDiv.appendChild(featuredTitle);
bestSellersDiv.appendChild(showcaseDiv);
}

renderMostUsedPrograms(programs[0]);
renderPrograms(programs);
