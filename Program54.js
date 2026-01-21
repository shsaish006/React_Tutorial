/*
Program-54: componentDidUpdate Example

Notes:
1. Demonstrates class component lifecycle method componentDidUpdate.
2. componentDidUpdate is called after render and DOM updates.
3. Can be used to perform side effects after state or props changes.
4. componentDidUpdate receives previous props and previous state.
5. Useful for updating DOM elements or making API calls after updates.
6. Constructor initializes state.
7. componentDidMount triggers a state change after 1 second.
8. Console logs track the lifecycle methods and state changes.
9. UI shows favorite color and updates div after componentDidUpdate.
10. Inline styles used for div and layout.
11. Sequence: constructor -> render -> componentDidMount -> render -> componentDidUpdate.
12. Example demonstrates safe DOM manipulation after state change.
*/

import React from "react";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
    console.log("Constructor: favoritecolor =", this.state.favoritecolor);
  }

  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
      console.log("State updated to yellow");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
    console.log("Previous favoritecolor:", prevState.favoritecolor);
    console.log("Current favoritecolor:", this.state.favoritecolor);

    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    console.log("Render called, favoritecolor =", this.state.favoritecolor);
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Program-54: componentDidUpdate Example</h2>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        <div
          id="mydiv"
          style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}
        ></div>
        <p style={{ marginTop: "15px", fontStyle: "italic", color: "gray" }}>
          After 1 second, componentDidMount triggers a state change. componentDidUpdate
          is called automatically after render and updates div with new state.
        </p>
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Lifecycle Notes:</h4>
          <ol>
            <li>Constructor initializes favoritecolor</li>
            <li>Render displays initial state</li>
            <li>componentDidMount updates state after 1 second</li>
            <li>Render called again due to state change</li>
            <li>componentDidUpdate updates div with new favoritecolor</li>
            <li>Safe DOM manipulation occurs after render</li>
            <li>Console logs track lifecycle methods and state changes</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Header;
