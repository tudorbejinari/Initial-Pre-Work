// In ES6 you can just write name , age once . instead of writing name: name, age: age.
// ES6 automatic converts name: name in name which is a great syntax to eliminate the redundancy .
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  ({name, age, gender});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
