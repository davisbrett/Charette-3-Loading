document.addEventListener('keydown', function (event) {
    var currentUrl = window.location.href;

    if (event.keyCode === 37) { // Left arrow key
        if (currentUrl.endsWith('index.html')) {
            window.location.href = '20.html';
        } else if (currentUrl.endsWith('01.html')) {
            window.location.href = 'index.html';
        } else {
            navigateToPreviousPage();
        }
    } else if (event.keyCode === 39) { // Right arrow key
        if (currentUrl.endsWith('20.html')) {
            window.location.href = 'index.html';
        } else if (currentUrl.endsWith('index.html')) {
            window.location.href = '02.html';
        } else {
            navigateToNextPage();
        }
    }
});

function navigateToPreviousPage() {
    var currentUrl = window.location.href;
    var currentPage = getPageNumber(currentUrl);
    var previousPage = currentPage > 1 ? (currentPage - 1) : 1;
    var previousPageUrl = getPageUrl(previousPage);
    window.location.href = previousPageUrl;
}

function navigateToNextPage() {
    var currentUrl = window.location.href;
    var currentPage = getPageNumber(currentUrl);
    var nextPage = currentPage + 1;
    var nextPageUrl = getPageUrl(nextPage);
    window.location.href = nextPageUrl;
}

function getPageNumber(url) {
    var pageNumber = url.match(/(\d+)\.html/);
    return pageNumber ? parseInt(pageNumber[1]) : 0;
}

function getPageUrl(pageNumber) {
    return 'https://davisbrett.github.io/Charrette-3-Loading/' + (pageNumber < 10 ? '0' + pageNumber : pageNumber) + '.html';
}
