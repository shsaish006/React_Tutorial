/*
Program-70: Multiple Input Fields Handling
=========================================
Notes:
1. Single change handler handles all inputs.
2. name attribute identifies field.
3. State updated dynamically using computed keys.
4. Avoids multiple handlers.
5. Scalable for large forms.
6. Works with controlled inputs.
7. Demonstrates object-based state update.
8. Uses class component.
9. onSubmit prevents page refresh.
10. Common interview pattern.
*/

import React from "react";

export default class Program70 extends React.Component {
  constructor() {
    super();
    this.state = { username: "", age: "" };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    alert(this.state.username + " " + this.state.age);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h2>Program-70: Multiple Inputs</h2>
        Name:
        <input name="username" onChange={this.changeHandler} />
        <br />
        Age:
        <input name="age" onChange={this.changeHandler} />
        <br /><br />
        <button>Submit</button>
      </form>
    );
  }
}
