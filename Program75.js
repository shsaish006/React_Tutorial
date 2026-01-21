/*
Program-75: Error Message on Submit
Notes:
1. Validation happens only after submit.
2. Prevents form submission if invalid.
3. Errors stored in state.
4. Uses controlled inputs.
5. Suitable for simple forms.
6. Reduces validation overhead.
7. Shows error only once user submits.
8. Uses class component.
9. Demonstrates submit-based validation.
10. Common interview question.
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
    this.setState({ [e.target.name]: e.target.value });
  };

  mySubmitHandler = (e) => {
    e.preventDefault();
    let err1 = "";
    let err2 = "";

    if (this.state.username.length < 5) {
      err1 = "Name must have 5 characters";
    }

    if (this.state.age !== "" && !Number(this.state.age)) {
      err2 = "Age must be numeric";
    }

    this.setState({ nameErrorMsg: err1, ageErrorMsg: err2 });
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <input name="username" onChange={this.myChangeHandler} />
        <div>{this.state.nameErrorMsg}</div>

        <input name="age" onChange={this.myChangeHandler} />
        <div>{this.state.ageErrorMsg}</div>

        <button>Submit</button>
      </form>
    );
  }
}
