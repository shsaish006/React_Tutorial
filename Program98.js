// Program-98: Error Boundary Example
// **************************************
// Notes:
// 1. Error boundaries catch JavaScript errors anywhere in their child component tree.
// 2. They log errors and display a fallback UI instead of crashing the whole app.
// 3. Error boundaries work only for class components.
// 4. They catch errors during rendering, lifecycle methods, and constructors of child components.
// 5. getDerivedStateFromError is a lifecycle method to update state after an error.
// 6. componentDidCatch is a lifecycle method to log errors for reporting.
// 7. Error boundaries cannot catch errors inside event handlers.
// 8. You can wrap multiple components in a single error boundary.
// 9. Multiple error boundaries can isolate crashes to specific components.
// 10. Always provide a user-friendly fallback UI.
// 11. Can be extended to send error info to a logging service.

import React, { Component } from 'react';

// Error Boundary Class
export default class MyErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }; // 1. Initialize error state
    }

    // 2. Update state when an error occurs
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // 3. Log the error to a service or console
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by Error Boundary:", error, errorInfo);
        // Example: logErrorToService(error, errorInfo);
    }

    render() {
        // 4. Show fallback UI if error occurs
        if (this.state.hasError) {
            return (
                <h2 style={{ color: 'red' }}>
                    Something went wrong. Component cannot be loaded.
                </h2>
            );
        }

        // 5. Normally render children components
        return this.props.children;
    }
}

// BuggyCounter Component to simulate error
export class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        // 6. Simulate error when counter reaches 5
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }

        return (
            <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                <h1>Count is: {this.state.counter}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Test Component to use Error Boundaries
export function Test() {
    return (
        <div style={{ padding: '20px' }}>
            <p>
                <b>
                    This is an example of Error Boundaries in React 16+. <br />
                    Click on the buttons to increase the counters.<br />
                    The counter is programmed to throw an error at 5.
                </b>
            </p>
            <hr />

            {/* 7. Wrap multiple components in a single error boundary */}
            <MyErrorBoundary>
                <p>These two counters share the same error boundary:</p>
                <BuggyCounter />
                <BuggyCounter />
            </MyErrorBoundary>

            <hr />

            {/* 8. Each counter in its own error boundary */}
            <p>Each counter has its own error boundary:</p>
            <MyErrorBoundary><BuggyCounter /></MyErrorBoundary>
            <MyErrorBoundary><BuggyCounter /></MyErrorBoundary>
        </div>
    );
}
