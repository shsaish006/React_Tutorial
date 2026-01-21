/*
Program-88: useState Hook
Notes:
1. useState replaces class state.
2. Functional component state handling.
3. Simple counter example.
4. Clean, minimal code.
5. Shows initial state & setter function.
6. Modern React functional pattern.
7. No this binding required.
8. Hooks provide easy state logic reuse.
9. Can combine multiple useState variables.
10. Beginner-friendly example.
*/

import React, { useState } from "react";

export default function Demo1() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
