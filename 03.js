function load3() {
    const screenImage = document.getElementById("screenImage3");
    const numberOfChunks = 5;
    const totalDuration = 1500; // in milliseconds (1.5 seconds)

    // Initialize opacity
    let currentOpacity = 0;

    // Decrease the opacity in multiple chunks
    for (let i = 0; i < numberOfChunks; i++) {
        setTimeout(() => {
            currentOpacity += 0.2; // Increment the opacity in increments of 0.2
            screenImage.style.opacity = `${currentOpacity}`;
        }, i * (totalDuration / numberOfChunks));
    }

    // Remove the event listener after the button is clicked once
    document.getElementById("shutter3").removeEventListener("click", load3);
}

// Event listener for the shutter button
document.getElementById("shutter3").addEventListener("click", load3);