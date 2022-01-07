/*let testArray = [17,42,311,5,9,10,28,7,6];
let newElement = prompt("Enter a number of your choice:");
newElement = parseInt(newElement);
testArray.push(newElement);
let sum = 0;

for( let postion = 0; postion < testArray.length; postion++){
  sum += testArray[postion];
}

console.log(`The sum of ${testArray} is ${sum}`); */

let testArray = [];

//create a loop to prompt user to enter num 5 times
for(position = 0; position < 5; position++){
  let newElement = prompt("Enter a number of your choice:");
  newElement = parseInt(newElement);
  testArray.push(newElement);
}

let sum = 0;
for( let postion = 0; postion < testArray.length; postion++){
  sum += testArray[postion];
}
console.log(`The sum of ${testArray} is ${sum}`);
