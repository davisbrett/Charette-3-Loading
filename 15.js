document.getElementById("shutter15").addEventListener("click", function () {
    var loader = document.getElementById("loader");
    var screenImage15 = document.querySelector(".screenImage15");

    // Move the z-score of #loader to 1
    loader.style.zIndex = "1";

    // After 3 seconds, make the opacity of screenImage15 1
    setTimeout(function () {
        screenImage15.style.opacity = "1";
    }, 4000);
});
