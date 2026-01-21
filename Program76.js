/*
Program-76: Load Form With Default Values
Notes:
1. Preloads form with initial data.
2. Uses controlled components.
3. State initializes default values.
4. Useful for edit forms.
5. onChange updates state.
6. Form submission shows values.
7. Textarea handled as controlled input.
8. Demonstrates two-way binding.
9. Uses class component.
10. Common CRUD requirement.
*/

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "sachin",
      age: 35,
      address: "bangalore",
    };
  }

  myChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  mySubmitHandler = (e) => {
    e.preventDefault();
    alert(
      this.state.username +
        " " +
        this.state.age +
        " " +
        this.state.address
    );
  };

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <input
          name="username"
          value={this.state.username}
          onChange={this.myChangeHandler}
        />
        <input
          name="age"
          value={this.state.age}
          onChange={this.myChangeHandler}
        />
        <textarea
          name="address"
          value={this.state.address}
          onChange={this.myChangeHandler}
        />
        <button>Submit</button>
      </form>
    );
  }
}
