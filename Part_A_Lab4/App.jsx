
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function greet() {
    alert("Hello " + firstName + " " + lastName + "!");
  }

  return (
    <div>
      <h1>Greeting Form</h1>

      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <br /><br />

      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <br /><br />

      <Button variant="contained" onClick={greet}>
        Greet Me
      </Button>
    </div>
  );
}

export default App;
