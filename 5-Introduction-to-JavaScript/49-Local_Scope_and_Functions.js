//Local Scope have only the varibles which are declared within a function. This variables are only visibles within that function.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
