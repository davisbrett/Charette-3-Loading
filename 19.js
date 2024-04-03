// Get references to the images
const image1 = document.querySelector('.screenImage19:nth-child(1)');
const image2 = document.querySelector('.screenImage19:nth-child(2)');

// Hide the second image initially
image2.style.display = 'none';

// Function to toggle between the images
function toggleImages() {
    if (image1.style.display === 'none') {
        image1.style.display = 'block';
        image2.style.display = 'none';
    } else {
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
}

// Event listener for the shutter button
document.getElementById("shutter19").addEventListener("click", function () {
    // Toggle images every second
    setInterval(toggleImages, 700);

    // Remove the event listener to prevent further clicks
    document.getElementById("shutter19").removeEventListener("click", arguments.callee);
});
