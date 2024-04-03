document.getElementById("shutter14").addEventListener("click", function () {
    var images = document.querySelectorAll('.screenImage');
    var delay = 300;

    images.forEach(function (image, index) {
        setTimeout(function () {
            image.style.opacity = "1";
        }, delay * index);
    });
});
