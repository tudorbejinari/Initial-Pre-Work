// const {objectPropertyName: newVariableName } = objectName;
// the above line code is the syntax for destructuring assignment...
// destructuring assignment is a special syntax fro neatly assigning values taken directly from an object to variables.
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const {tomorrow:tempOfTomorrow} = avgTemperatures // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
