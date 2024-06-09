// If else
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else {
    console.log("x is not greater than 5");
}

// Else if
let y = 7;
if (y > 10) {
    console.log("y is greater than 10");
} else if (y > 5) {
    console.log("y is greater than 5 but not greater than 10");
} else {
    console.log("y is not greater than 5");
}

// Switch
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("It's a banana");
        break;
    case "apple":
        console.log("It's an apple");
        break;
    default:
        console.log("Unknown fruit");
}

// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For in
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// For of
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// Do while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// While loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// Break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Skips iteration when i is 3
    }
    if (i === 7) {
        break; // Breaks the loop when i is 7
    }
    console.log(i);
}
