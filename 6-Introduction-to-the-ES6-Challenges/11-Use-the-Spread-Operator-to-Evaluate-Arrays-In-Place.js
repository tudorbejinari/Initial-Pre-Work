// Spread operator allows to expand array and other extenssion in places where multiple parameters or elements are expected.
// Spread operator syntax is much better to read and maintain.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  //  it’s a new copy, whereas arr2 = arr1 is just saying arr2 are the same as arr1
// ...arr returns an unpacked array or you can say it spreads the array.
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
