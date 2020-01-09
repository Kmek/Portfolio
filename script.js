// JavaScript for Kate's Portfolio

function loadFile(filename) {
    window.location.href = ("layout.html#" + filename)
}

function loadFileFromUrl() {
    let url = document.URL
    let file = url.slice(url.lastIndexOf("#") + 1)
    $('#page').load(file+"#")
}