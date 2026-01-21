/*
Program-48: Pure Component
Notes:
1. PureComponent automatically implements shouldComponentUpdate with shallow props/state comparison.
2. Avoids unnecessary re-renders if state/props have not changed.
3. Useful for performance optimization in class components.
4. Demonstrates setInterval changing state every 5 seconds.
5. console.log shows render calls to track optimization.
6. Functional equivalent uses React.memo for similar behavior.
7. Renders only when state actually changes.
8. Can combine with props passed from parent for selective re-rendering.
9. Best for components with heavy rendering logic.
10. Demonstrates lifecycle behavior of PureComponent.
*/

import React, { PureComponent } from 'react';

export default class DemoPure extends PureComponent {
  state = { name: 'Sachin' };

  componentDidMount() {
    setInterval(() => this.setState({ name: 'Sachin' }), 5000);
  }

  render() {
    console.log('DemoPure render called...');
    return <div>This is DemoPure Component: {this.state.name}</div>;
  }
}
