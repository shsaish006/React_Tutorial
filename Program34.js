/*
Program-34: Batch Update in Functional Component
Notes:
1. useState is a React Hook for managing state in functional components.
2. State updates may be batched; use previous state to ensure correct updates.
3. Functional update form: setCount(prev => prev + 1)
4. increment5 calls increment 5 times; previous state ensures correct count.
5. Functional components automatically re-render on state change.
6. No 'this' keyword is needed in functional components.
7. Best for counters, toggles, and cumulative operations.
*/

import React, { useState } from "react";

export default function Demo1() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  const increment5 = () => {
    increment();
    increment();
    increment();
    increment();
    increment();
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment5}>Increment by 5</button>
    </div>
  );
}
