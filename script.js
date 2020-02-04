// JavaScript for Kate's Portfolio

function loadFile(filename) {
    window.location.href = ("#" + filename)
}

function loadFileFromUrl() {
    let url = document.URL
    if (!url.includes("#")) {
        loadFile("index-buttons.html")
    } else {
        let file = url.slice(url.lastIndexOf("#") + 1)
        $('#page').load(file+"#")
        window.scrollTo()
    }
}