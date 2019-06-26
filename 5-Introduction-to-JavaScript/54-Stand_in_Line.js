// Queue is an abstract Data Structure where items are kept in order. new items goes at the end and old items are rmoved from the front.
function nextInLine(arr, item) {
  // Your code here
// push() function allows to add items to the end of an array.
  arr.push(item);
  // shift() functions allows to remove an item from the beginning of an array.
  return item = arr.shift();  // Change this line
}


// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
