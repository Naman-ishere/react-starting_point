# JavaScript Foundations for React

This repository is a beginner-friendly collection of JavaScript concepts to learn before starting React. React is built with JavaScript, so being comfortable with these foundations makes it much easier to understand components, props, state, event handlers, and rendering lists.

Each topic has its own folder with a small JavaScript example. Most completed lessons also include a README with a fuller explanation and examples.

## What you will learn

| Topic | Why it matters in React |
| --- | --- |
| `let`, `var`, and `const` | Components frequently use `const`; understanding scope prevents bugs. |
| Arrays and objects | React state, props, and API data are commonly arrays and objects. |
| Functions and arrow functions | Components and event handlers are functions; arrow functions are used throughout React code. |
| Template literals | Useful for dynamic text, class names, URLs, and messages. |
| Hoisting | Helps explain when variables and functions can safely be used. |
| Destructuring | Makes it easy to read values from props and state. |
| Array/object methods | Methods such as `map`, `filter`, and `find` are essential for rendering and updating data. |
| Logical and ternary operators | Used for conditional rendering in JSX. |
| `setTimeout` and `setInterval` | Introduces asynchronous timing and cleanup concepts. |
| Components and JSX | Bridges core JavaScript concepts into React's component model. |

## Current lesson folders

- [Arrays and Objects](<Arrays and Objects/README.md>) - ordered lists, key-value data, property access, and mutation.
- [Diff btwn Let, Var and Const](<Diff btwn Let, Var and Const/README.md>) - declarations, reassignment, hoisting, and scope.
- [Functions and Arrow Functions](<Functions and Arrow Functions/README.md>) - reusable functions and arrow-function syntax.
- [Hoisting](<Hoisting/README.md>) - how JavaScript handles declarations before execution.
- [Template Literals](<Template Literals/README.md>) - dynamic strings with backticks and `${...}`.
- `Destructuring` - extracting values from arrays and objects.
- `Important Methods` - commonly used JavaScript methods.
- `Logical and Ternary Operators` - writing conditions compactly.
- `Set Timeout` and `Set Interval` - scheduled and repeated work.
- `Component and JSS` - component and JSX concepts.

## How to use this repository

1. Start with `let`, `const`, and `var`.
2. Work through arrays, objects, functions, and template literals.
3. Practice each example by changing values and running the file.
4. Continue with destructuring, array methods, conditions, and asynchronous JavaScript.
5. Move on to React after you can confidently read and write these patterns.

Run an example with Node.js from the repository root:

```bash
node "Template Literals/template_literal.js"
```

Replace the path with the lesson file you want to run. Install a current [Node.js](https://nodejs.org/) version if `node` is not available in your terminal.

## Before moving to React

You are ready to begin React when you can comfortably:

- Declare values with `const` and `let`, and explain block scope.
- Create, call, and pass arguments to regular and arrow functions.
- Read and update arrays and objects without mutating data accidentally.
- Use `map()` to transform an array and understand why React uses it for lists.
- Destructure objects and arrays.
- Write conditional logic with `if`, `&&`, and ternary expressions.
- Understand template literals and basic asynchronous code.

The goal is not to memorize every JavaScript feature. It is to recognize these patterns, practice them, and know where to look when you need more detail.
