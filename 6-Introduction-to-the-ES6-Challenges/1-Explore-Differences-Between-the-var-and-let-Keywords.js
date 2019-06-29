// In ES6 let was introduced to replace var.
// In ES6 let a varible with the same name only can be declared once otherwise the result would be an error when var varible could be ovewritten  and no errors at all.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
