// the same destructure nested objects we can do into varibles.
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {tomorrow:{ max :maxOfTomorrow}}= forecast;  // change this line
  // const {today: { max:maxOfTomorrow}}=forecast; returns 83/// I personally like this process of destructuring.
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
