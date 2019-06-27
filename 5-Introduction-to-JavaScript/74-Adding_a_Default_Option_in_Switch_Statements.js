//  default is used when no matching case statements are found.
// Very important condition a b c are strings and should be in "a", "b", "c".
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a": answer = "apple";
    break;
    case "b": answer = "bird";
    break;
    case "c": answer = "cat";
    break;
    default: answer = "stuff";
    break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(4);
