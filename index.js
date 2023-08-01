let homeScore = 0
let awayScore = 0

function add1Home() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function add2Home() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function add3Home() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

function add1Away() {
    awayScore += 1
    document.getElementById("away-score").textContent = awayScore
}

function add2Away() {
    awayScore += 2
    document.getElementById("away-score").textContent = awayScore
}

function add3Away() {
    awayScore += 3
    document.getElementById("away-score").textContent = awayScore
}