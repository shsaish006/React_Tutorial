/*
Program-74: Error Message While Typing
Notes:
1. Validates input while user types.
2. Uses component state to track errors.
3. onChange handler checks input length and type.
4. Error messages are shown instantly.
5. No form submission required for validation.
6. Improves user experience.
7. Uses conditional rendering for messages.
8. Demonstrates real-time validation.
9. Uses class component.
10. Useful for signup forms.
*/

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: "",
      nameErrorMsg: "",
      ageErrorMsg: "",
    };
  }

  myChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let err1 = "";
    let err2 = "";

    if (name === "username" && value.length < 5) {
      err1 = "Name must have at least 5 characters";
    }

    if (name === "age" && value !== "" && !Number(value)) {
      err2 = "Age must be numeric";
    }

    this.setState({
      [name]: value,
      nameErrorMsg: err1,
      ageErrorMsg: err2,
    });
  };

  render() {
    return (
      <form>
        <p>Name:</p>
        <input name="username" onChange={this.myChangeHandler} />
        <div style={{ color: "red" }}>{this.state.nameErrorMsg}</div>

        <p>Age:</p>
        <input name="age" onChange={this.myChangeHandler} />
        <div style={{ color: "red" }}>{this.state.ageErrorMsg}</div>
      </form>
    );
  }
}
