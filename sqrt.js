var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var pythagoras = function(xyparam)  {
  var xVal = xyparam["x"];
  var yVal = xyparam["y"];

  var squaredX = xVal * xVal;
  var squaredY = yVal * yVal;

  var squaredZ = squaredX + squaredY;
  var zVal = Math.sqrt(squaredZ);

  return zVal;
}
var result = input.map(pythagoras)

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);