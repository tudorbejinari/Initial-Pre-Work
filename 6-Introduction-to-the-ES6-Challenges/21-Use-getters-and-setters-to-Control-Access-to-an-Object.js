function makeClass() {
  "use strict";
  /* Alter code below this line */
// In only did this part of the code and shows that I passed the challenge
  // class Thermostat {
  //   constructor(temperature) {
  //     this.temperature = temperature;
  //   }
  // }
  class Thermostat {
    constructor(fahrenheit) {
      this._tempInC = 5/9 * (fahrenheit - 32);
    }
  // Getter functions are meant to simply return (get) the value of an object's private variable
  //  to the user without the user directly accessing the private variable.
    get temperature(){
      return this._tempInC;
    }
  // Setter functions are meant to modify (set) the value of an object's private variable
  //  based on the value passed into the setter function.
    set temperature(newTemp){
      this._tempInC = newTemp;
    }
  }


  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
