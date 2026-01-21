// Program-27: propTypes Example
// *******************************************
// 🔹 Concept Covered:
// 1. Prop validation using propTypes
// 2. Required props
// 3. Warning in console if type mismatch
// 4. Ensures type safety for React props
// *******************************************

import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Child Component
class Student extends Component {
    render() {
        return (
            <div style={{ border: '1px solid blue', padding: '10px', margin: '5px' }}>
                <p>Student Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
            </div>
        )
    }
}

// PropTypes validation
Student.propTypes = {
    name: PropTypes.string.isRequired, // name must be string & required
    age: PropTypes.number // age must be number (optional)
}

// Parent Component
export default class StudentList extends Component {
    render() {
        return (
            <div>
                <h1>Students</h1>
                <Student name="Mark" age={24} />
                <Student name="Peter" age={25} />
                {/* <Student name={42} /> Will show warning in console */}
            </div>
        )
    }
}
