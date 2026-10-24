# Arrays and Objects

Arrays and objects both hold collections of data, but they organize that data differently:

- Use an **array** for an ordered list of values.
- Use an **object** for related values described by named keys.

## Arrays

An array is written with square brackets (`[]`). It can hold values of any type, including strings, numbers, booleans, other arrays, and objects.

```js
let names = ["Naman", "Alex", "Sam"];
let mixedValues = [15, "Lalalala", true];
```

### Indexes and length

Array positions are called indexes, and the first index is `0`.

```js
console.log(names[0]); // Naman
console.log(names[2]); // Sam
console.log(names.length); // 3
```

Reading an index that does not exist returns `undefined`.

### Adding and removing values

Arrays are mutable, meaning their contents can change:

```js
names.push("Priya"); // Adds to the end
names.pop(); // Removes and returns the final value
names.unshift("Ava"); // Adds to the beginning
names.shift(); // Removes and returns the first value
```

`push()` is used in the example JavaScript file to add a value to `randomShiiii`.

## Objects

An object is written with curly braces (`{}`). It stores data as **key-value pairs**.

```js
let sigmaInfo = {
  name: "Naman",
  age: 18,
  isMature: false
};
```

### Reading properties

Use dot notation when the property name is known, or bracket notation when it comes from a variable or contains characters that dot notation cannot use.

```js
console.log(sigmaInfo.name); // Naman
console.log(sigmaInfo["age"]); // 18

const property = "isMature";
console.log(sigmaInfo[property]); // false
```

### Updating and adding properties

Objects are mutable too. Assigning to a property updates it; assigning a new property name adds it.

```js
sigmaInfo.isMature = true;
sigmaInfo.country = "India";
```

## Arrays vs. objects

| Use an array when... | Use an object when... |
| --- | --- |
| Order and numeric positions matter. | Each value needs a descriptive name. |
| You have a list, such as tasks or scores. | You are describing one thing, such as a user or product. |
| You access values with `items[0]`. | You access values with `user.name`. |

Arrays are also objects in JavaScript, but their special ordered-list behavior makes them the right choice for sequences.

## `const` with arrays and objects

Use `const` when the variable itself will not be reassigned. It still allows changes to the contents:

```js
const colors = ["red", "blue"];
colors.push("green"); // Allowed
// colors = []; // Not allowed
```

## Run the example

From this folder, run:

```bash
node array_n_objs.js
```
