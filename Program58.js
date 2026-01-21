/*
Program-58: getDerivedStateFromError
Notes:
1. Used to update state after an error is thrown.
2. Called during rendering phase.
3. Helps show fallback UI after error.
4. Works with class components only.
5. Typically used with componentDidCatch.
6. Returns object to update state.
7. Safe way to handle runtime errors in UI.
8. Demonstrates error message display.
9. Can log errors externally.
10. Prevents app from crashing.
*/

import React from "react";

// ErrorBoundary class handles errors in children
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state when an error occurs
  static getDerivedStateFromError(error) {
    console.log("Error captured:", error);
    return { hasError: true };
  }

  // Render fallback UI or children
  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: "red" }}>Something went wrong!</h2>;
    }
    return this.props.children;
  }
}

// Component that throws an error
class BuggyComponent extends React.Component {
  render() {
    // intentionally throw error
    throw new Error("Intentional error for demo");
    // NOTE: any code after throw won't execute
    return null; // <- this ensures ESLint sees a return
  }
}

// Main functional wrapper
export default function Program58() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Program-58: getDerivedStateFromError Example</h2>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
}
