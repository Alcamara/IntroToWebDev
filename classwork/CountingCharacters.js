function countingCharacters(stringToCount) {
  console.log(stringToCount + ' has ' + stringToCount.length + ' Characters.')
}

countingCharacters('Ninja');

const countingCharacters2 = ( stringToCount, characterToFind) => {
  var characterCount = 0;
  for (var i = 0; i < stringToCount.length; i++) {
    if (stringToCount[i] === characterToFind) {
      characterCount++;
    }
  }

  console.log(`String to search in: ${stringToCount}`);
  console.log(`Character to find: ${characterToFind}`);
  console.log(`Number of times the caracter appears: ${characterCount}`);
}

countingCharacters2('xxxbxxxbbxxx', 'x');


const countPairsInString = function(string, pair) {
   let pairCounter = 0;

   for (var i = 0; i < string.length; i++) {
     if (string[i] === string[i+1]) {
       pairCounter++;
     }
   }
   console.log(`String to search in: ${string}`);
   console.log(`The pair to find: ${pair}`);
   console.log(`Number of times the pair appeared: ${pairCounter}`);
}

countPairsInString('xxaxxxbxx', 'xx');
