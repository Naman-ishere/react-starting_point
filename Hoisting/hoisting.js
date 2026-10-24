// Hoisting: A phenomena where a variable or a function are moved to the top of their scope during the compilation period, before the code is executed;

// variable hoisting --> Only happens with var, returns value as undefined;
console.log(name_); 
var name_ = "Naman";

// let and const hoisting
// They throw a reference error saying that a user can't access the variable before it is initialized;

// function hoisting;
greet();
function greet() {
    console.log("Hello!!")
}; 

// arrow functions and functions inside variable, acts same as it was with var;