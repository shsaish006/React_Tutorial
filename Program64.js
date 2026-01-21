/*
Program-64: Addition Using Refs (Class & Functional)
Notes:
1. Demonstrates uncontrolled input handling using refs.
2. React.createRef() used in class component.
3. useRef hook used in functional component.
4. Button click reads DOM values directly.
5. Avoids useState for input handling.
6. Useful for uncontrolled forms.
7. Shows class vs functional refs difference.
8. parseInt / unary + converts string to number.
9. Alerts display sum immediately.
10. Default export wrapper allows easy importing.
*/

import React, { Component, createRef, useRef } from "react";

// ---------------- CLASS COMPONENT ----------------
class AdditionClass extends Component {
  constructor(props) {
    super(props);
    this.input1 = createRef();
    this.input2 = createRef();
  }

  add = () => {
    const val1 = parseInt(this.input1.current.value);
    const val2 = parseInt(this.input2.current.value);
    alert(val1 + val2);
  };

  render() {
    return (
      <div>
        <h3>Class Component</h3>
        num1: <input ref={this.input1} />
        num2: <input ref={this.input2} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

// ---------------- FUNCTIONAL COMPONENT ----------------
function AdditionFunc() {
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const add = () => {
    const val1 = +inputRef1.current.value;
    const val2 = +inputRef2.current.value;
    alert(val1 + val2);
  };

  return (
    <div>
      <h3>Functional Component</h3>
      num1: <input ref={inputRef1} />
      num2: <input ref={inputRef2} />
      <button onClick={add}>Add</button>
    </div>
  );
}

// ---------------- DEFAULT EXPORT (IMPORTANT) ----------------
export default function Program64() {
  return (
    <div>
      <h2>Program-64: Addition Using Refs</h2>
      <AdditionClass />
      <hr />
      <AdditionFunc />
    </div>
  );
}
