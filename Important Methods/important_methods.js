// forEach runs a function for every item. It does not return a new array.
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => console.log(`Number: ${number}`));

// map transforms every item and returns a new array.
const doubledNumbers = numbers.map((number) => number * 2);
console.log("map:", doubledNumbers);

// filter keeps only items that pass a condition and returns a new array.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("filter:", evenNumbers);

// reduce combines all items into one final value.
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log("reduce:", total);
