// JavaScript for portfolio/index.html

const page = document.getElementById("page")
const header = document.getElementById("header")
const footer = document.getElementById("footer")

// Set innerhtml of page with .html file
/*function pageSet(id, pageToSet) {
    let object = '<object type="text/html" data="pageToSet"></object>'
    object = object.replace("pageToSet", pageToSet)
    page.innerHTML=object
}*/

// Load the header and footer from a file, so they only have to be changed in one place
function loadBase() {
    // header.innerHTML='<object type="text/html" data="header.html"></object>'
    footer.innerHTML='<object type="text/html" data="footer.html"></object>'
}


