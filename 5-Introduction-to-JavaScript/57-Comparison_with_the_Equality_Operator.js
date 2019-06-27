// == is the equality operator that allows to compare 2 values and return true if they are equivalent or false if they are not.
//  = is different than ==
//  you can compare only the same type data otherwise you have to convert them one type to another.
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(12);
