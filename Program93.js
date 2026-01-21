/*
Program-93: Redux Counter
Notes:
1. Redux manages global state in React apps.
2. Actions: increment, decrement, reset.
3. Reducer defines how state changes.
4. Store provides state to components via Provider.
5. useSelector reads state.
6. useDispatch triggers actions.
7. Good for large apps or shared state.
8. Demonstrates Redux Toolkit usage.
9. Clean separation of concerns.
10. UI updates automatically on state change.
*/
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
