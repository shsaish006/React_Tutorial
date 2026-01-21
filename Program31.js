// Program-31: State Example (Counter)
// *******************************************
// 🔹 Concept Covered:
// 1. Using state to store dynamic data
// 2. setState triggers re-render
// 3. State should not be mutated directly
// 4. Arrow function auto-binds 'this'
// *******************************************

import React, { Component } from 'react';

export default class Counter extends Component {
    state = { count: 0 }

    increment = () => {
        this.setState({ count: this.state.count + 1 }) // Correct way to update state
    }

    render() {
        return (
            <div style={{ border: '2px solid brown', padding: '10px', margin: '5px' }}>
                <h2>Counter Component</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Click to Increment</button>
            </div>
        )
    }
}
