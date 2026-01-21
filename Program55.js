/*
Program-55: componentDidCatch (Error Boundaries)
Notes:
1. Used to catch errors in child components.
2. Prevents app from crashing due to runtime errors.
3. componentDidCatch(error, info) receives error and stack info.
4. Display fallback UI when error occurs.
5. Child component intentionally throws error for demo.
6. Useful in production for error logging.
7. Can log errors to external service.
8. Works only in class components.
9. Parent component can continue rendering unaffected children.
10. Demonstrates safe error handling in React apps.
*/

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }

  componentDidCatch(error, info) {
    console.log("ErrorBoundary: error caught", error);
    console.log("ErrorBoundary: info", info);
    this.setState({ hasError: true, errorMsg: error.toString() });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h2>Something went wrong!</h2>
          <p>{this.state.errorMsg}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

class BuggyComponent extends React.Component {
  render() {
    if (Math.random() > 0.5) {
      throw new Error("Random error for demonstration!");
    }
    return <h3>Component loaded successfully!</h3>;
  }
}

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Program-55: Error Boundary Example</h2>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
