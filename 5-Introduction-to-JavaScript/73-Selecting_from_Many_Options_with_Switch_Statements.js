// Switch statement is very useful when you have many options to choose from.
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    // // just number the cases to make them different from each other (instead of doing case value1), or else you get an undeclared variable
    case 1: answer = "alpha";
    break;
    case 2: answer = "beta";
    break;
    case 3: answer = "gamma";
    break;
    case 4: answer =  "delta";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
