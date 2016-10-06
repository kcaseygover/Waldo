var count = 0;
function findWaldo(arr, found) {
  arr.forEach(function(elm) {
    if (elm == "Waldo") {
      found(count);
    }
    count ++; // execute callback
  });
    // execute callback
}
function actionWhenFound(indexValue) {
  console.log("Found Waldo at index " + indexValue +"!");
}
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
