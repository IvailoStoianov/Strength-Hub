let images = document.querySelectorAll('.gallery img');
let container = document.createElement('div');
container.classList.add('Inspected-picture-container');

console.log('Image clicked');

images.forEach(image => {
    image.addEventListener('click', function () {
        document.body.appendChild(container);
        // Create a new image element
        let inspectedImage = document.createElement('img');
        inspectedImage.src = image.src;
        inspectedImage.classList.add('inspected-image');

        // Create a button to leave the inspection
        let closeButton = document.createElement('a');
        closeButton.innerText = 'X';
        closeButton.classList.add('close-button');

        // Append the inspected image and the close button to the body
        container.appendChild(inspectedImage);
        container.appendChild(closeButton);

        // Add event listener to the close button
        closeButton.addEventListener('click', function () {
            // Remove the inspected image and the close button from the body
            inspectedImage.remove();
            closeButton.remove();
            container.remove();
        });
    });
});
