/*
Program-96: useCallback Hook
Notes:
1. Prevents unnecessary re-renders of child components.
2. Memoized callback persists across renders.
3. Useful when passing functions to child components.
4. Works with React.memo for performance optimization.
5. Demonstrates Todo addition without child re-rendering.
6. Shows dependency array usage.
7. Functional component pattern.
8. Increment counter independent of todo updates.
9. Modern React best practices.
10. Clean, readable structure.
*/

import React, { useState, useCallback } from "react";

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("Child rendered");
  return (
    <div>
      <h2>Todos</h2>
      {todos.map((todo, i) => <p key={i}>{todo}</p>)}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1"]);

  const increment = () => setCount(c => c + 1);
  const addTodo = useCallback(() => setTodos(t => [...t, "New Todo"]), []);

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <h3>Count: {count}</h3>
      <button onClick={increment}>+</button>
    </div>
  );
}
