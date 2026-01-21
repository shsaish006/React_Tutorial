/*
Program-56: getDerivedStateFromProps
Notes:
1. Called before render on both mount and update.
2. Used to update state based on props.
3. Static method; cannot access `this`.
4. Returns object to update state or null to do nothing.
5. Demonstrates syncing state with props.
6. Safe alternative to componentWillReceiveProps.
7. Useful for derived UI state.
8. Can be used with both class components.
9. Helps maintain controlled components.
10. Logs show method invocation.
*/

import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called", props.color, state.favoritecolor);
    if (props.color !== state.favoritecolor) {
      return { favoritecolor: props.color };
    }
    return null;
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

export default function App() {
  return <Header color="blue" />;
}
