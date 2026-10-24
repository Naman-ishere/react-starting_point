# Template Literals

Template literals are a JavaScript string syntax written with backticks (`` ` ``). They make it easy to insert variables or expressions directly into a string.

## Syntax

Use `${...}` inside a template literal to interpolate a value:

```js
const name = "Naman";
console.log(`My name is: ${name}`);
```

Output:

```text
My name is: Naman
```

## Comparison with string arguments

The example file first logs a label and a variable as separate arguments:

```js
console.log("My name is:", name_);
```

It then uses a template literal to build one complete string:

```js
console.log(`My name is: ${name_}`);
```

Template literals are especially helpful when a message contains several values, expressions, or multiple lines.

## Run the example

From this folder, run:

```bash
node template_literal.js
```
