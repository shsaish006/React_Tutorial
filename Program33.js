/*
Program-33: setState() in Detail - Using Functional Form
Notes:
1. When new state depends on previous state, always use:
   this.setState(prevState => ({count: prevState.count + 1}))
2. Ensures correct updates in batched calls.
3. Using arrow functions avoids binding 'this'.
4. incrementFive calls increment 5 times; functional setState ensures correct result.
5. Avoid directly accessing this.state for calculations in setState.
6. setState triggers re-render automatically.
7. Works for counters, toggles, and other cumulative updates.
8. Functional form is recommended for reliability in async updates.
*/

import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  incrementFive = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <h2>Counter with Functional setState</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={this.incrementFive}>Increment 5 Times</button>
      </div>
    );
  }
}
