projectSets = [{
        title: "Diffusion Sim",
        picture: "media/Diffusion sim.PNG",
        marks: ["HTML", "CSS", "JavaScript"],
        file: "diffusion.html"
    }, {
        title: "Pathfinding Sim",
        picture: "media/pathfinding-sim.png",
        marks: ["HTML", "CSS", "JavaScript"],
        file: "pathfinding.html"
    }, {
        title: "Vector Solver",
        picture: "media/vectorsolver.PNG",
        marks: ["HTML", "CSS", "JavaScript"],
        file: "vectorsolver.html"
    }, {
        title: "Portfolio",
        picture: "media/Portfolio.PNG",
        marks: ["HTML", "CSS", "JavaScript", "PrismJS", "JQuery"],
        file: "portfolio.html"
    }, {
        title: "CS Courses",
        picture: "media/cs50.png",
        marks: ["C", "JavaScript", "Java", "React Native"],
        file: "cs50.html"
    }
]

function loadProjects() {
    if (document.getElementById("projects").innerHTML == "") {
        const projectsDiv = document.getElementById("projects")
        for (let i = 0; i < projectSets.length; i++) {
            let box = document.createElement("div")
            box.setAttribute("onclick", ("loadFile('" + projectSets[i].file + "')"))
            box.setAttribute("class", "project")
            box.style.backgroundImage = "url('" + projectSets[i].picture + "')"

            let projectTitleDiv = document.createElement("div")
            let projectTitle = document.createElement("h4")
            projectTitle.innerHTML = projectSets[i].title
            projectTitleDiv.appendChild(projectTitle)
            box.appendChild(projectTitleDiv)

            if (projectSets[i].marks.length > 0) {
                let projectP = document.createElement("P")
                for (let j = 0; j < projectSets[i].marks.length; j++) {
                    let newMark = "<mark>" + projectSets[i].marks[j] + "</mark> "
                    projectP.innerHTML = (projectP.innerHTML + newMark)
                }
                box.appendChild(projectP)
            }
            
            projectsDiv.appendChild(box)
        }
    }
}