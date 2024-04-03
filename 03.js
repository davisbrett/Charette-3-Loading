function load3() {
    const screenImage = document.getElementById("screenImage3");
    const numberOfChunks = 5;
    const totalDuration = 1500;

    let currentOpacity = 0;


    for (let i = 0; i < numberOfChunks; i++) {
        setTimeout(() => {
            currentOpacity += 0.2;
            screenImage.style.opacity = `${currentOpacity}`;
        }, i * (totalDuration / numberOfChunks));
    }

    document.getElementById("shutter3").removeEventListener("click", load3);
}

document.getElementById("shutter3").addEventListener("click", load3);