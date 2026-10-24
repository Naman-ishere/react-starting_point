# Important Array Methods

These four array methods are especially important before React because they help you display lists and derive new data without changing the original array.

| Method | Returns | Use it when... |
| --- | --- | --- |
| `forEach()` | `undefined` | You want to perform an action for every item. |
| `map()` | A new array | You want to transform every item. |
| `filter()` | A new array | You want to keep only matching items. |
| `reduce()` | One final value | You want to combine items into a total, object, or other result. |

## `forEach()`

`forEach()` calls a function once for each item. It is useful for side effects such as logging, but not for creating a transformed array.

```js
numbers.forEach((number) => console.log(number));
```

## `map()`

`map()` transforms each item and returns a new array of the same length.

```js
const doubled = numbers.map((number) => number * 2);
// [2, 4, 6, 8, 10]
```

In React, `map()` is the standard way to render a list:

```js
const items = names.map((name) => <li key={name}>{name}</li>);
```

## `filter()`

`filter()` returns only the values whose callback returns `true`.

```js
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// [2, 4]
```

Use it in React to filter search results or remove an item from state.

## `reduce()`

`reduce()` visits each item and builds one final result. Its second argument is the initial accumulator value.

```js
const total = numbers.reduce((sum, number) => sum + number, 0);
// 15
```

Avoid mutating the original array inside these callbacks. Run the lesson with `node important_methods.js`.
