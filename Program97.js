/*
Program-97: useMemo Hook
Notes:
1. Memoizes expensive calculations.
2. Prevents recalculation unless dependencies change.
3. Demonstrates count-based expensive computation.
4. Optimizes performance for large computations.
5. useState manages simple state updates.
6. UI updates efficiently on unrelated state changes.
7. Shows difference between useMemo and direct calculation.
8. Functional component pattern.
9. Modern React best practices.
10. Avoids unnecessary re-renders.
*/

import React, { useState, useMemo } from "react";

export default function Demo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo-1", "Todo-2"]);

  const expensiveCalculation = num => {
    console.log("Calculating...");
    let result = num;
    for (let i = 0; i < 100000000; i++) result += 1;
    return result;
  };

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <div>
        <h2>Todos</h2>
        {todos.map((todo, i) => <p key={i}>{todo}</p>)}
        <button onClick={() => setTodos([...todos, "New Todo"])}>Add Todo</button>
      </div>
      <hr />
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(c => c + 1)}>+</button>
        <h2>Expensive Calculation: {calculation}</h2>
      </div>
    </div>
  );
}
