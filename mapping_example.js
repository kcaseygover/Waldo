var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

console.log(input);
var getOnlyY = function(xyparam)  {
  return xyparam.y;
}
var addFive = function(sourceValue) {
  return sourceValue + 5;
}

var result = input.map(getOnlyY);
var addedResult = result.map(addFive);

console.log(addedResult);