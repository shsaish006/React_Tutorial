/*
Program-95: useReducer Hook
Notes:
1. Manages complex state logic in components.
2. reducer function handles ADD, DELETE, TOGGLE actions.
3. useReducer returns [state, dispatch].
4. Easier than multiple useState for related state.
5. Functional approach for Todos.
6. nextTodoId keeps unique id.
7. Checkbox toggles completed status.
8. Delete removes a todo from array.
9. Scalable for larger state objects.
10. Demonstrates clean state updates.
*/

import React, { useReducer, useRef } from "react";

const initialTodos = [
  { id: 1, title: "Todo 1", complete: false },
  { id: 2, title: "Todo 2", complete: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": return [...state, action.payload];
    case "DELETE": return state.filter(todo => todo.id !== action.id);
    case "TOGGLE": return state.map(todo => 
      todo.id === action.id ? { ...todo, complete: !todo.complete } : todo
    );
    default: return state;
  }
};

let nextTodoId = 3;

export default function UseReducerDemo() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const inputRef = useRef();

  const addNewTodo = title => {
    dispatch({ type: "ADD", payload: { id: nextTodoId++, title, complete: false } });
  };

  return (
    <div>
      <input ref={inputRef} placeholder="New Todo" />
      <button onClick={() => addNewTodo(inputRef.current.value)}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.complete} onChange={() => dispatch({ type: "TOGGLE", id: todo.id })} />
            {todo.title}
            <button onClick={() => dispatch({ type: "DELETE", id: todo.id })}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
