//  its very imporatant to have the right order of logic if, wlse if statements in the function so that it will return the correct statements in all cases.
//
function orderMyLogic(val) {
   if (val < 5) {
    return "Less than 5";
    }
   else if (val < 10) {
    return "Less than 10";
  }
   else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
