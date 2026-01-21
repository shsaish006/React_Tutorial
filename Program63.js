/*
Program-63: Get Previous State Using useRef
Notes:
1. useRef stores mutable values that persist across renders.
2. Shows previous value of state before latest update.
3. useEffect updates the ref with current state after each render.
4. Useful for comparing current and previous values.
5. Demonstrates prevState logic without classes.
6. Functional component approach for legacy lifecycle methods.
7. Helps debug or track changes.
8. Inline button increments state to trigger effect.
9. Render shows both current and previous state values.
10. useRef does not trigger re-render.
*/

import React, { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <h1>
      Now: {count}, before: {prevCountRef.current}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </h1>
  );
}
