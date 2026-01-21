// Program-25: Props Example (Single File)
// *******************************************
// 🔹 Concept Covered:
// 1. Passing data from parent to child
// 2. Accessing props in child component
// 3. Parent → Child communication
// 4. Props are read-only
// *******************************************

import React, { Component } from 'react'; 

// Child Component
class Child extends Component {
    render() {
        return (
            <div>
                <h2>This is Child Component</h2>
                <h2>{this.props.name} -- {this.props.age}</h2>
            </div>
        )
    }
}

// Parent Component
export default class Parent extends Component {
    render() {
        let user = { name: 'sachin', age: 35 }; // Data to pass as props
        return (
            <div>
                <h1>This is Parent Component</h1>
                <Child name={user.name} age={user.age} /> {/* Passing props */}
            </div>
        )
    }
}
