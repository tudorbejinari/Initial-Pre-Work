// In our challenge function abtest if a and b are less than 0 than it will imediately exit with a value of underfined bacause return statement is reached and function stops.  // 
// Setup
function abTest(a, b) {
  // Only change code below this line
  if ( a < 0 || b < 0){
 return;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
