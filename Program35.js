/*
Program-35: Show/Hide Element
Notes:
1. Conditional rendering is done using ternary operator or && operator.
2. toggleFlag inverts the boolean state to show/hide element.
3. Works for class and functional components.
4. State updates trigger re-render automatically.
5. Can be used for modals, menus, or any toggleable UI elements.
6. Button text can dynamically change based on state.
7. Class components require binding or arrow functions for handlers.
*/

import React, { useState } from "react";

export default function Demo() {
  const [flag, toggleFlag] = useState(true);

  return (
    <div>
      {flag && <div>Hello World</div>}
      <button onClick={() => toggleFlag(!flag)}>
        {flag ? "HIDE" : "SHOW"}
      </button>
    </div>
  );
}
