//  Math.floor(Math.random() * (max - min + 1)) + min ---this is the formula that allows to generate a random number that falls within a range of two specific numbers.
// min defines the minimum number and max the maximum number.
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
