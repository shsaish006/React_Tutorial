/*
Program-59: React.StrictMode
Notes:
1. Helps highlight potential problems in an application.
2. Identifies unsafe lifecycles, legacy API usage.
3. Runs certain functions twice in development mode.
4. Does not affect production build.
5. Can wrap entire app or specific components.
6. Useful for identifying side effects, deprecated patterns.
7. Encourages writing safer and future-proof code.
8. StrictMode does not render anything in UI.
9. Safe for both class and functional components.
10. Demonstrates warnings in console for unsafe lifecycle usage.
*/

import React, { Component } from "react";

class Demo extends Component {
  componentWillMount() { // deprecated lifecycle
    console.log("componentWillMount called (unsafe!)");
  }

  render() {
    return <h3>Hello from Demo Component</h3>;
  }
}

export default function App() {
  return (
    <React.StrictMode>
      <div style={{ padding: "20px" }}>
        <h2>Program-59: React.StrictMode Example</h2>
        <Demo />
      </div>
    </React.StrictMode>
  );
}
