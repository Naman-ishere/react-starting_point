// Logical AND (&&): the second expression runs only when the first is truthy.
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

// Logical OR (||): use a fallback when the first value is falsy.
const displayName = "";
console.log(displayName || "Guest");

// Nullish coalescing (??): use a fallback only for null or undefined.
const score = 0;
console.log(score ?? "No score");

// A ternary expression is a compact if/else that returns a value.
const age = 18;
const access = age >= 18 ? "Allowed" : "Not allowed";
console.log(access);
