
function increaseScore(team) {
    const scoreId = `team${team}-score`;
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent); 
    scoreElement.textContent = ++currentScore;
}

function reduceScore(team) {
    const scoreId = `team${team}-score`;
    const scoreElement = document.getElementById(scoreId);
    let currentScore = parseInt(scoreElement.textContent); 
    if (currentScore > 0) {
        scoreElement.textContent = --currentScore;
    }
}


function setScore(team) {
    const scoreId = `team${team}-score`;
    const scoreElement = document.getElementById(scoreId);
    const teamNameElement = document.getElementById(`team${team}-name`);
    const teamName = teamNameElement.textContent;
    let newScore = prompt(`Lütfen ${teamName} takımının yeni skorunu girin:`);
    if (newScore !== null) {
        newScore = parseInt(newScore.trim()) || 0;
        if (newScore < 0) {
            newScore = 0;
        }
        scoreElement.textContent = newScore;
    }
}

function changeName(team) {
    const teamNameId = `team${team}-name`;
    const teamNameElement = document.getElementById(teamNameId);
    const currentName = prompt("Lütfen takımın yeni ismini giriniz:");
    if (currentName !== null) {
        teamNameElement.textContent = currentName;
    }
}

function reset(team){
    const teamNameId = `team${team}-name`;
    const teamNameElement = document.getElementById(teamNameId);
    const scoreId = `team${team}-score`;
    const scoreElement = document.getElementById(scoreId);
    if(`${team}`=="A"){
        const takım =document.getElementById("teamB-name")
        scoreElement.textContent=0;
        teamNameElement.textContent="Fenerbahce"
    }
    else{
        scoreElement.textContent=0;
        teamNameElement.textContent="Galatasaray"
    }
}
