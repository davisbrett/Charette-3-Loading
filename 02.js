document.getElementById("shutter2").addEventListener("click", function () {
    var image = document.getElementById("screenImage2");

    setTimeout(function () {
        image.style.opacity = "1";
    }, 50);
});