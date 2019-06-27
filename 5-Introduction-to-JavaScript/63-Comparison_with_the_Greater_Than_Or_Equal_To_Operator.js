//  (>=) compares the values of 2 numbers. if the number to the left is >= to the right number , it returns  true, otherwise false.
// Important to remember >= operator will convert data types while comparing.
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
