// const keyword is another way to declare varibles in ES6.
// Very important Once you assign a varible to const it cannot be rreassigned. otherwise you will get an error...
function printManyTimes(str) {
  "use strict";

  // change code below this line
// variable SENTENCE assigned to const now will be always "freeCodeCamp is cool!"
  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
