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

  var start = parseInt(startingNum.value, 10);
  var end = parseInt(endingNum.value, 10);
  let step = parseInt(stepNum.value, 10);


  document.getElementById("message").innerText = `Here are the even numbers between ${start} and ${end} by ${step}'s:`;


  results.style.display = "block";
  submitButton.innerText = "Recalculate";

  return false;
}

/*function validate() {

  if (!evenNum.checkValidity()){
    evenNum.className = "was-validated";
    return false;
  }

  document.write(results);

  let start = parseInt(startingNum.value, 10);
  let end = parseInt(endingNum.value, 10);
  let step = parseInt(step.value, 10);
  let even = [];

  for (var i = start; i < end; i+=step) {
    if (i%2 === 0) {
      document.write(even[i]);
    } else {
      continue;
    }
  }

  return false;
}*/
