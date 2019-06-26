// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
// As far I understand everything  to the right of the equal sign is resolved before the value is assigned.
// In the example below processed variable has a value of 2 from  (7+3)/2
  processed = processArg(7);
