// setInterval runs a callback repeatedly after the specified delay.
let count = 0;

const intervalId = setInterval(() => {
  count += 1;
  console.log(`Tick ${count}`);

  // Always clear an interval when it is no longer needed.
  if (count === 3) {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }
}, 1000);
