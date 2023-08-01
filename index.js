let homeScore = 0
let guestScore = 0

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

function add1Guest() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function add2Guest() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function add3Guest() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}