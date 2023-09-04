let homeScoreEl = document.getElementById('home-score');
let visitorScoreEl = document.getElementById('visitor-score');

let homeScore = 0
let visitorScore = 0

homeScoreEl.textContent = homeScore;
visitorScoreEl.textContent = visitorScore;


function plus1home() {
    homeScore = homeScore + 1
    homeScoreEl.textContent = homeScore

}

function plus2home() {
    homeScore = homeScore + 2
    homeScoreEl.textContent = homeScore

}

function plus3home() {
    homeScore = homeScore + 3
    homeScoreEl.textContent = homeScore

}

function plus1visitor() {
    visitorScore = visitorScore + 1
    visitorScoreEl.textContent = visitorScore

}

function plus2visitor() {
    visitorScore = visitorScore + 2
    visitorScoreEl.textContent = visitorScore

}

function plus3visitor() {
    visitorScore = visitorScore + 3
    visitorScoreEl.textContent = visitorScore

}

function newGame() {
    visitorScore = 0
    homeScore = 0

    visitorScoreEl.textContent = visitorScore
    homeScoreEl.textContent = homeScore
}