let luckySeven = document.forms["luckySeven"];
let starting = document.getElementById("placeBet")
let play = document.getElementById("playButton")

function validate() {
  luckySeven.className = "needs-validation";

  if (!luckySeven.checkValidity()) {
    luckySeven.className = "was-validated"
    return false;
  }

  let startingBet = parseInt(starting.value, 10);
  let numRolls = 0;
  let highestAmountWon = 0;
  let rollCountAtHAW = 0;
  let totalNumRolls = 0;
  let currentBalance = startingBet;
  let currentRoll = 0;

  document.getElementById("startingBet").innerText = startingBet;
  document.getElementById("totalNumRolls").innerText = totalNumRolls;
  document.getElementById("highestAmountWon").innerText = highestAmountWon;
  document.getElementById("rollCountAtHAW").innerText = rollCountAtHAW;



  results.style.display = "block";


  return false;
}

// six side dice roll
function rollDice() {

     return Math.floor(Math.random() * 7);

}

//function roll dice and return sum;
function sumOfTwoRoll() {
  let rollOne = rollDice();
  let rollTwo = rollDice();

  return rollOne + rollTwo;
}

//
function checkIfWon(sum) {

  if (sum === 7) {
     currentTotal += 4;
  } else {
    currentTotal -= 1;
  }

  if (currentTotal > highestAmountWon) {
    highestAmountWon = currentTotal;
    totalNumRolls = currentRoll;
  }
}





//
