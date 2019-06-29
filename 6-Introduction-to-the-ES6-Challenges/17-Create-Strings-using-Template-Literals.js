// Template literals allow you to create multi line strings.
`` are used to wrap the strings.
// my favorite syntax in ES6 is ${varible} , you dont need concatenation , just drop the variable in a template string and wrap it with ${}
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  // You can just have a for loop here and it will work the same .......................
  const resultDisplayArray =  [
   `<li class="text-warning">${result.failure[0]}</li>`,
   `<li class="text-warning">${result.failure[1]}</li>`,
   `<li class="text-warning">${result.failure[2]}</li>` ];
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 [ `<li class="text-warning">${result.failure[0]}</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
