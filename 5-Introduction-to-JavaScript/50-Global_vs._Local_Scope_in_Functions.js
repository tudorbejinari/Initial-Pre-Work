// In JavaScript you can have local and global scope varibles at the same time. But the local variable has more power and take precedence over the global varibles.
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear = "sweater"

  // Only change code above this line
  return outerWear;
}

myOutfit();
// function myOutfit  will return "sweater " because the local variable is present.
