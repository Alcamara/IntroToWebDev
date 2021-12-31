let numSides = prompt('How many sides does the die have?');

function roll(numSides) {

     return Math.floor(Math.random() * numSides);

}

for (var i = 0; i < 20; i++) {
  console.log(roll(7));
}
