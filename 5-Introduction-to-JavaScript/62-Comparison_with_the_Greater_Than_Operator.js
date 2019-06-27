// The greater than operator (>) compares the values of 2 numbers.
// Important to remember : greater than operator will convert data types of values while comparing
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(100);

//  in this example testGreaterThan(100) should return "Over 10" true.
