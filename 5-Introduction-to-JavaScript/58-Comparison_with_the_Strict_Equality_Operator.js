// === is strict equality . you only can compare the same type of data otherwise they considered unequal and will return false.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);

 // 7 === 7 true
 // 7 === '7' false because one data type is number and '7' is string.
