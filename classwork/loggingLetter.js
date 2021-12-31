
document.getElementById("demo").innerHTML = 'Hello World!' ;

let printEachLetter = sentence => {
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      console.log(sentence[i]);
    }
  }
}

printEachLetter("I love being a Web Developer!")
