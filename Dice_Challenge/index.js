function randomNumber (max, min) {
    return Math.floor(Math.random() * max) + min;
};

function setDiceRoll(target) {

    let diceRoll = randomNumber(6,1);   
    let imgSelect = "images/dice" + diceRoll + ".png";    
    let image1 = document.querySelectorAll("img")[target]; 
    image1.setAttribute("src", imgSelect);

    return diceRoll;

};

function setWinner(rollOne, rollTwo) {
    var winner;
    if (rollOne > rollTwo) {
        winner = 1;
    } else if (rollOne < rollTwo) {
        winner = 2;
    } else {
        winner = 0;
    }

    switch (winner) {
        case 0:
            document.querySelector("h2").innerHTML = "Draw";
            break;
        case 1:
            document.querySelector("h2").innerHTML = "🚩 Player 1 wins!";
            break;
        case 2:
            document.querySelector("h2").innerHTML = "Player 2 wins! 🚩";
            break;
        default: 
    } 

}

function onRollClick() {

    //Roll Dice
    let rollOne = setDiceRoll(0);
    let rollTwo = setDiceRoll(1);

    //Update Winner
    setWinner(rollOne, rollTwo);

    //Roll One
    // let imgSelect = "images/dice" + diceRoll + ".png";    
    // let image1 = document.querySelectorAll("img")[0]; 
    // image1.setAttribute("src", imgSelect);

    // // $("#die1").attr("src", imgSelect);

    // //Roll Two
    // diceRoll = randomNumber(6,1);
    // imgSelect = "images/dice" + diceRoll + ".png";
    // let image2 = document.querySelectorAll("img")[1]; 
    // image2.setAttribute("src", imgSelect); 
    // // $("#die2").attr("src", imgSelect);

};