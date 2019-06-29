// When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.
// The let keyword behaves similarly, but with some extra features. When you declare a variable with the let keyword inside a block, statement, or expression, its scope is limited to that block, statement, or expression.
function checkScope() {
"use strict";
  let i = "function scope";
  if (i == true) {   //here i is declared only  within the if statement.
    i = "block scope";
    console.log("Block scope i is: ", i);  //i returns block scope
  }
  console.log("Function scope i is: ", i); //i returns function scope
  return i;                                //i returns function scope
}
