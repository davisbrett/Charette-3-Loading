const image1 = document.querySelector('.screenImage19:nth-child(1)');
const image2 = document.querySelector('.screenImage19:nth-child(2)');

image2.style.display = 'none';

function toggleImages() {
    if (image1.style.display === 'none') {
        image1.style.display = 'block';
        image2.style.display = 'none';
    } else {
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
}

document.getElementById("shutter19").addEventListener("click", function () {
    setInterval(toggleImages, 1000);

    document.getElementById("shutter19").removeEventListener("click", arguments.callee);
});
