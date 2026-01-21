/*
Program-51: componentDidMount Example
Notes:
1. Demonstrates class component lifecycle method componentDidMount.
2. componentDidMount is called after the component is mounted.
3. Useful for initializing data, timers, or API calls.
4. setTimeout simulates async data fetching.
5. state change triggers re-render after mount.
6. Constructor initializes state.
7. render() displays current state.
8. Shows dynamic update of UI after mount.
9. Can be extended to fetch API or update multiple states.
10. Each lifecycle method can log to console for understanding sequence.
*/

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" }; // initial state
    console.log("Constructor: favoritecolor =", this.state.favoritecolor);
  }

  componentDidMount() {
    console.log("componentDidMount called");
    // simulate async update
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
      console.log("State updated to yellow after mount");
    }, 1000);
  }

  render() {
    console.log("Render called, favoritecolor =", this.state.favoritecolor);
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Program-51: componentDidMount Example</h2>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        <p>
          The favorite color will change to yellow 1 second after the component
          mounts.
        </p>
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Lifecycle Sequence</h4>
          <ol>
            <li>Constructor called first</li>
            <li>Render called with initial state</li>
            <li>componentDidMount called after mount</li>
            <li>setState triggers re-render</li>
          </ol>
        </div>
        <div style={{ marginTop: "10px", fontStyle: "italic", color: "gray" }}>
          Open console to see lifecycle logs
        </div>
      </div>
    );
  }
}

export default Header;
