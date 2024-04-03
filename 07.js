document.getElementById("shutter7").addEventListener("click", function () {
    var images = document.querySelectorAll('.screenImage');
    var delay = 600; // Delay between each image appearing in milliseconds

    images.forEach(function (image, index) {
        setTimeout(function () {
            image.style.opacity = "1"; // Gradually make each image appear
        }, delay * index);
    });
});
