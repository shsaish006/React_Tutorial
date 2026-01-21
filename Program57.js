/*
Program-57: React.PureComponent
Notes:
1. PureComponent implements shouldComponentUpdate with shallow prop/state comparison.
2. Avoids unnecessary re-renders.
3. Only re-renders when props/state actually change.
4. Useful for performance optimization.
5. Works with class components.
6. Demonstrates updating state without triggering render.
7. Console logs show render calls.
8. Useful in large lists or complex UI components.
9. Avoids deep comparison; only shallow.
10. Works best with immutable data.
*/

import React from "react";

class DemoChild extends React.PureComponent {
  render() {
    console.log("DemoChild render called");
    return <h3>Child Value: {this.props.value}</h3>;
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: 10 };
  }

  increment = () => this.setState({ val: 10 }); // same value, PureComponent won't re-render

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Program-57: PureComponent Example</h2>
        <button onClick={this.increment}>Increment</button>
        <DemoChild value={this.state.val} />
      </div>
    );
  }
}
