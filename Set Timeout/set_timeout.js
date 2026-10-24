// setTimeout runs a callback once after a delay measured in milliseconds.
console.log("Starting...");

const timerId = setTimeout(() => {
  console.log("This message appears after one second.");
}, 1000);

// clearTimeout(timerId) would cancel the scheduled callback before it runs.
console.log("Timer ID:", timerId);
