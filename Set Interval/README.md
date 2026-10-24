# `setInterval`

`setInterval()` schedules a function to run repeatedly after a delay in milliseconds.

```js
const intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);
```

Stop it with `clearInterval()` when the repeated work is no longer needed:

```js
clearInterval(intervalId);
```

The example prints three ticks and then clears its own interval. In React, intervals created in `useEffect` must be cleared in the cleanup function to prevent memory leaks or duplicated timers.

Run the lesson with `node set_interval.js`.
