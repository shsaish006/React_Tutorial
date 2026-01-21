/*
Program-77: Dropdown (Select Box)
Notes:
1. Demonstrates controlled select element.
2. Dropdown value stored in state.
3. onChange updates selected option.
4. Selected value displayed dynamically.
5. Useful for forms.
6. Default value set initially.
7. Uses class component.
8. Controlled input pattern.
9. React re-renders on change.
10. Common UI control.
*/

import React, { Component } from "react";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { mycar: "Volvo" };
  }

  changeHandler = (e) => {
    this.setState({ mycar: e.target.value });
  };

  render() {
    return (
      <form>
        <select value={this.state.mycar} onChange={this.changeHandler}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
          <option value="Tata">Tata</option>
        </select>
        <div>Selected: {this.state.mycar}</div>
      </form>
    );
  }
}
