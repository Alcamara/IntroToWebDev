let evenNum = document.forms["evenNum"];
let startingNum = document.getElementById("startingNum");
let endingNum = document.getElementById("endingNum");
let stepNum = document.getElementById("step");
let submitButton = document.getElementById("submitButton");




function validate() {

  evenNum.className = "needs-validation";

  if (!evenNum.checkValidity()){
    evenNum.className = "was-validated";
    return false;
  }

  let start = parseInt(startingNum.value, 10);
  let end = parseInt(endingNum.value, 10);
  let step = parseInt(stepNum.value, 10);
  let evenArray = [];
  let evenElements = "";


  document.getElementById("message").innerText = `Here are the even numbers between ${start} and ${end} by ${step}'s:`;

  for (var i = start; i < end; i+=step) {
    if (i%2 === 0) {
      evenArray.push(i);
    } else {
      continue;
    }
  };

  for (var i = 0; i < evenArray.length; i++) {
    evenElements += evenArray[i] +"\n";
  }



document.getElementById("element").innerText = evenElements ;

  results.style.display = "block";
  submitButton.innerText = "Recalculate";

  return false;
}

function resetView() {
    evenNum.className = "needs-validation";
    results.style.display = "none";
    submitButton.innerText = "Calculate";
    startingNum.focus();
}
