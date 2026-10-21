
import { useState } from "react";
import TextBox from "./TextBox";
import Dropdown from "./Dropdown";
import SubmitButton from "./SubmitButton";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const courses = ["MCA", "MBA", "BCA", "BBA"];

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <p>Enter your details below</p>

      <form onSubmit={handleSubmit}>
        <TextBox
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <Dropdown
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          options={courses}
        />

        <br /><br />

        <SubmitButton text="Submit" />
      </form>

      {submitted && (
        <div>
          <h3>Submitted Details</h3>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
        </div>
      )}
    </div>
  );
}

export default App;
