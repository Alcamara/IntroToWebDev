let evenNum = document.forms["evenNum"];
let startingNum = document.getElementById("startingNum");
let endingNum = document.getElementById("endingNum");
let step = document.getElementById("step");
let submitButton = document.getElementById("submitButton");


function validate() {

  if (!evenNum.checkValidity()){
    evenNum.className = "was-validated";
    return false;
  }

  let operand1 = parseInt(startingNum.value, 10);
  let operand2 = parseInt(endingNum.value, 10);
  let operand3 = parseInt(step.value, 10);
}
