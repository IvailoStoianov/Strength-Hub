import programs from '/Json/programs.json' assert { type: "json" };

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
    let startWorkoutBtn = createTextElement("a", "Start Workout");
    startWorkoutBtn.classList.add("start-workout-btn");
    let date = createTextElement("p", program.release_date);
    date.style.display = "none";
    subText.appendChild(date);
    subText.appendChild(startWorkoutBtn);
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

renderPrograms(programs);
