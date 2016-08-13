//Write a Fibonacci number generator that outputs the numbers in the series that are less than 500.
function runFib() {
  var fibArray = [0,1];
  for (var i = 0;; i++) {
    var newNum = fibArray[i] + fibArray[i+1];
    if (newNum < 500) {
      fibArray.push(newNum);
    } else {
      break;
    }
  }
  console.log(fibArray);
}
runFib();