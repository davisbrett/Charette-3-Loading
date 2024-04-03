document.getElementById("shutter15").addEventListener("click", function () {
    var loader = document.getElementById("loader");
    var screenImage15 = document.querySelector(".screenImage15");

    loader.style.zIndex = "1";

    setTimeout(function () {
        screenImage15.style.opacity = "1";
    }, 4000);
});
