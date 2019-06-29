const increment = (function() {
  "use strict";
  return function increment(number, value = 1) { // we can add a default value like 1 in our situation or for many parameters as you want .
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
// 
