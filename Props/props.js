// Props (short for properties) let you pass data from a parent component to a child component.
// Props are read-only: a child component should never modify its own props.

function StudentCard({ name, course, age = 18, isEnrolled = true }) {
  return (
    <section className="student-card">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <p>Status: {isEnrolled ? "Enrolled" : "Not Enrolled"}</p>
    </section>
  );
}

function CardWrapper({ children }) {
  return <div className="card-wrapper">{children}</div>;
}

function App() {
  return (
    <main>
      <h1>Student Directory</h1>
      <CardWrapper>
        <StudentCard name="Naman" course="React Foundations" age={19} />
        <StudentCard name="Aarav" course="JavaScript Basics" isEnrolled={false} />
      </CardWrapper>
    </main>
  );
}

export default App;

// This file is a React/JSX example. Run it inside a React project, not directly with Node.js.

