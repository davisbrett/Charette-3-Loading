const shutter20 = document.getElementById("shutter20");

shutter20.addEventListener("click", function handleClick() {
    const screenImage = document.querySelector(".screenImage");

    screenImage.style.animation = "none";

    void screenImage.offsetWidth;

    screenImage.style.animation = "scaleUp 1.5s forwards";

    shutter20.removeEventListener("click", handleClick);
});
