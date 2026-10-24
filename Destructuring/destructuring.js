// Destructuring extracts values from arrays and objects into variables.

const student = { name: "Naman", age: 18, city: "Delhi" };
const { name, age, city = "Unknown" } = student;
console.log(name, age, city);

// Rename a property while destructuring.
const { name: studentName } = student;
console.log(studentName);

const colors = ["red", "blue", "green"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

// Rest syntax collects remaining values into a new array.
const [primaryColor, ...otherColors] = colors;
console.log(primaryColor, otherColors);
