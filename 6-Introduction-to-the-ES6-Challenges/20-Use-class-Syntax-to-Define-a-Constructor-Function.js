// keyword class allows to create objects
// class keyword declares a new function, and a constructor is added, which would be invoked when new is called to create a new object
unction makeClass() {
  "use strict";
  /* Alter code below this line */
  // I create the Vegetable class using constructor with vegetable object and property name to be passed to constructor.
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot'); //when you put new keyword in the front of function call - function is treated as a constructor.
console.log(carrot.name); // => should be 'carrot'
