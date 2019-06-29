// with ... rest operator you can get a collection of the values in the form an array.
// in our example we have a and b that have the values 1 and 2 but the rest of values gets ...arr which is the rest operator.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
 const [,, ...arr] = list; // ,, omits first two elements in an array.
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
