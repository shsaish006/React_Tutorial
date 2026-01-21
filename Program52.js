/*
Program-52: shouldComponentUpdate Example
Notes:
1. Demonstrates class component lifecycle method shouldComponentUpdate.
2. shouldComponentUpdate controls whether a component re-renders on state/prop change.
3. Returning false prevents re-rendering, useful for performance optimization.
4. Constructor initializes state.
5. changeColor function updates state but render is prevented.
6. render() shows current state of favoritecolor.
7. console.log demonstrates render calls.
8. Button click triggers changeColor but shouldComponentUpdate blocks render.
9. Useful in large apps to prevent unnecessary renders.
10. Can be extended with props comparison to allow selective updates.
11. Lifecycle order: constructor -> render -> componentDidMount -> shouldComponentUpdate -> render.
12. UI updates dynamically only when allowed by shouldComponentUpdate.
*/

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
    console.log("Constructor: favoritecolor =", this.state.favoritecolor);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called with nextState:", nextState);
    // prevent all updates
    return false;
  }

  changeColor = () => {
    console.log("changeColor called");
    this.setState({ favoritecolor: "blue" });
  };

  render() {
    console.log("Render called, favoritecolor =", this.state.favoritecolor);
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Program-52: shouldComponentUpdate Example</h2>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        <button
          type="button"
          onClick={this.changeColor}
          style={{ marginTop: "10px", padding: "5px 15px" }}
        >
          Change Color
        </button>
        <p style={{ marginTop: "10px", fontStyle: "italic", color: "gray" }}>
          Click the button. Render will not happen because shouldComponentUpdate returns false.
        </p>
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Lifecycle Notes:</h4>
          <ol>
            <li>Constructor initializes state</li>
            <li>Render called with initial state</li>
            <li>Button click triggers changeColor</li>
            <li>shouldComponentUpdate returns false</li>
            <li>Render blocked, state updated but UI unchanged</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Header;
