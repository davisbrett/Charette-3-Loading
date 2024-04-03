const shutter20 = document.getElementById("shutter20");

shutter20.addEventListener("click", function handleClick() {
    // Get the screenImage element
    const screenImage = document.querySelector(".screenImage");

    // Remove the animation for scaling down
    screenImage.style.animation = "none";

    // Trigger reflow
    void screenImage.offsetWidth;

    // Apply animation for scaling up
    screenImage.style.animation = "scaleUp 1.5s forwards";

    // Remove the event listener after it's clicked once
    shutter20.removeEventListener("click", handleClick);
});
