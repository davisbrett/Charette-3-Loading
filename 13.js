document.getElementById("shutter13").addEventListener("click", function () {
    var images = document.querySelectorAll('.screenImage');
    var delay = 750;

    images.forEach(function (image, index) {
        setTimeout(function () {
            image.style.opacity = "1";
        }, delay * index);
    });
});
