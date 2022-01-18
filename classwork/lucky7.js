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
  let amountWon = 0;
  let highestAmountWon = 0;
  let rollCountAtHAW = 0;
  let totalNumRolls = 0;
  let currentBalance = startingBet;

  // function that generate a roll
  function rollDice() {

       return Math.floor(Math.random() * 7);

  }

  //function returns sum of 2 roll;
  function sumOfTwoRoll() {
    let rollOne = rollDice();
    let rollTwo = rollDice();

    return rollOne + rollTwo;
  }


  //checks to see of player won
  function checkIfWon(sum) {

    if (sum === 7) {
       currentBalance += 4;
       amountWon +=4;
    } else {
      currentBalance -= 1;
    }

    if (amountWon > highestAmountWon) {
      highestAmountWon = amountWon;
      rollCountAtHAW = totalNumRolls;
    }
  }


  function runGame() {

    let sum;
    do {
      totalNumRolls++
      sum = sumOfTwoRoll();
      checkIfWon(sum);

    } while (currentBalance != 0);
  }

  runGame();

  document.getElementById("startingBet").innerText = `$${startingBet}.00`;
  document.getElementById("totalNumRolls").innerText = totalNumRolls;
  document.getElementById("highestAmountWon").innerText = `$${highestAmountWon}.00`;
  document.getElementById("rollCountAtHAW").innerText = rollCountAtHAW;



  results.style.display = "block";
  play.innerText = "Play Again";


  return false;
}




//
