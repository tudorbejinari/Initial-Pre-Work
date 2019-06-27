// !== is the logical opposite to the strict equality operator.
//  Very important to remember strict inequality will not convert data types.
// 17 !== 17 false because both numbers
// 17 !== '17' true because one is number and one is string
// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(17);
