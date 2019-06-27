 // != id the opposite to equality. Very important to remember that inequality operator will convert data types of value while comparing.
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(99);

 // testNotEqual(99) will return "Equal"
 // testNotEqual ('99') will return "Equal" . 
