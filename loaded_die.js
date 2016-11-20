

var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];

  /* your code here */
  //var roll = 0;  //var roll = list;
  var roll = 0;
  //var roll = list[0];
  return function () {
    var list2 = list[roll];
    roll++
    if(roll === 10){
      roll = 0;
    }
    return list2;
  }



})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
console.log(loadedDie());  // 1
console.log(loadedDie());  // 6
console.log(loadedDie());  // 4
//////////

