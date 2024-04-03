document.getElementById("shutter16").addEventListener("click", function () {
    var backgroundImage = document.querySelector('.backgroundImageImage');
    var screenImage = document.querySelector('.screenImage');

    backgroundImage.classList.add('transparent');

    setTimeout(function () {
        backgroundImage.classList.remove('transparent');
    }, 500);

    setTimeout(function () {
        screenImage.style.opacity = '1';
    }, 1000);
});
