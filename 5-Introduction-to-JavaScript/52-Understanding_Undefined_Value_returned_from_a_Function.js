// There are situations when a function doesnt have a return statement and everytime when you call it you will get returned value of underfined...
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
