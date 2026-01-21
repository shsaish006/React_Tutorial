import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './store'; // import from store.js

export default function Counter() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h2>Redux Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())} style={{ margin: '0 10px' }}>Reset</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}
