let myArray = [1, 2, 3, 4, 5];

console.log(myArray[0]);
console.log(myArray[2]);

let anotherArray = new Array(3);

console.log(myArray[1]);
myArray[1] = 10;
console.log(myArray);

console.log(myArray.length);
myArray.sort(); 
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (let index in myArray) {
  console.log(myArray[index]);
}

myArray.forEach(function(element) {
  console.log(element);
});