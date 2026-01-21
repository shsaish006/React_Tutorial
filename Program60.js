/*
Program-60: componentWillUnmount Example (Class Component)
Notes:
1. Demonstrates cleanup before component is removed from DOM.
2. Used for clearing timers, subscriptions, or alerts before unmounting.
3. setState in parent controls rendering of child.
4. componentWillUnmount in child triggers before removal.
5. Alerts user when component is being unmounted.
6. Classic example for resource cleanup in class components.
7. Parent manages child visibility state.
8. Functional components would use useEffect cleanup.
9. Demonstrates controlled/uncontrolled component interactions.
10. Alerts help visualize lifecycle behavior.
*/

import React from "react";

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    }
    return (
      <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}
