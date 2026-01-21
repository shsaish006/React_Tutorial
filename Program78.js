/*
Program-78: Controlled vs Uncontrolled Components
Notes:
1. Controlled component uses React state to manage form data.
2. Uncontrolled component uses DOM refs instead of state.
3. Controlled gives full control over input values.
4. Uncontrolled is simpler but less flexible.
5. onChange is mandatory for controlled inputs.
6. useRef is used for uncontrolled inputs.
7. Controlled components re-render on every change.
8. Uncontrolled components access values only on submit.
9. Controlled is preferred for validation and dynamic UI.
10. Demonstrates both approaches in one file for comparison.
*/

import React, { useState, useRef } from "react";

export default function ControlDemo() {
  // Controlled state
  const [name, setName] = useState("");

  // Uncontrolled refs
  const ageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    alert(
      "Controlled Name: " +
        name +
        " | Uncontrolled Age: " +
        ageRef.current.value
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Program-69: Controlled vs Uncontrolled</h2>

      <form onSubmit={submitHandler}>
        {/* Controlled Input */}
        <p>Controlled Input (useState)</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />

        <br /><br />

        {/* Uncontrolled Input */}
        <p>Uncontrolled Input (useRef)</p>
        <input
          type="text"
          ref={ageRef}
          placeholder="Enter age"
        />

        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
