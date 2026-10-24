// React components are JavaScript functions that return JSX.
// JSX looks like HTML but is written inside JavaScript files.

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  const user = "Naman";
  return (
    <main>
      <Greeting name={user} />
      <p>Welcome to React.</p>
    </main>
  );
}

export default App;

// This file is a React/JSX example. Run it inside a React project, not directly with Node.js.
