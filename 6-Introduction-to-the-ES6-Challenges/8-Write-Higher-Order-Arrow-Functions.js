// This is not an easy assignment.
// map(), filter()  and reduce() are higher order functions that take other functions as arguments for processing collections of data.
//
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  // filter() method creates a new array with all the elements provided above in variable realNumberArray.
  // map() method creates a new array with the results of calling a provided function on every element in the calling array.
// map () in other wordscalls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
const squaredIntegers = arr.filter((int) => Number.isInteger(int) && int >=0).map(num => num * num);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
