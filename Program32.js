/*
Program-32: Asynchronous State in Class Component
Notes:
1. setState() is asynchronous in React class components.
2. Multiple setState calls may be batched for performance optimization.
3. Accessing this.state immediately after setState may show the previous state.
4. If new state depends on previous state, use functional setState:
   this.setState(prevState => ({count: prevState.count + 1}))
5. Console.log inside increment shows previous value due to async nature.
6. incrementCountFiveTimes calls increment 5 times, but count may not update as expected.
7. Best practice: use functional setState for cumulative updates.
8. setState automatically triggers a re-render.
9. Event handlers can be arrow functions to bind 'this'.
10. Class component state is an object, can hold multiple values.
*/

import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // Initial state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("Current count (may be previous state):", this.state.count);
  };

  incrementCountFiveTimes = () => {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  };

  render() {
    return (
      <div>
        <h2>Counter Works</h2>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementCountFiveTimes}>
          Increment 5 Times
        </button>
      </div>
    );
  }
}
