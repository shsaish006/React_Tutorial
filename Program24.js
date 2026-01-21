// Program-24: forceUpdate()
// *******************************************
// 🔹 Concept Covered:
// 1. Using forceUpdate to manually re-render
// 2. Not recommended, better to use state
// 3. Can update class properties and reflect in UI
// *******************************************

import React, { Component } from 'react';

export default class Conditional extends Component {
    count = 0;

    increment = () => {
        this.count++;
        this.forceUpdate(); // manually re-renders the component
    }

    render() {
        return (
            <div>
                <p>The count is: {this.count}</p>
                <button onClick={this.increment}>Add one</button>
            </div>
        )
    }
}
