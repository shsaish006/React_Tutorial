// Program-30: Methods as Props (Child calls Parent Method)
// *******************************************
// 🔹 Concept Covered:
// 1. Passing methods from parent to child
// 2. Child invoking parent methods
// 3. Passing parameters from child to parent
// *******************************************

import React, { Component } from 'react';

// Child Component
class Child extends Component {
    render() {
        return (
            <div style={{ border: '2px solid purple', padding: '10px', margin: '5px' }}>
                <p>I am Child Component</p>
                <button onClick={this.props.greetHandler}>
                    Call Parent
                </button>
                <button onClick={() => this.props.greetHandler2('Child')}>
                    Call Parent with Param
                </button>
            </div>
        )
    }
}

// Parent Component
export default class Parent extends Component {
    state = { parentName: 'Parentttt' }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`)
    }

    greetParentWithParam = (data) => {
        alert(`Hello from ${data}`)
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <Child 
                    greetHandler={this.greetParent} 
                    greetHandler2={this.greetParentWithParam} 
                />
            </div>
        )
    }
}
