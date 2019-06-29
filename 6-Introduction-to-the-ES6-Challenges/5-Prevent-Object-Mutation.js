// Object. freeze is a function that allows to prevent mutation.Now you cannot add update or delete propertied from it.
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
Object.freeze(MATH_CONSTANTS); // MATH_CONSTANTS object is not able to alter the value of PI, add, or delete properties because has Object.freeze as function.

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
