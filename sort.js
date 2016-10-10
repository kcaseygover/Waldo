/*var array = [10, 2, 5, 1, 9];
array.sort(function(a,b){
  return a - b
});
console.log(array);*/

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sortStu = students.sort(function(a, b)  { //callback???
  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  var ageA = a.age;
  var ageB = b.age;

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if (nameA === nameB && ageA < ageB ) {
    return 0.5;
  }
    return 0;
});
console.log(sortStu);

