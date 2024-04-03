document.getElementById("shutter16").addEventListener("click", function () {
    var backgroundImage = document.querySelector('.backgroundImageImage');
    var screenImage = document.querySelector('.screenImage'); // Define screenImage here

    // Add class to make background image transparent
    backgroundImage.classList.add('transparent');

    // After 3 seconds, remove the transparent class to make it opaque again
    setTimeout(function () {
        backgroundImage.classList.remove('transparent');
    }, 500);

    // Define screenImage here to ensure it's in scope
    setTimeout(function () {
        screenImage.style.opacity = '1';
    }, 1000);
});
