let images = document.querySelectorAll('.gallery img');
let container = document.createElement('div');
container.classList.add('Inspected-picture-container');

images.forEach(image => {
    image.addEventListener('click', function () {
        document.body.appendChild(container);
        let inspectedImage = document.createElement('img');
        inspectedImage.src = image.src;
        inspectedImage.classList.add('inspected-image');

        let closeButton = document.createElement('a');
        closeButton.innerText = 'X';
        closeButton.classList.add('close-button');

        container.appendChild(inspectedImage);
        container.appendChild(closeButton);

        closeButton.addEventListener('click', function () {
            inspectedImage.remove();
            closeButton.remove();
            container.remove();
        });
    });
});




