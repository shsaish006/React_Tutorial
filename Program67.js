/*
Program-67: Form Submit using Controlled Components
===================================================
Notes:
1. Controlled form elements use React state.
2. useState stores form input values.
3. Input value is bound to state.
4. onChange updates state on every keystroke.
5. onSubmit handles form submission.
6. preventDefault stops page refresh.
7. Form data is always in sync with UI.
8. Easy to validate and manipulate data.
9. Recommended approach for most forms.
10. Demonstrates two controlled inputs.
*/

import React, { useState } from "react";

export default function Program67() {
  const [fname, setFname] = useState("sachin");
  const [lname, setLname] = useState("tendulkar");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(fname + " " + lname);
  };

  return (
    <div>
      <h2>Program-67: Controlled Form Submit</h2>
      <form onSubmit={submitHandler}>
        First Name:
        <input value={fname} onChange={(e) => setFname(e.target.value)} />
        <br />
        Last Name:
        <input value={lname} onChange={(e) => setLname(e.target.value)} />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
