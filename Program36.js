/*
Program-36: Show/Hide Password
Notes:
1. Toggle password visibility by changing input type: "password" / "text".
2. Use a boolean state to track visibility.
3. Button text updates dynamically based on state.
4. Works in functional and class components.
5. setState/useState triggers re-render to reflect changes.
6. Can be extended with eye icon for better UI experience.
*/

import React, { useState } from "react";

export default function DemoPassword() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <input type={visible ? "text" : "password"} placeholder="Enter password"/>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}
