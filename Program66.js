/*
Program-66: Ref Forwarding in React
==================================
Notes:
1. Ref forwarding allows passing refs from parent to child components.
2. Normally, refs cannot be attached to custom components.
3. React.forwardRef() enables ref forwarding.
4. Parent component creates ref using React.createRef().
5. Child component receives ref as second argument.
6. Ref is attached to a DOM element inside child.
7. Parent can directly access child DOM properties.
8. Useful for focus, animations, measuring DOM.
9. Maintains component encapsulation.
10. Works with functional components only.
11. Avoids breaking abstraction layers.
12. Common use case: reusable UI components.
13. FancyButton exposes its internal button DOM.
14. Parent reads className and id via ref.
15. Demonstrates advanced ref usage.
*/

import React, { Component } from "react";

/* ---------- Child Component using forwardRef ---------- */
const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className="FancyButton"
      id="btn1"
      style={{ padding: "10px", background: "skyblue" }}
    >
      {props.children}
    </button>
  );
});

/* ---------- Parent Component ---------- */
export default class Program66 extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  fun1 = () => {
    console.log(this.myRef.current.className);
    console.log(this.myRef.current.id);
    alert(
      "Class: " +
        this.myRef.current.className +
        " | Id: " +
        this.myRef.current.id
    );
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Program-66: Ref Forwarding</h2>

        <FancyButton ref={this.myRef}>
          <div>Fancy Button Text</div>
        </FancyButton>

        <br />
        <br />

        <button onClick={this.fun1}>Access Child Ref</button>
      </div>
    );
  }
}
