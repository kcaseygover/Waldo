var counter = 0;

var countdownGenerator = function (x) {
  /* your code here */
  return function() {
    var blastOff = x - counter;
    counter ++;
    if (blastOff > 0) {
      return("T-minus: " + blastOff );

    } else if (blastOff === 0) {
      return ("Blast Off!!!")

    } else {
      return "Rockets already gone, bub!"
    }
  }

};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!
