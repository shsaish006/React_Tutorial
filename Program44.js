/*
Program-44: Event with Parameter
Notes:
1. Demonstrates how to handle events in React with parameters.
2. Regular functions can be used for simple events.
3. Arrow functions needed when passing arguments to handlers.
4. Shows onClick example for simple button.
5. Console.log used to demonstrate event triggers.
6. Can extend to dynamic lists, tables, forms.
7. React Synthetic events normalize across browsers.
8. Event handlers do not automatically have 'this' in functional components.
9. Arrow functions preserve context and allow passing arguments.
10. Useful for Add, Delete, Update actions in lists or tables.
*/

import React from 'react';
export default function EventDemo() {
  // Simple function without argument
  const f1 = () => {
    console.log('Button clicked: f1');
  };

  // Function with arguments
  const add = (a, b) => {
    console.log(`Addition of ${a} + ${b} = ${a + b}`);
  };

  return (
    <div>
      <h2>Event with Parameter Example</h2>
      <button onClick={f1} className="btn btn-primary m-1">
        Button-1
      </button>
      <button onClick={() => add(2, 3)} className="btn btn-secondary m-1">
        Add 2+3
      </button>
    </div>
  );
}