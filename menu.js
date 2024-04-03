document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const navigationInside = document.querySelector(".navigationInside");
    const blackBackground = document.querySelector(".blackBackground");

    let isVisible = false;

    menuButton.addEventListener("click", function () {
        if (isVisible) {
            navigationInside.style.display = "none";
            blackBackground.style.zIndex = -2;
        } else {
            navigationInside.style.display = "grid";
            blackBackground.style.zIndex = -1;
        }

        isVisible = !isVisible;
    });
});
