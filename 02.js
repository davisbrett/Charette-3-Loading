document.getElementById("shutter2").addEventListener("click", function () {
    var image = document.getElementById("screenImage2");

    // Show the image with a slight delay for transition effect
    setTimeout(function () {
        image.style.opacity = "1";
    }, 50);
});