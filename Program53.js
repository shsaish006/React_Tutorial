/*
Program-53: getSnapshotBeforeUpdate Example
Notes:
1. Demonstrates class component lifecycle method getSnapshotBeforeUpdate.
2. getSnapshotBeforeUpdate captures information (snapshot) before DOM changes.
3. Snapshot value can be returned and passed to componentDidUpdate.
4. componentDidUpdate receives snapshot and can perform post-update actions.
5. Useful for preserving scroll positions, previous state values, or other DOM metrics.
6. Constructor initializes state.
7. componentDidMount updates state after 1 second.
8. Console logs track lifecycle calls and state changes.
9. UI shows favorite color and before/after snapshots.
10. Dynamic div elements show snapshot messages.
11. render() displays current state.
12. Sequence: constructor -> render -> componentDidMount -> render -> getSnapshotBeforeUpdate -> componentDidUpdate.
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
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log("Previous favoritecolor:", prevState.favoritecolor);
    // Update div1 before DOM update
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + prevState.favoritecolor;
    // Can return a snapshot value if needed
    return prevState.favoritecolor;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
    console.log("Current favoritecolor:", this.state.favoritecolor);
    console.log("Snapshot received:", snapshot);
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }

  render() {
    console.log("Render called, favoritecolor =", this.state.favoritecolor);
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Program-53: getSnapshotBeforeUpdate Example</h2>
        <h3>My Favorite Color is {this.state.favoritecolor}</h3>
        <div
          id="div1"
          style={{ marginTop: "10px", color: "blue", fontWeight: "bold" }}
        ></div>
        <div
          id="div2"
          style={{ marginTop: "10px", color: "green", fontWeight: "bold" }}
        ></div>
        <p style={{ marginTop: "15px", fontStyle: "italic", color: "gray" }}>
          After 1 second, componentDidMount triggers a state change. getSnapshotBeforeUpdate
          captures previous state before DOM updates. componentDidUpdate updates UI with new state.
        </p>
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
          <h4>Lifecycle Notes:</h4>
          <ol>
            <li>Constructor initializes favoritecolor</li>
            <li>Render displays initial state</li>
            <li>componentDidMount updates state after 1 second</li>
            <li>Render called due to state change</li>
            <li>getSnapshotBeforeUpdate captures previous state before DOM update</li>
            <li>componentDidUpdate receives snapshot and updates div2</li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Header;
