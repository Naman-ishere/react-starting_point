# Functions and Arrow Functions

Functions are reusable blocks of code that perform a task when they are called. This example defines the same kind of greeting with a function declaration and an arrow function.

## Function declaration

A function declaration uses the `function` keyword:

```js
function greet() {
  console.log("Hello!!");
}
```

Call it with its name and parentheses:

```js
greet(); // Hello!!
```

## Arrow function

An arrow function uses the `=>` syntax. In this example, `greetMore` accepts a `name_` parameter and includes it in a template literal:

```js
let greetMore = (name_) => {
  console.log(`Hello, ${name_}`);
};
```

Call it by passing a name:

```js
greetMore("Naman"); // Hello, Naman
```

## Run the example

From this folder, run:

```bash
node funcs_arrowFuncs.js
```

The current file only defines the functions, so it does not print anything until `greet()` or `greetMore(...)` is called.
