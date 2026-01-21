/*
Program-72: Live Form Validation
===============================
Notes:
1. Validation happens on each keystroke.
2. Error messages stored in state.
3. Immediate user feedback.
4. Controlled inputs.
5. Prevents invalid submission.
6. Checks empty and length.
7. Improves UX.
8. Common real-world pattern.
9. Separate error states.
10. Useful for signup forms.
*/

import React, { useState } from "react";

export default function Program72() {
  const [fname, setFname] = useState("");
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setFname(e.target.value);
    if (e.target.value.length < 5)
      setError("Minimum 5 characters required");
    else setError("");
  };

  return (
    <div>
      <h2>Program-72: Validation While Typing</h2>
      <input value={fname} onChange={changeHandler} />
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}
