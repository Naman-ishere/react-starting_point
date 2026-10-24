# Logical and Ternary Operators

Logical operators combine conditions or provide fallback values. Ternary expressions choose one of two values. Both are common in React conditional rendering.

## Logical operators

```js
isLoggedIn && showDashboard(); // Runs only when isLoggedIn is truthy
const name = inputName || "Guest"; // Uses Guest when inputName is falsy
const count = savedCount ?? 0; // Uses 0 only when savedCount is null or undefined
```

`||` treats `0`, `false`, and an empty string as missing. `??` does not, so use `??` when those values are valid.

## Ternary operator

The ternary operator has this form:

```js
condition ? valueWhenTrue : valueWhenFalse
```

Example:

```js
const message = isLoggedIn ? "Welcome back" : "Please sign in";
```

## React connection

```js
{isLoggedIn && <Dashboard />}
{isLoggedIn ? <Dashboard /> : <Login />}
```

Use a regular `if` statement when the condition becomes difficult to read. Run the lesson with `node logical_ternary.js`.
