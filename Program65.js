/*
Program-65: Callback Refs Example
Notes:
1. Demonstrates callback refs instead of createRef().
2. DOM elements assigned directly using functions.
3. Works in both class and functional components.
4. No need to create refs in constructor.
5. Useful when refs need to be dynamic.
6. Reads uncontrolled input values directly.
7. parseInt / unary + converts string to number.
8. Bypasses useState for simple DOM access.
9. Shows flexibility compared to createRef().
10. Default export wrapper simplifies importing.
*/

import React, { Component } from "react";

// ---------------- CLASS COMPONENT ----------------
class CallbackRefsClass extends Component {
  add = () => {
    const val1 = parseInt(this.input1.value);
    const val2 = parseInt(this.input2.value);
    alert(val1 + val2);
  };

  render() {
    return (
      <div>
        <h3>Class Component (Callback Refs)</h3>
        <input type="text" ref={(el) => (this.input1 = el)} />
        <input type="text" ref={(el) => (this.input2 = el)} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
}

// ---------------- FUNCTIONAL COMPONENT ----------------
function CallbackRefsFunc() {
  let input1;
  let input2;

  const add = () => {
    const val1 = +input1.value;
    const val2 = +input2.value;
    alert(val1 + val2);
  };

  return (
    <div>
      <h3>Functional Component (Callback Refs)</h3>
      num1: <input ref={(el) => (input1 = el)} />
      num2: <input ref={(el) => (input2 = el)} />
      <button onClick={add}>Add</button>
    </div>
  );
}

// ---------------- DEFAULT EXPORT (IMPORTANT) ----------------
export default function Program65() {
  return (
    <div>
      <h2>Program-65: Callback Refs</h2>
      <CallbackRefsClass />
      <hr />
      <CallbackRefsFunc />
    </div>
  );
}
