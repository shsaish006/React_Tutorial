/*
Program-43: ToDo CRUD Example
Notes:
1. useState used to store array of todos.
2. Each todo has id, text, completed boolean.
3. deleteToDo filters out todo with given id.
4. toggleToDo flips the completed flag of the selected todo.
5. addToDo pushes new todo into array with unique id.
6. Spread operator ensures re-render by creating new array reference.
7. ToDoList component renders todos and provides toggle/delete functionality.
8. AddToDo component handles input and adds new todo.
9. Can be extended with edit functionality or persistence using localStorage.
10. Functional components + hooks make CRUD easy to implement.
11. Array.map used to update todo array immutably.
12. Dynamic class or style can show completed vs pending todos.
*/

import React, { useState } from "react";

function ToDoList({ todoArr, deleteToDo, toggleToDo }) {
  return (
    <ul>
      {todoArr.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
          {todo.text}
          <button onClick={() => toggleToDo(todo.id)}>Toggle</button>
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

function AddToDo({ addToDo }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => { addToDo(text); setText(""); }}>Add</button>
    </div>
  );
}

export default function ToDoCRUD() {
  const initialTodos = [
    { id: 1, text: "To Do 1", completed: true },
    { id: 2, text: "To Do 2", completed: false },
    { id: 3, text: "To Do 3", completed: true },
  ];

  const [todoArr, setToDoArr] = useState(initialTodos);

  const deleteToDo = (id) => setToDoArr(todoArr.filter((todo) => todo.id !== id));
  const toggleToDo = (id) => setToDoArr(todoArr.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  const addToDo = (text) => setToDoArr([...todoArr, { id: todoArr.length + 1, text, completed: false }]);

  return (
    <div>
      <h2>ToDo CRUD Example</h2>
      <AddToDo addToDo={addToDo} />
      <ToDoList todoArr={todoArr} deleteToDo={deleteToDo} toggleToDo={toggleToDo} />
    </div>
  );
}
