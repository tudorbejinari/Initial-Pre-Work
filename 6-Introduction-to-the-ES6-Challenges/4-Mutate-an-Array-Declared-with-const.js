// very important to remember that objects(arrays and functions) assigned to a varible using const are still mutable.
// You can mutate the object [5, 7, 2], all the array elements in s are mutable
// But you cannot use the variable identifier s to point to a different array using the assignmetn operator ex: // s = [2, 5, 7]; <- this is invalid. 
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
