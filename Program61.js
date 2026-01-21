/*
Program-61: useEffect Hook Example
Notes:
1. useEffect replaces componentDidMount, componentDidUpdate.
2. Accepts dependency array to control when effect runs.
3. Demonstrates running effect only when specific state variables change.
4. useState manages multiple state variables (a, b, c).
5. Buttons update individual states to trigger re-render/effect.
6. Console.log shows effect execution timing.
7. Helps handle side effects like API calls, subscriptions, or DOM updates.
8. Returning cleanup function can handle unmounting (not used here).
9. Multiple dependencies re-run effect if any changes.
10. Functional components with hooks simplify lifecycle management.
*/

import React, { useEffect, useState } from "react";

export default function Demo() {
  const [a, setA] = useState(10);
  const [b, setB] = useState(20);
  const [c, setC] = useState(30);

  useEffect(() => {
    console.log("useEffect called: a or b changed");
  }, [a, b]);

  return (
    <>
      <div>Demo useEffect</div>
      <div>
        {a} {b} {c}
      </div>
      <button onClick={() => setA(15)}>Update A</button>
      <button onClick={() => setB(25)}>Update B</button>
      <button onClick={() => setC(35)}>Update C</button>
    </>
  );
}
