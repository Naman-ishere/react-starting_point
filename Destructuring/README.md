# Destructuring

Destructuring is a concise way to extract values from arrays and properties from objects into variables. It is used constantly in React for props, state, and function parameters.

## Object destructuring

Use curly braces to extract object properties by name:

```js
const student = { name: "Naman", age: 18 };
const { name, age } = student;
```

You can rename a property or provide a fallback value:

```js
const { name: studentName, city = "Unknown" } = student;
```

## Array destructuring

Use square brackets to extract values by position:

```js
const colors = ["red", "blue", "green"];
const [firstColor, secondColor] = colors;
```

Skip a value with an empty position, or gather the remaining values with rest syntax:

```js
const [firstColor, , thirdColor] = colors;
const [primaryColor, ...otherColors] = colors;
```

## React connection

React components commonly destructure props:

```js
function Profile({ name, age }) {
  return <p>{name} is {age}</p>;
}
```

Run the lesson with `node destructuring.js`.
