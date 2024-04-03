document.getElementById("shutter12").addEventListener("click", function () {
    var images = document.querySelectorAll('.screenImage');
    var delayFirst12 = 500; // Delay for the first 12 images
    var delayLast12 = 150; // Delay for the last 12 images

    images.forEach(function (image, index) {
        var delay = index < 18 ? delayFirst12 : delayLast12; // Use different delay based on index


        setTimeout(function () {
            image.style.opacity = "1";
        }, delay * index);
    });
});
