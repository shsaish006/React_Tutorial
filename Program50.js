/*
Program-50: Constructor & getDerivedStateFromProps
Notes:
1. Demonstrates class component lifecycle method: getDerivedStateFromProps.
2. constructor initializes state.
3. getDerivedStateFromProps updates state based on props before render.
4. Useful when state depends on changing props.
5. Static method; cannot access this inside it.
6. Returns new state object or null.
7. Called on mounting and updating.
8. Provides controlled update behavior for props-driven state.
9. Demonstrates favorite color example.
10. Avoid side-effects inside getDerivedStateFromProps; use componentDidUpdate for side-effects.
*/

import React from 'react';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red' };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.favColor !== state.favoriteColor) {
      return { favoriteColor: props.favColor };
    }
    return null;
  }

render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}
