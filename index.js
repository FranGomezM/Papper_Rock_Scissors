function getRandom3Dice() {
    let num = Math.floor(Math.random()*3);
    while (num > 2) {
        num = Math.floor(Math.random()*3);
    }
    return num;
}

function getPcHand() {
    let num = getRandom3Dice();
    let hand = "";
    if (num === 0){
        return hand = "papper";
    }
    else if (num === 1) {
        return hand = "rock";
    }
    else {
        return hand = "scissors";
    }
}

function playGame(playerHand) {
    let playerCont = Number(document.getElementById("player").textContent);
    console.log(playerCont);
    let pcCont = Number(document.getElementById("pc").textContent);
    console.log(pcCont);
    let play = true;
    let PcHand = getPcHand();
    if (playerCont < 1|| pcCont < 1){
        play = false;
    }
    if (play === true){
        if (playerHand === PcHand ) {
            document.getElementById("text").textContent = "draw...";
        }
        else if (playerHand === "papper" && PcHand === "rock") {
            document.getElementById("text").textContent = "You win this round!";
            --pcCont;
            document.getElementById("pc").textContent = pcCont;
        }
        else if (playerHand === "papper" && PcHand === "scissors") {
            document.getElementById("text").textContent = "You loose this round...";
            --playerCont;
            document.getElementById("player").textContent = playerCont;
        }
        else if (playerHand === "rock" && PcHand === "papper") {
            document.getElementById("text").textContent = "You loose this round...";
            --playerCont;
            document.getElementById("player").textContent = playerCont;
        }
        else if (playerHand === "rock" && PcHand === "scissors") {
            document.getElementById("text").textContent = "You win this round!";
            --pcCont;
            document.getElementById("pc").textContent = pcCont;
        }
        else if (playerHand === "scissors" && PcHand === "papper") {
            document.getElementById("text").textContent = "You win this round!";
            --pcCont;
            document.getElementById("pc").textContent = pcCont;
        }
        else if (playerHand === "scissors" && PcHand === "rock") {
            document.getElementById("text").textContent = "You loose this round...";
            --playerCont;
            document.getElementById("player").textContent = playerCont;
        }
    }
    if (playerCont < 1){
        return document.getElementById("text").textContent = "You lost...";
        play = false;
    }
    else if (pcCont < 1){
        return document.getElementById("text").textContent = "You won!";
        play = false;
    }
}