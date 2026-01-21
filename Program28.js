// Program-28: Single Child Component Validation
// *******************************************
// 🔹 Concept Covered:
// 1. Using PropTypes.element to allow only a single child
// 2. Prevents multiple children causing errors
// *******************************************

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
    render() {
        return (
            <div style={{ border: '2px solid green', padding: '10px', margin: '5px' }}>
                {this.props.children}
            </div>
        )
    }
}

// Only one child element allowed
Container.propTypes = {
    children: PropTypes.element
}

// Parent Component
export default class AppContainer extends Component {
    render() {
        return (
            <div>
                <h1>Container Example</h1>
                <Container>
                    <p>This is a single child</p>
                    {/* Multiple children will give console warning */}
                </Container>
            </div>
        )
    }
}
