# Components and JSX

React applications are built from **components**: reusable JavaScript functions that return JSX. JSX is a syntax extension that looks similar to HTML and is converted into JavaScript by a React build tool.

## A component

Component names begin with a capital letter:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

`name` is a prop. Curly braces let JSX evaluate a JavaScript expression.

## Using a component

```jsx
function App() {
  return <Greeting name="Naman" />;
}
```

Use parentheses for multi-line JSX. A component must return one parent element; use a `<div>`, `<main>`, or fragment (`<>...</>`) when needed.

## JSX rules to remember

- Use `className`, not HTML's `class` attribute.
- Close every tag: `<img />` and `<Greeting />`.
- Put JavaScript expressions inside `{}`.
- Use camelCase event props, such as `onClick`.

The example in `component_jsx.js` belongs in a React project and should not be run directly with Node.js.
