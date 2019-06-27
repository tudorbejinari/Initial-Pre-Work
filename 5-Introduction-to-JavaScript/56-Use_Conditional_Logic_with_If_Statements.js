// if (condition is true) {
//   statement is executed
// }
// If statement works very well with Boolean condition and it can be only true or false.
// If the condition is true program is executed , when is false is not  executed.
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
  if(wasThatTrue) {
    return "Yes, that was true";
  }
  return  "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);
