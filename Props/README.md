# Props in React

**Props** (short for *properties*) are how React components pass data from a parent component to a child component. They work like function arguments in JavaScript and look like HTML attributes in JSX.

## Passing props to a component

Pass props to a component the same way you add attributes to an HTML tag. String literals can use quotes, while numbers, booleans, arrays, objects, and variables go inside curly braces `{}`:

```jsx
function App() {
  return (
    <StudentCard
      name="Naman"
      course="React Foundations"
      age={19}
      isEnrolled={true}
    />
  );
}
```

## Reading props in a child component

React groups all passed attributes into a single `props` object and passes it as the first parameter of the component function.

### Using the `props` object

```jsx
function StudentCard(props) {
  return (
    <h2>
      {props.name} - {props.course}
    </h2>
  );
}
```

### Using parameter destructuring (recommended)

Destructuring makes it clear which props a component expects and allows you to set default values:

```jsx
function StudentCard({ name, course, age = 18, isEnrolled = true }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <p>Status: {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>
    </section>
  );
}
```

## The `children` prop

Content placed between a component's opening and closing tags is automatically passed in the special `children` prop:

```jsx
function CardWrapper({ children }) {
  return <div className="card-wrapper">{children}</div>;
}

// Usage:
<CardWrapper>
  <StudentCard name="Naman" course="React Foundations" />
</CardWrapper>
```

## Key rules to remember

- **Props flow one way (parent to child):** Data moves downward from parent components to child components.
- **Props are read-only (immutable):** A component must never modify its own props. If data needs to change over time, use React state instead.
- **Any JavaScript value can be a prop:** You can pass strings, numbers, booleans, arrays, objects, JSX elements, and even functions (such as event handlers).

The example in `props.js` belongs in a React project and should not be run directly with Node.js.

