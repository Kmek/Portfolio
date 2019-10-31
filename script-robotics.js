// JavaScript for robotics.html page

// ******************** Define Tables ******************** //
const table1 = document.getElementById("table1")
const table2 = document.getElementById("table2")
const table3 = document.getElementById("table3")
const tables = [table1, table2, table3]

// ******************** Data Sets ******************** //

var dataset1 = [
    {
        event: "Trinity High School Granite State VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4948.html",
        date: "10/29/2016",
        rank: "5",
        award: "Judges Award"
    }, {
        event: "Mt Washington VEX Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4954.html",
        date: "11/5/2016",
        rank: "1",
        award: "Judges Award"
    }, {
        event: "New Hampshire Holiday Classic VRC Tournament - Cube Division",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-4932.html",
        date: "12/3/2016",
        rank: "1",
        award: "Tournament Champion"
    }, {
        event: "VRC Frostbite Qualifier",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-5419.html",
        date: "12/10/2016",
        rank: "36",
        award: "n/a"
    }, {
        event: "Trinity Robotics StarStruck Extravaganza",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-2152.html",
        date: "1/14/2017",
        rank: "6",
        award: "Design Award"
    }, {
        event: "VEX Robotics Competition High School",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-2092.html",
        date: "1/21/2017",
        rank: "6",
        award: "Tournament Finalist"
    }, {
        event: "New Hampshire StarStruck Wrap-UP VRC Tournament",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-1708.html",
        date: "2/4/2017",
        rank: "10",
        award: "Tournament Champion & Inspire Award"
    }, {
        event: "NH/VT 2017 VRC State Championship",
        link: "https://www.robotevents.com/robot-competitions/vex-robotics-competition/RE-VRC-16-1792.html",
        date: "2/18/2017",
        rank: "7",
        award: "Build Award"
    }
]

var dataset2 = []

var dataset3 = []

const datasets = [dataset1, dataset2, dataset3]

// ******************** Fill Tables ******************** //

let order = []
for (let i = 0; i < 4; i++)
    order.push((tables[0].rows[0].cells[i].innerHTML).toLowerCase())

for (let i = 0; i < datasets[0].length; i++) {
    let newRow = tables[0].insertRow(i + 1)

    for (let t = 0; t < 4; t++) {
        if (order[t] == "event") {
            let link = document.createElement("a")
            link.setAttribute('href', (datasets[0][i].link))
            link.setAttribute('target', "_blank")
            newRow.insertCell(t).appendChild(link).innerHTML = (datasets[0][i].event)
        } else if (order[t] == "rank") {
            newRow.insertCell(t).innerHTML = (datasets[0][i].rank)
        } else if (order[t] == "date") {
            newRow.insertCell(t).innerHTML = (datasets[0][i].date)
        } else if (order[t] == "award") {
            newRow.insertCell(t).innerHTML = (datasets[0][i].award)
        }
    }
}

