# `setTimeout`

`setTimeout()` schedules a function to run once after a delay. The delay is measured in milliseconds: `1000` milliseconds equals one second.

```js
const timerId = setTimeout(() => {
  console.log("Done");
}, 1000);
```

The callback runs after *at least* the requested delay; other work in JavaScript can make it happen later.

Cancel a timeout before it runs with `clearTimeout()`:

```js
clearTimeout(timerId);
```

In React, timeouts created in `useEffect` should be cleaned up when a component unmounts. Run the lesson with `node set_timeout.js`.
