# Hoisting

Hoisting is JavaScript's behavior of processing declarations before executing the surrounding code. It affects variables and functions differently depending on how they are declared.

## `var` hoisting

`var` declarations are hoisted and initialized with `undefined`. Therefore, reading a `var` variable before its assignment does not throw an error:

```js
console.log(name_); // undefined
var name_ = "Naman";
```

Conceptually, JavaScript treats this like:

```js
var name_;
console.log(name_);
name_ = "Naman";
```

## `let` and `const`

`let` and `const` declarations are also processed before execution, but they remain unavailable in the *temporal dead zone* until their declaration is evaluated. Accessing either one beforehand throws a `ReferenceError`.

```js
console.log(age); // ReferenceError
let age = 20;
```

## Function declarations

Function declarations are hoisted with their function body, so they can be called before they appear in the source file:

```js
greet();

function greet() {
  console.log("Hello!!");
}
```

Function expressions and arrow functions stored in variables follow the hoisting behavior of the variable declaration (`var`, `let`, or `const`).

## Run the example

From this folder, run:

```bash
node hoisting.js
```

Expected output:

```text
undefined
Hello!!
```
