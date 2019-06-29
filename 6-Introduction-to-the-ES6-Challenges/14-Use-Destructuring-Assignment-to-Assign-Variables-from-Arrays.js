// you can destructure arrays the same as destructure objects.
// What I noticed that variable a is assignes the first value of the array and b is assigned the second value.
// Using the destructuring I swap the values a and b and I received the value of a stored in b and vice versa.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
 [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
