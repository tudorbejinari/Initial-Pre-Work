// You can use multiple conditional operators to check for multiple conditions
// function belows return positive if num>0 , returns negative else if num<0 or returns zero else other options which only num=0 left.
function checkSign(num) {
  return (num>0) ? "positive" : (num<0) ? "negative" : "zero";
}

checkSign(10);
