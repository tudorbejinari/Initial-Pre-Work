// (<=) operator compares the values of 2 numbers. number left <= number right returns true  , otherwise trueOrFalse
//  Important to remember (<=) operator converts data types.
function testLessOrEqual(val) {
  if (val <= 12 ) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(55);
