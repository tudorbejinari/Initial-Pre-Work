// ...rest operator allows to create functions that take a variable number of arguments
// The rest operator eliminates the need to check the args array and allows us to apply map(),
// filter() and reduce() on the parameters array.


const sum = (() => {
  "use strict";
  return function sum(...args) { //...spread operator on the args parameter is use by the sum function.
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
