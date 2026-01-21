/*
Program-68: Uncontrolled Form using useRef
=========================================
Notes:
1. Uncontrolled components do not use state.
2. useRef accesses DOM elements directly.
3. defaultValue sets initial value.
4. Form values are read only on submit.
5. Less re-rendering compared to controlled.
6. Suitable for simple forms.
7. Similar to traditional HTML forms.
8. Refs bypass React state.
9. Faster for large forms.
10. Demonstrates ref-based form handling.
*/

import React, { useRef } from "react";

export default function Program68() {
  const ref1 = useRef();
  const ref2 = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(ref1.current.value, ref2.current.value);
  };

  return (
    <div>
      <h2>Program-68: Uncontrolled Form</h2>
      <form onSubmit={submitHandler}>
        First Name:
        <input defaultValue="Sachin" ref={ref1} />
        <br />
        Last Name:
        <input defaultValue="Tendulkar" ref={ref2} />
        <br /><br />
        <button>Submit</button>
      </form>
    </div>
  );
}
