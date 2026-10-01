import { useState } from "react";

import TextBox from "./components/TextBox";
import Dropdown from "./components/Dropdown";
import SubmitButton from "./components/SubmitButton";

function App() {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedCourse, setSubmittedCourse] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setSubmittedName(name);
    setSubmittedCourse(course);
  }

  return (
    <div>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>

        <TextBox
          name={name}
          setName={setName}
        />

        <br />

        <Dropdown
          course={course}
          setCourse={setCourse}
        />

        <br />

        <SubmitButton />

      </form>

      {/* Display submitted details */}

      {submittedName && (
        <div>
          <h2>Submitted Details</h2>

          <p>Name: {submittedName}</p>
          <p>Course: {submittedCourse}</p>
        </div>
      )}

    </div>
  );
}

export default App;
