/*
Program-73: Form Validation on Submit
===================================
Notes:
1. Validation triggered only on submit.
2. Prevents invalid form submission.
3. Checks numeric input.
4. Simple validation logic.
5. Uses class component.
6. alert shows validation result.
7. Controlled inputs.
8. Suitable for simple forms.
9. Less frequent validation.
10. Classic React pattern.
*/

import React from "react";

export default class Program73 extends React.Component {
  state = { age: "" };

  submitHandler = (e) => {
    e.preventDefault();
    if (!Number(this.state.age)) {
      alert("Age must be a number");
    } else {
      alert("Valid age");
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Program-73: Submit Validation</h2>
        Age:
        <input onChange={(e) => this.setState({ age: e.target.value })} />
        <br /><br />
        <button>Submit</button>
      </form>
    );
  }
}
