/*
Program-49: React.memo
Notes:
1. Functional component optimization using React.memo.
2. Prevents re-rendering if props do not change.
3. Useful for child components receiving stable props.
4. Demonstrates parent state change (counter) does not re-render child if unrelated.
5. console.log used to observe renders.
6. Can be combined with useCallback for function props.
7. Prevents unnecessary performance overhead in large apps.
8. React.memo only works for functional components.
9. If props change, child re-renders as usual.
10. Best used selectively for pure functional child components.
*/

import React, { useState } from 'react';

const DemoChild = React.memo(({ cars }) => {
  console.log('DemoChild render called...');
  return (
    <div>
      <h3>Cars List</h3>
      <ul>{cars.map((c, idx) => <li key={idx}>{c}</li>)}</ul>
    </div>
  );
});

export default function DemoParent() {
  const [counter, setCounter] = useState(0);
  const [cars, setCars] = useState(['Tata', 'Honda', 'Maruti']);

  return (
    <div>
      <h2>React.memo Example</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter ({counter})</button>
      <DemoChild cars={cars} />
    </div>
  );
}
// React.memo prevents <DemoChild /> from re-rendering when the parent changes unless props (cars) change.

// Clicking the Increment Counter button will re-render the parent, but DemoChild console.log will not run, showing the optimization.

// If you modify cars using setCars, the child will re-render normally.
