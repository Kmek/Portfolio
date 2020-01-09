// JavaScript for Kate's Portfolio

function loadFile(filename) {
    console.log("1 " + document.URL)

    window.location.href = ("layout.html#" + filename)
    console.log("4 " + document.URL)
}

function loadFileFromUrl() {
    console.log("5 " + document.URL)
    let url = document.URL
    console.log("6 " + document.URL)
    let file = url.slice(url.lastIndexOf("#") + 1)
    console.log("7 " + document.URL)
    $('#page').load(file+"#")
    console.log("8 " + document.URL)
}