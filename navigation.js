// JS for Navigation (goes with navigation.css)
// Creates navigation buttons so they don't have to be copied

const navBtn = document.getElementById("navBtn")

const navTitles = ["Home", "Diffusion Sim", "Pathfinding Sim", "Vector Solver", "Web Design", "CS Courses", "Echo Internship", "5106C Robotics", "GrabCAD", "Awards", "Volunteering", "View On GitHub"]
const navLinks = ["index-buttons.html", "diffusion.html", "pathfinding.html", "vectorsolver.html", "websites.html", "cs50.html", "internship.html", "robotics.html", "grabcad.html", "awards.html", "hours.html", "https://github.com/Kmek/Portfolio"]

let navDots = document.createElement("h2")
navDots.innerHTML = "..."
navBtn.appendChild(navDots)

var navigationDiv = document.createElement("div")
navigationDiv.setAttribute("id", "navigation")

for (let i = 0; i < navTitles.length; i++) {
    let row = document.createElement("button")
    row.innerHTML = navTitles[i]
 
    let link = document.createElement("a")

    if (i != navTitles.length - 1) {
        row.setAttribute("onclick", ("loadFile('" + navLinks[i] + "')"))
        link.setAttribute("href", "#")
    }
    else {
        link.setAttribute("href", navLinks[i])
    }

    link.appendChild(row)
    navigationDiv.appendChild(link)
}

navBtn.appendChild(navigationDiv)