// (<) less than operator compares the values of 2 numbers. if the number on the left is less than right number returns true, otherwise false.
// Important to remember (<) operator converts data types while comparing.
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55 ) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(100);
