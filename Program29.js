// Program-29: Using props.children
// *******************************************
// 🔹 Concept Covered:
// 1. Accept multiple children inside a component
// 2. Reusable wrapper component
// 3. Dynamic content rendering
// *******************************************

import React, { Component } from 'react';

// Wrapper Component
class Greet extends Component {
    render() {
        return (
            <div style={{ border: '2px solid orange', padding: '10px', margin: '5px' }}>
                <h2>This is Greet Component</h2>
                {this.props.children} {/* Render nested content */}
            </div>
        )
    }
}

// Parent Component
export default class Content extends Component {
    render() {
        return (
            <div>
                <Greet>
                    <p>I am child-1</p>
                    <p>I am child-2</p>
                </Greet>
                <Greet>
                    <p>I am another child-1</p>
                    <p>I am another child-2</p>
                </Greet>
            </div>
        )
    }
}
