# `let`, `var`, and `const`

`let`, `var`, and `const` are JavaScript keywords for declaring variables. Modern JavaScript generally uses `const` by default, and `let` when a variable must later be reassigned. Avoid `var` in new code because its function scope and redeclaration behavior can cause unexpected results.

## Quick comparison

| Feature | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Can be reassigned | Yes | Yes | No |
| Can be redeclared in the same scope | Yes | No | No |
| Use before its declaration | Returns `undefined` | Throws `ReferenceError` | Throws `ReferenceError` |
| Recommended for new code | No | When reassignment is needed | Yes, by default |

## Scope

A *scope* determines where a variable can be accessed. A block is code enclosed in curly braces, such as an `if` statement, loop, or standalone `{ ... }` section.

### `var`: function scope

`var` is available throughout the function in which it is declared. It does not create a new variable inside ordinary blocks, so a `var` declared in an `if` block remains available outside that block.

```js
if (true) {
  var animal = "Cheetah";
}

console.log(animal); // Cheetah
```

### `let`: block scope

`let` exists only in the block where it is declared. This makes it useful for values that change, such as counters or values chosen in a condition.

```js
if (true) {
  let age = 17;
  console.log(age); // 17
}

// console.log(age); // ReferenceError: age is not defined
```

### `const`: block scope with a fixed binding

`const` has the same block scope as `let`, but its variable binding cannot be reassigned after declaration.

```js
const pi = 3.14159;
// pi = 3.14; // TypeError
```

For objects and arrays, `const` prevents assigning a completely new value, but it does not make the contents immutable:

```js
const user = { name: "Naman" };
user.name = "Alex"; // Allowed
// user = {}; // TypeError
```

## Hoisting and the temporal dead zone

All three declarations are processed before code runs. `var` is initialized as `undefined`, which is why it can be read before its declaration. `let` and `const` remain in the *temporal dead zone* from the start of their scope until their declaration is reached; accessing them there throws a `ReferenceError`.

```js
console.log(city); // undefined
var city = "Delhi";

// console.log(country); // ReferenceError
let country = "India";
```

## Run the example

From this folder, run:

```bash
node let_var_constDiff.js
```

The current example declares variables only, so it produces no output.
